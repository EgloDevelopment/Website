import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/ackee": {
        target: "https://ackee.eglo.pw",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ackee/, ""),
        secure: true,
      },
    },
  },
});