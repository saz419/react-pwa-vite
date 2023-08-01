import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

let faviconURL = "/favicon.svg";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       includeAssets: [faviconURL],
//       manifest: {
//         theme_color: '#ffffff',
//         icons: [
//           {
//             src: faviconURL,
//             sizes: '512x512',
//             type: 'image/svg+xml',
//             purpose: 'any maskable'
//           },
//           {
//             src: faviconURL,
//             sizes: '512x512',
//             type: 'image/png',
//           }
//         ]
//       },
//     })
//   ]
// })

export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      react(),
      VitePWA({
        includeAssets: [faviconURL],
        manifest: {
          theme_color: "#ffffff",
          icons: [
            {
              src: faviconURL,
              sizes: "512x512",
              type: "image/svg+xml",
              purpose: "any maskable",
            },
            {
              src: faviconURL,
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/react-pwa-vite/";
  }

  return config;
});
