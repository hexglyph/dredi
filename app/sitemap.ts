import type { MetadataRoute } from "next"

import { drediPages, servicePages } from "@/lib/dredi-data"
import { absoluteUrl, canonicalPath, homeSeo, serviceSeo } from "@/lib/seo"

const lastModified = new Date("2026-05-01")

function pageImages(images: readonly string[]) {
  return images
    .filter((image) => /\.(webp|png|jpg|jpeg)$/i.test(image))
    .slice(0, 8)
    .map(absoluteUrl)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homePage = drediPages.find((page) => page.slug === "home")
  const homeEntry: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl("/"),
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
    images: homePage ? [absoluteUrl(homeSeo.image), ...pageImages(homePage.images)] : [absoluteUrl(homeSeo.image)],
  }

  const serviceEntries = servicePages.map((page) => {
    const seo = serviceSeo[page.slug as keyof typeof serviceSeo]

    return {
      url: absoluteUrl(canonicalPath(page.slug)),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.92,
      images: seo ? [absoluteUrl(seo.image), ...pageImages(page.images)] : pageImages(page.images),
    }
  })

  return [homeEntry, ...serviceEntries]
}
