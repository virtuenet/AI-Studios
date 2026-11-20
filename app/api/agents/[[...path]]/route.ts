import { createProxyRoutes } from '@/lib/proxy';

const { GET, POST, PUT, DELETE } = createProxyRoutes({
  basePath: 'agents',
  logName: 'agents',
});

export { GET, POST, PUT, DELETE };
