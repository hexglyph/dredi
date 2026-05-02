import type { Metadata } from "next"

import { LocalServiceLandingPage } from "@/components/dredi/site"
import { getPageBySlug } from "@/lib/dredi-data"
import { getLocalServiceLanding } from "@/lib/local-service-landings"
import { createPageMetadata } from "@/lib/seo"

const landing = getLocalServiceLanding("/dentistica/campinas")

export const metadata: Metadata = landing
  ? createPageMetadata({
      title: landing.title,
      description: landing.description,
      path: landing.path,
      keywords: landing.keywords,
    })
  : {}

export default function DentisticaCampinasRoute() {
  const page = getPageBySlug("dentistica")

  if (!page || !landing) return null

  return <LocalServiceLandingPage page={page} landing={landing} />
}
