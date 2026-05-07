import type { MetadataRoute } from "next"

import { homeSeo, siteName } from "@/lib/seo"

export const dynamic = "force-static"

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
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
