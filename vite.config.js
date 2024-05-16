// vite.config.js
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "@parts": path.resolve(__dirname, "src/parts"),
      "@json": path.resolve(__dirname, "src/json"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@elements": path.resolve(__dirname, "src/elements"),
    },
  },
});
