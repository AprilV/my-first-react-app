import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-first-react-app/", // Specify the subdirectory name
  plugins: [react()],
});
