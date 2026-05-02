import type { Metadata } from "next"

import { DentistCampinasPage } from "@/components/dredi/site"
import { getPageBySlug } from "@/lib/dredi-data"
import { createPageMetadata, defaultOgImage } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Dentista em Campinas | Particular | Dr. Edi - Vida Odontologia",
  description:
    "Dentista particular em Campinas com mais de 20 anos de experiência. Especialista em implantes, próteses e estética dental. Avaliação odontológica na Vida Odontologia, Jardim das Oliveiras. Agende pelo WhatsApp.",
  path: "/dentista/campinas",
  image: defaultOgImage,
  keywords: [
    "dentista em Campinas",
    "dentista Campinas",
    "dentista particular Campinas",
    "melhor dentista em Campinas",
    "melhor dentista de Campinas",
    "clínica odontológica Campinas",
    "clínica odontológica em Campinas",
    "consultório odontológico Campinas",
    "dentista Jardim das Oliveiras Campinas",
    "avaliação odontológica Campinas",
    "consulta dentista Campinas",
    "dentista especialista Campinas",
    "odontologia avançada Campinas",
  ],
})

export default function DentistCampinasRoute() {
  const page = getPageBySlug("home")

  if (!page) {
    return null
  }

  return <DentistCampinasPage page={page} />
}
