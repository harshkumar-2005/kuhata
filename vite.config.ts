import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./", //  REQUIRED for S3 hosting
  plugins: [react(), tailwindcss()],
});
