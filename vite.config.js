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
      manifest: {
        name: "English Time",
        short_name: "Daily English",
        description: "Every Day New word",
        theme_color:'#171717',
        background_color:'#000000',
        display: "standalone",
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],  
        orientation:'portrait',
        icons: [
          {
            src: '/assets/android-chrome-192x192.png', 
            sizes: '192x192', 
            type: 'image/png',
            purpose: 'any maskable' 
          },
          {
            src: "/assets/android-chrome-512x512.png",
            type: "image/png",
           sizes: "512x512"
          },
          {  
            src: '/assets/android-chrome-512x512.png',  
                      sizes: '512x512',  
                      type: 'image/png',  
                      purpose: 'any maskable',  
                    }
        ]
      },
      devOptions: {
        enabled: true
      },
    
})],
});
