import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { genql } from '@david.southmountain/vite-plugin-genql';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    genql({
      endpoint: 'https://countries.trevorblades.com/graphql',
      outputPath: path.join(__dirname, '/src/client'),
    }),
    react(),
  ],
});
