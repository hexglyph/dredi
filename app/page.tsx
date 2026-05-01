import type { Metadata } from "next"

import { HomePage } from "@/components/dredi/site"
import { getPageBySlug } from "@/lib/dredi-data"
import { createPageMetadata, homeSeo } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: homeSeo.title,
  description: homeSeo.description,
  path: "/",
  image: homeSeo.image,
  keywords: homeSeo.keywords,
})

export default function RootPage() {
  const page = getPageBySlug("home")

  if (!page) {
    return null
  }

  return <HomePage page={page} />
}
