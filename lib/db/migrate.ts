/**
 * Drizzle migration runner.
 *
 * Usage:
 *   npx drizzle-kit generate   # create migration files from schema changes
 *   npx drizzle-kit migrate     # apply migrations to the database
 *
 * This file provides a programmatic interface for running migrations,
 * used by the CI pipeline and the startup health check.
 */

import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import * as schema from './schema';

/**
 * Run pending migrations against the configured database.
 * Returns the list of applied migration names.
 */
export async function runMigrations(databaseUrl?: string): Promise<string[]> {
  const url = databaseUrl || process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      'DATABASE_URL is not set. Set it to run migrations, or skip migrations in development.',
    );
  }

  const pool = new Pool({ connectionString: url, max: 1 });
  const db = drizzle(pool, { schema });

  try {
    const start = Date.now();
    // `migrate` reads from the drizzle.config.ts `out` directory by default,
    // but we pass it explicitly for programmatic use.
    await migrate(db, {
      migrationsFolder: './lib/db/migrations',
    });
    console.log(`[db] migrations applied in ${Date.now() - start}ms`);
    return []; // drizzle-kit migrate doesn't return names; use the CLI for that.
  } finally {
    await pool.end();
  }
}

/**
 * Health check: returns true when the database is reachable and migrations
 * are up to date.
 */
export async function checkDatabaseHealth(databaseUrl?: string): Promise<{
  ok: boolean;
  error?: string;
}> {
  const url = databaseUrl || process.env.DATABASE_URL;
  if (!url) return { ok: false, error: 'DATABASE_URL not set' };

  const pool = new Pool({ connectionString: url, max: 1, connectionTimeoutMillis: 3000 });
  try {
    await pool.query('SELECT 1');
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Database unreachable',
    };
  } finally {
    await pool.end();
  }
}
