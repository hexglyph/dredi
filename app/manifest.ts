import type { MetadataRoute } from "next"

import { homeSeo, siteName } from "@/lib/seo"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Dr. Edi",
    description: homeSeo.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#111111",
    lang: "pt-BR",
    categories: ["health", "medical", "dentistry"],
    icons: [
      {
        src: "/site-assets/2026/04/cropped-Logo-Dr-Edi-192x192.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/site-assets/2026/04/cropped-Logo-Dr-Edi-180x180.webp",
        sizes: "180x180",
        type: "image/webp",
        purpose: "any",
      },
    ],
  }
}
