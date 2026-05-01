import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { ServicePage } from "@/components/dredi/site"
import { getPageBySlug, servicePages } from "@/lib/dredi-data"
import { createPageMetadata, getServiceSeo } from "@/lib/seo"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getPageBySlug(slug)

  if (!page) {
    return {}
  }

  const seo = getServiceSeo(page.slug)

  return createPageMetadata({
    title: seo?.title ?? `${page.title} em Campinas`,
    description:
      seo?.description ??
      page.text[1] ??
      "Tratamentos odontológicos com o Dr. Edi em Campinas.",
    path: `/${page.slug}`,
    image: seo?.image,
    keywords: seo?.keywords,
  })
}

export default async function DrediServiceRoute({ params }: PageProps) {
  const { slug } = await params
  const page = getPageBySlug(slug)

  if (!page || page.slug === "home") {
    notFound()
  }

  return <ServicePage page={page} />
}
