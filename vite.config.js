import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({ 
      registerType: "autoUpdate" ,
      start_url: '.',
      manifest:{
       
        name: "English Time",
        short_name:"Daily English",
        description:"Every Day New word",
        theme_color:"#000000",
        display:"fullscreen",
      },
      devOptions: {
        enabled: true
      },
   

})],
});
