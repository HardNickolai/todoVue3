import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "views": path.resolve(__dirname, "src/views"),
      "components": path.resolve(__dirname, "src/components"),
      "ui": path.resolve(__dirname, "src/components/ui"),
      "modal": path.resolve(__dirname, "src/components/modal"),
      "interface": path.resolve(__dirname, "src/interface"),
    },
  },
});
