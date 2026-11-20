import { createProxyRoutes, getApiKeyFromProxyRequest } from '@/lib/proxy';

const { GET, POST, PUT, DELETE } = createProxyRoutes({
  basePath: 'app',
  extraHeaderDrops: ['authorization'],
  logName: 'app',
  requireAuth: false, // checked per-route below
  transformPath: (segments) => {
    const path = segments.join('/');
    return path === 'get_upload_file' ? 'get_file_upload_url' : path;
  },
  onResponse: (data, _request) => {
    // Intercept upload URL and redirect to local binary proxy
    if (
      data &&
      typeof data === 'object' &&
      'url' in data &&
      typeof (data as Record<string, unknown>).url === 'string'
    ) {
      const record = data as Record<string, unknown>;
      const originalS3Url = record.url as string;
      record.url = '/api/upload-binary';
      record.fields = {
        ...(record.fields as Record<string, unknown> || {}),
        'x-proxy-target-url': originalS3Url,
      };
    }
    return data;
  },
});

export { GET, POST, PUT, DELETE };
