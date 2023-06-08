import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/AI-powered-3d-website/client/dist/",
  plugins: [react()],
})
