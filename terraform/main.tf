# ─────────────────────────────────────────────────────────────
# AI Studios — Multi-region deployment (Phase 4 scaffold)
# ─────────────────────────────────────────────────────────────
#
# Target architecture:
#   - Next.js app on ECS Fargate / Cloud Run (stateless, autoscaled)
#   - Postgres on RDS with cross-region read replica
#   - Redis on ElastiCache (rate limiting + BullMQ)
#   - Assets on S3 + CloudFront CDN
#   - Multi-region: us-east1 (primary), eu-west1 (replica)
#
# Replace placeholder values with real resource IDs after provisioning.

terraform {
  required_version = ">= 1.5"
  backend "s3" {
    bucket = "ai-studios-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.primary_region
}

provider "aws" {
  alias  = "replica"
  region = var.replica_region
}

variable "primary_region" { type = string; default = "us-east-1" }
variable "replica_region"  { type = string; default = "eu-west-1" }
variable "environment"     { type = string; default = "production" }
variable "app_image"       { type = string; description = "Next.js app container image" }
variable "worker_image"    { type = string; description = "Worker container image" }
variable "db_password"     { type = string; sensitive = true }

# ── Database (RDS Postgres + read replica) ────────────────────

resource "aws_db_instance" "primary" {
  identifier     = "ai-studios-primary"
  engine         = "postgres"
  engine_version = "16"
  instance_class = "db.t3.medium"
  allocated_storage     = 50
  max_allocated_storage = 500
  storage_encrypted     = true
  db_name  = "ai_studios"
  username = "ai_studios_admin"
  password = var.db_password
  backup_retention_period = 30
  deletion_protection     = true
  skip_final_snapshot     = false
}

resource "aws_db_instance" "replica" {
  provider            = aws.replica
  identifier          = "ai-studios-replica"
  replicate_source_db = aws_db_instance.primary.arn
  instance_class      = "db.t3.medium"
  storage_encrypted   = true
}

# ── Redis (ElastiCache) ──────────────────────────────────────

resource "aws_elasticache_cluster" "redis" {
  cluster_id      = "ai-studios-redis"
  engine          = "redis"
  node_type       = "cache.t3.small"
  num_cache_nodes = 1
  port            = 6379
}

# ── Object Storage (S3 + lifecycle) ──────────────────────────

resource "aws_s3_bucket" "assets" {
  bucket = "ai-studios-assets-${var.environment}"
}

resource "aws_s3_bucket_versioning" "assets" {
  bucket = aws_s3_bucket.assets.id
  versioning_configuration { status = "Enabled" }
}

resource "aws_s3_bucket_lifecycle_configuration" "assets" {
  bucket = aws_s3_bucket.assets.id
  rule {
    id     = "expire-temp"
    status = "Enabled"
    expiration { days = 30 }
    filter { prefix = "temp/" }
  }
}

resource "aws_s3_bucket_public_access_block" "assets" {
  bucket                  = aws_s3_bucket.assets.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# ── Outputs ──────────────────────────────────────────────────

output "database_url" {
  value     = "postgres://ai_studios_admin:${var.db_password}@${aws_db_instance.primary.endpoint}/ai_studios"
  sensitive = true
}

output "redis_endpoint" {
  value = aws_elasticache_cluster.redis.cache_nodes[0].address
}

output "assets_bucket" {
  value = aws_s3_bucket.assets.bucket
}
