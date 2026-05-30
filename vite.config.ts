import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: ".",
  publicDir: "public",

  // Expose EMAILJS_-prefixed vars to client code (in addition to Vite's default
  // VITE_ prefix) so unprefixed Netlify env vars reach import.meta.env.
  // SECURITY: anything starting with EMAILJS_ is inlined into the browser bundle.
  // Never add EMAILJS_PRIVATE_KEY or any secret with this prefix.
  envPrefix: ["VITE_", "EMAILJS_"],

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    minify: "terser",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  server: {
    port: 3000,
    host: true,
    open: true,
  },

  preview: {
    port: 3000,
    host: true,
  },
});
