import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const serverIp = "http://localhost:5000/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/plumbing/fitting": serverIp,
      "/api/plumbing/brand": serverIp,
      "/api/plumbing/plum_fitting_type": serverIp,
      "/api/plumbing/plum_pipe_type": serverIp,
      // "/api/plumbing/pressure_fitting/slon": serverIp,
    },
  },
});
