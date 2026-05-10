import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/opix-demo/",
  plugins: [react()],
  publicDir: "public"
})
