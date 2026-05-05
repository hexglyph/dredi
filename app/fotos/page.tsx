import type { Metadata } from "next"

import { PhotoGalleryIndexPage } from "@/components/dredi/site"
import { createPageMetadata, defaultOgImage } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Fotos por Serviço | Dr. Edi - Vida Odontologia",
  description:
    "Galeria com fotos organizadas por serviço odontológico: clareamento, facetas, próteses, restaurações, alinhadores, limpeza e outros tratamentos.",
  path: "/fotos",
  image: defaultOgImage,
  keywords: [
    "fotos dentista Campinas",
    "fotos tratamentos odontológicos",
    "antes e depois dentista",
    "fotos implantes dentários",
    "fotos facetas dentárias",
    "fotos clareamento dental",
    "fotos restauração em resina",
  ],
})

export default function FotosRoute() {
  return <PhotoGalleryIndexPage />
}
