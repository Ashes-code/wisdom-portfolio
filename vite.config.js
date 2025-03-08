import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? "/" : "/wisdom-portfolio/",
  define: {
    "import.meta.env.VITE_BASE_PATH": JSON.stringify(
      process.env.VERCEL ? "" : "/wisdom-portfolio"
    ),
  },
});
