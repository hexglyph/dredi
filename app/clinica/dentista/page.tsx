import type { Metadata } from "next"

import { DentistCampinasPage } from "@/components/dredi/site"
import { getPageBySlug } from "@/lib/dredi-data"
import { createPageMetadata, defaultOgImage } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Clínica Dentista em Campinas | Dr. Edi - Vida Odontologia",
  description:
    "Clínica dentista em Campinas para avaliação odontológica particular, implantes, próteses, reabilitação oral e estética dental com o Dr. Edi na Vida Odontologia.",
  path: "/clinica/dentista",
  image: defaultOgImage,
  keywords: [
    "clínica dentista Campinas",
    "clínica dentista em Campinas",
    "clínica odontológica Campinas",
    "clínica odontológica em Campinas",
    "dentista em Campinas",
    "dentista particular Campinas",
    "consultório odontológico Campinas",
    "Vida Odontologia Campinas",
    "Dr. Edi dentista",
    "implantes dentários Campinas",
    "próteses dentárias Campinas",
    "reabilitação oral Campinas",
    "estética dental Campinas",
  ],
})

export default function ClinicaDentistaRoute() {
  const page = getPageBySlug("home")

  if (!page) {
    return null
  }

  return (
    <DentistCampinasPage
      page={page}
      path="/clinica/dentista"
      label="Clínica dentista em Campinas"
    />
  )
}
