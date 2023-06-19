import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            kakaoJavaScriptKey: env.VITE_KAKAO_JAVASCRIPT_KEY,
          },
        },
      }),
    ],
    server: {
      port: 3000,
    },
    resolve: {
      alias: [
        { find: '@assets', replacement: '/src/assets' },
        { find: '@components', replacement: '/src/components' },
        { find: '@pages', replacement: '/src/pages' },
        { find: '@', replacement: '/src' },
      ],
    },
  };
});
