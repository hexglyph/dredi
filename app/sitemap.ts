import type { MetadataRoute } from "next"

import { drediPages, servicePages } from "@/lib/dredi-data"
import { localServiceLandings } from "@/lib/local-service-landings"
import { absoluteUrl, canonicalPath, homeSeo, serviceSeo } from "@/lib/seo"

export const dynamic = "force-static"

const lastModified = new Date("2026-05-02")

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

  const localLandingEntry: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl("/dentista/campinas"),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.95,
    images: [absoluteUrl(homeSeo.image)],
  }

  const localServiceEntries = localServiceLandings.map((landing) => {
    const sourcePage = servicePages.find((page) => page.slug === landing.sourceSlug)
    const seo = serviceSeo[landing.sourceSlug as keyof typeof serviceSeo]

    return {
      url: absoluteUrl(landing.path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.94,
      images: sourcePage
        ? [absoluteUrl(seo?.image ?? homeSeo.image), ...pageImages(sourcePage.images)]
        : [absoluteUrl(seo?.image ?? homeSeo.image)],
    }
  })

  return [homeEntry, localLandingEntry, ...localServiceEntries, ...serviceEntries]
}
