import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/tts": {
        target: "https://imlazytoreadallat-backend.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/tts/, "/tts"),
      },
      "/api/file": {
        target: "https://imlazytoreadallat-backend.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/file/, "/file"),
      },
      "/api/summarize": {
        target: "https://llama-server-py.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/summarize/, "/summarize"),
      },
    },
  },
});
