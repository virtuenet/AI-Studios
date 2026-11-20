import { createProxyRoutes } from '@/lib/proxy';

const { GET, POST, PUT, DELETE } = createProxyRoutes({
  basePath: 'workflow',
  logName: 'workflow',
});

export { GET, POST, PUT, DELETE };
