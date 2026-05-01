import type { Metadata } from "next"

import { DentistCampinasPage } from "@/components/dredi/site"
import { getPageBySlug } from "@/lib/dredi-data"
import { createPageMetadata, defaultOgImage } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Dentista em Campinas",
  description:
    "Dentista em Campinas para avaliação odontológica particular, implantes, próteses, facetas, clareamento e tratamento de canal.",
  path: "/dentista/campinas",
  image: defaultOgImage,
  keywords: [
    "dentista em Campinas",
    "dentista Campinas",
    "clínica odontológica Campinas",
    "avaliação odontológica Campinas",
    "consulta com dentista Campinas",
  ],
})

export default function DentistCampinasRoute() {
  const page = getPageBySlug("home")

  if (!page) {
    return null
  }

  return <DentistCampinasPage page={page} />
}
