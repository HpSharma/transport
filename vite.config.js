import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig((props) => {
  const env = loadEnv(props.mode, '', '');
  return {
    plugins: [react()],
    server: {
      port: Number(env.VITE_PORT) || 5500,
    },
    resolve: {
      alias: {
        '@components': '/src/components',
        '@context': '/src/context',
        '@hooks': '/src/hooks',
        '@interceptors': '/src/interceptors',
        '@pages': '/src/pages',
        '@services': '/src/services',
      },
    },
  };
});
