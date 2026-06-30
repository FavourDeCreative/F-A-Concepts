import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Favouritech Auto Concepts",
    short_name: "Favouritech",
    description:
      "Professional vehicle diagnostics, repairs, tinting, detailing, infotainment installation and premium vehicle upgrades.",

    start_url: "/",
    display: "standalone",

    background_color: "#ffffff",
    theme_color: "#b0060d",

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
