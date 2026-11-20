FROM python:3.15-slim
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends libgl1 libglib2.0-0 && rm -rf /var/lib/apt/lists/*
COPY requirements.lock .
RUN pip install --no-cache-dir -r requirements.lock
COPY . .
# Bake the SHA-verified YuNet + SFace models into the image so requests never
# depend on GitHub being reachable at runtime.
ENV QC_MODELS_DIR=/models
RUN useradd --create-home --uid 10001 qc \
    && python download_models.py \
    && chown -R qc:qc /app /models
USER qc
EXPOSE 8001
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8001/health')"
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8001"]
