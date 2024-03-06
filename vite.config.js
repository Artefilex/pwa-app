import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({ 
      injectRegister:"inline",
      registerType: "autoUpdate" ,
      manifest:{
        name: "English Time",
        short_name:"Daily English",
        description:"Every Day New word",
        theme_color:"#000000",
        
      },
      devOptions: {
        enabled: true
      }
})],
});
