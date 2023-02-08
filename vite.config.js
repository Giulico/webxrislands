import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true },
  plugins: [react(), glsl(), mkcert()],
});
