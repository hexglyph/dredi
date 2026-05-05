import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { PhotoGalleryDetailPage } from "@/components/dredi/site"
import { getServiceGallery, serviceGalleries } from "@/lib/service-gallery-data"
import { createPageMetadata } from "@/lib/seo"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return serviceGalleries.map((gallery) => ({ slug: gallery.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const gallery = getServiceGallery(slug)

  if (!gallery) {
    return {}
  }

  return createPageMetadata({
    title: `${gallery.title} | Fotos | Dr. Edi`,
    description: gallery.description,
    path: `/fotos/${gallery.slug}`,
    image: gallery.images[0]?.src,
    keywords: [
      `fotos ${gallery.title}`,
      `${gallery.title} Campinas`,
      `resultado ${gallery.title}`,
      gallery.serviceLabel,
      "fotos odontologia Campinas",
    ],
  })
}

export default async function FotoServicoRoute({ params }: PageProps) {
  const { slug } = await params
  const gallery = getServiceGallery(slug)

  if (!gallery) {
    notFound()
  }

  return <PhotoGalleryDetailPage gallery={gallery} />
}
