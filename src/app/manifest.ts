import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "S. Kopstick & Associates",
    short_name: "SK Associates",
    description: "Spire & Adagio implementation consulting",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF9F5",
    theme_color: "#1F2A34",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
