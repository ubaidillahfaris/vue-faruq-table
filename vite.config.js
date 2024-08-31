import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/main.js', // Entry point ke file index.js
      name: 'Table',
      fileName: (format) => `table.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // Jangan masukkan Vue ke dalam bundle
      output: {
        globals: {
          vue: 'Vue', // Global variable untuk Vue
        },
      },
    },
  },
});
