import type { Metadata } from "next"

export const siteUrl = "https://dredi.com.br"
export const siteName = "Dr. Edi | Vida Odontologia Avançada e Estética"
export const brandName = "Vida Odontologia Avançada e Estética"
export const doctorName = "Dr. Edi"

export const defaultOgImage = "/site-assets/2026/03/Dr.-Edi-Banner-5.webp"
export const logoImage = "/site-assets/2025/01/VIDA-S_FUNDO-DOURADA.webp"
export const doctorImage = "/site-assets/2025/09/Dr-Edi-foto.webp"

export const businessProfile = {
  name: brandName,
  legalName: brandName,
  alternateName: ["Dr. Edi", "Vida Odontologia"],
  telephone: "+551932760525",
  telephoneDisplay: "(19) 3276-0525",
  whatsapp: "+5519971710013",
  whatsappDisplay: "(19) 97171-0013",
  address: {
    streetAddress: "Avenida Jorge Tibiriçá, 1613 - Jardim das Oliveiras",
    locality: "Campinas",
    region: "SP",
    postalCode: "13044-125",
    country: "BR",
  },
  areaServed: [
    "Campinas",
    "Jardim das Oliveiras",
    "Região Metropolitana de Campinas",
  ],
  sameAs: ["https://www.instagram.com/doutoredi"],
} as const

export const localKeywords = [
  "dentista em Campinas",
  "clínica odontológica em Campinas",
  "clínica dentária em Campinas",
  "odontologia em Campinas",
  "Dr. Edi",
  "Vida Odontologia",
  "Jardim das Oliveiras",
  "Avenida Jorge Tibiriçá",
  "implantes dentários Campinas",
  "próteses dentárias Campinas",
  "facetas dentárias Campinas",
  "clareamento dental Campinas",
  "ortodontia Campinas",
  "endodontia Campinas",
  "dentística Campinas",
] as const

export type ServiceSeo = {
  label: string
  serviceType: string
  title: string
  description: string
  keywords: readonly string[]
  image: string
}

export const serviceSeo = {
  implantes: {
    label: "Implantes",
    serviceType: "Implantes dentários",
    title: "Implantes dentários em Campinas",
    description:
      "Implantes dentários em Campinas com planejamento individual, próteses sobre implante e atendimento particular com o Dr. Edi.",
    keywords: [
      "implantes dentários em Campinas",
      "implante dentário Campinas",
      "implante carga imediata Campinas",
      "prótese protocolo Campinas",
      "dentista especialista em implantes Campinas",
    ],
    image: "/site-assets/2025/09/upscalemedia-transformed-1-scaled.png",
  },
  "facetas-e-coroas": {
    label: "Facetas e Coroas",
    serviceType: "Facetas dentárias e coroas",
    title: "Facetas e coroas dentárias em Campinas",
    description:
      "Facetas em resina, facetas em porcelana e coroas estéticas em Campinas para renovar a harmonia do sorriso com naturalidade.",
    keywords: [
      "facetas dentárias em Campinas",
      "facetas de porcelana Campinas",
      "facetas de resina Campinas",
      "coroas E-max Campinas",
      "estética dental Campinas",
    ],
    image: "/site-assets/2025/09/upscalemedia-transformed-2-1-scaled.webp",
  },
  clareamento: {
    label: "Clareamento",
    serviceType: "Clareamento dental",
    title: "Clareamento dental em Campinas",
    description:
      "Clareamento dental profissional em Campinas com avaliação, técnica segura e acompanhamento para um sorriso mais branco.",
    keywords: [
      "clareamento dental em Campinas",
      "clareamento dentário Campinas",
      "clareamento profissional Campinas",
      "dentes mais brancos Campinas",
    ],
    image: "/site-assets/2026/04/Dr.-Edi-Banner-2.webp",
  },
  proteses: {
    label: "Próteses",
    serviceType: "Próteses dentárias",
    title: "Próteses dentárias em Campinas",
    description:
      "Próteses dentárias fixas, removíveis, totais e protocolo em Campinas para recuperar mastigação, estética e confiança.",
    keywords: [
      "próteses dentárias em Campinas",
      "prótese dentária Campinas",
      "prótese protocolo Campinas",
      "prótese fixa Campinas",
      "dentista para prótese Campinas",
    ],
    image: "/site-assets/2026/04/Dr.-Edi-Banner-1.webp",
  },
  ortodontia: {
    label: "Ortodontia",
    serviceType: "Ortodontia",
    title: "Ortodontia em Campinas",
    description:
      "Ortodontia em Campinas com aparelhos fixos e alinhadores para corrigir posição dos dentes com planejamento personalizado.",
    keywords: [
      "ortodontia em Campinas",
      "aparelho ortodôntico Campinas",
      "alinhadores Campinas",
      "dentista ortodontia Campinas",
    ],
    image: "/site-assets/2026/03/Dr.-Edi-Banner-3.webp",
  },
  endodontia: {
    label: "Endodontia",
    serviceType: "Tratamento de canal",
    title: "Tratamento de canal em Campinas",
    description:
      "Endodontia e tratamento de canal em Campinas para dor de dente, infecção e preservação do dente natural com cuidado profissional.",
    keywords: [
      "tratamento de canal em Campinas",
      "endodontia Campinas",
      "dor de dente Campinas",
      "canal dentário Campinas",
    ],
    image: "/site-assets/2026/03/Dr-Edi-banner-8-scaled.jpg",
  },
  dentistica: {
    label: "Dentística",
    serviceType: "Dentística restauradora",
    title: "Dentística restauradora em Campinas",
    description:
      "Dentística em Campinas para restaurações estéticas, resina, fechamento de diastemas e correções funcionais do sorriso.",
    keywords: [
      "dentística em Campinas",
      "restauração estética Campinas",
      "resina dentária Campinas",
      "fechamento de diastema Campinas",
    ],
    image: "/site-assets/2026/03/Dr.-Edi-Banner-4.webp",
  },
} as const satisfies Record<string, ServiceSeo>

export const homeSeo = {
  title: "Dentista em Campinas",
  description:
    "Dentista em Campinas para implantes, próteses, facetas, clareamento, ortodontia, endodontia e dentística na Vida Odontologia com o Dr. Edi.",
  keywords: localKeywords,
  image: defaultOgImage,
} as const

type PageMetadataInput = {
  title: string
  description: string
  path: string
  image?: string
  keywords?: readonly string[]
  noindex?: boolean
}

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${siteUrl}${normalizedPath}`
}

export function canonicalPath(slug: string) {
  return slug === "home" ? "/" : `/${slug}`
}

export function getServiceSeo(slug: string) {
  return serviceSeo[slug as keyof typeof serviceSeo]
}

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  keywords = [],
  noindex = false,
}: PageMetadataInput): Metadata {
  const uniqueKeywords = Array.from(new Set([...localKeywords, ...keywords]))
  const fullTitle = title.includes("Dr. Edi")
    ? title
    : `${title} | Dr. Edi - Vida Odontologia`

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    keywords: uniqueKeywords,
    alternates: {
      canonical: path,
      languages: {
        "pt-BR": path,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noindex,
      follow: true,
      googleBot: {
        index: !noindex,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "geo.region": "BR-SP",
      "geo.placename": "Campinas",
      "business:contact_data:locality": "Campinas",
      "business:contact_data:region": "SP",
      "business:contact_data:country_name": "Brasil",
    },
  }
}
