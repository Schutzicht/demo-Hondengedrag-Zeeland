// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Demo door Agensea — Hondengedrag Zeeland
export default defineConfig({
  site: 'https://hondengedragzeeland-demo.vercel.app',
  server: { port: 4347, host: true },
  vite: {
    plugins: [tailwindcss()],
  },
});
