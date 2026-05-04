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
  alternateName: ["Dr. Edi", "Vida Odontologia", "Vida Odontologia Campinas"],
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
  geo: {
    latitude: -22.8841,
    longitude: -47.0820,
  },
  openingHours: [
    "Mo-Fr 08:00-18:00",
  ],
  priceRange: "$$",
  areaServed: [
    "Campinas",
    "Jardim das Oliveiras",
    "Região Metropolitana de Campinas",
    "Barão Geraldo",
    "Cambuí",
    "Taquaral",
    "Sousas",
    "Nova Campinas",
    "Jardim Chapadão",
  ],
  sameAs: ["https://www.instagram.com/doutoredi"],
} as const

export const localKeywords = [
  "dentista em Campinas",
  "dentista Campinas",
  "dentista particular Campinas",
  "melhor dentista em Campinas",
  "clínica odontológica em Campinas",
  "clínica odontológica particular Campinas",
  "odontologia em Campinas",
  "odontologia avançada Campinas",
  "Dr. Edi dentista",
  "Dr. Edi Campinas",
  "Vida Odontologia",
  "Vida Odontologia Campinas",
  "dentista Jardim das Oliveiras",
  "implantes dentários Campinas",
  "implante dentário em Campinas",
  "próteses dentárias Campinas",
  "prótese dentária em Campinas",
  "prótese protocolo em Campinas",
  "facetas dentárias Campinas",
  "facetas de porcelana em Campinas",
  "coroas dentárias em Campinas",
  "lentes de contato dental Campinas",
  "clareamento dental Campinas",
  "clareamento dentário Campinas",
  "ortodontia Campinas",
  "endodontia Campinas",
  "tratamento de canal Campinas",
  "dentística Campinas",
  "estética dental Campinas",
  "reabilitação oral Campinas",
  "reabilitação oral completa Campinas",
  "dentista especialista em implantes em Campinas",
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
    title: "Implantes Dentários em Campinas",
    description:
      "Implantes dentários em Campinas com o Dr. Edi, especialista com mais de 10 mil implantes realizados. Planejamento individual, carga imediata, prótese protocolo e atendimento particular na Vida Odontologia.",
    keywords: [
      "implantes dentários em Campinas",
      "implante dentário Campinas",
      "implante carga imediata Campinas",
      "prótese protocolo Campinas",
      "dentista especialista em implantes Campinas",
      "implante unitário Campinas",
      "quanto custa implante dentário Campinas",
      "melhor dentista para implante Campinas",
      "implante dentário particular Campinas",
    ],
    image: "/site-assets/2025/09/upscalemedia-transformed-1-scaled.png",
  },
  "facetas-e-coroas": {
    label: "Facetas e Coroas",
    serviceType: "Facetas dentárias e coroas",
    title: "Facetas Dentárias em Campinas",
    description:
      "Facetas dentárias em Campinas: lentes de contato dental, facetas em porcelana, resina e coroas estéticas. Avaliação personalizada para harmonizar seu sorriso com naturalidade na Vida Odontologia.",
    keywords: [
      "facetas dentárias em Campinas",
      "facetas de porcelana Campinas",
      "facetas de resina Campinas",
      "lentes de contato dental Campinas",
      "coroas E-max Campinas",
      "estética dental Campinas",
      "quanto custa faceta dentária Campinas",
      "lente de contato dente Campinas",
    ],
    image: "/site-assets/2025/09/upscalemedia-transformed-2-1-scaled.webp",
  },
  clareamento: {
    label: "Clareamento",
    serviceType: "Clareamento dental",
    title: "Clareamento Dental em Campinas",
    description:
      "Clareamento dental profissional em Campinas com técnica segura e acompanhamento odontológico para melhorar a tonalidade dos dentes. Agende sua avaliação na Vida Odontologia.",
    keywords: [
      "clareamento dental em Campinas",
      "clareamento dentário Campinas",
      "clareamento profissional Campinas",
      "dentes mais brancos Campinas",
      "clareamento a laser Campinas",
      "quanto custa clareamento dental Campinas",
      "branqueamento dental Campinas",
    ],
    image: "/site-assets/2026/04/Dr.-Edi-Banner-2.webp",
  },
  proteses: {
    label: "Próteses",
    serviceType: "Próteses dentárias",
    title: "Próteses Dentárias em Campinas",
    description:
      "Próteses dentárias em Campinas: prótese fixa, removível, total, protocolo sobre implante. Especialista em reabilitação oral com mais de 20 anos de experiência. Agende na Vida Odontologia.",
    keywords: [
      "próteses dentárias em Campinas",
      "prótese dentária Campinas",
      "prótese protocolo Campinas",
      "prótese fixa Campinas",
      "prótese sobre implante Campinas",
      "dentista para prótese Campinas",
      "prótese total Campinas",
      "especialista em prótese dentária Campinas",
    ],
    image: "/site-assets/2026/04/Dr.-Edi-Banner-1.webp",
  },
  ortodontia: {
    label: "Ortodontia",
    serviceType: "Ortodontia",
    title: "Ortodontia em Campinas",
    description:
      "Ortodontia em Campinas com aparelhos fixos e alinhadores transparentes. Correção de mordida, alinhamento dental e planejamento personalizado na Vida Odontologia.",
    keywords: [
      "ortodontia em Campinas",
      "aparelho ortodôntico Campinas",
      "alinhadores Campinas",
      "alinhador transparente Campinas",
      "dentista ortodontia Campinas",
      "aparelho dental Campinas",
      "ortodontista Campinas",
    ],
    image: "/site-assets/2026/03/Dr.-Edi-Banner-3.webp",
  },
  endodontia: {
    label: "Endodontia",
    serviceType: "Tratamento de canal",
    title: "Tratamento de Canal em Campinas",
    description:
      "Tratamento de canal em Campinas para dor de dente, infecção e preservação dental. Endodontia com cuidado profissional e agendamento rápido na Vida Odontologia.",
    keywords: [
      "tratamento de canal em Campinas",
      "tratamento de canal Campinas",
      "endodontia Campinas",
      "dor de dente Campinas",
      "canal dentário Campinas",
      "endodontista Campinas",
      "dentista dor de dente Campinas",
    ],
    image: "/site-assets/2026/03/Dr-Edi-banner-8-scaled.jpg",
  },
  dentistica: {
    label: "Dentística",
    serviceType: "Dentística restauradora",
    title: "Dentística Restauradora em Campinas",
    description:
      "Dentística em Campinas para restaurações estéticas, resina, fechamento de diastemas e correções do sorriso. Resultados naturais e duradouros na Vida Odontologia.",
    keywords: [
      "dentística em Campinas",
      "restauração estética Campinas",
      "resina dentária Campinas",
      "fechamento de diastema Campinas",
      "restauração de dente Campinas",
      "obturação dentária Campinas",
    ],
    image: "/site-assets/2026/03/Dr.-Edi-Banner-4.webp",
  },
} as const satisfies Record<string, ServiceSeo>

export const homeSeo = {
  title: "Implantes, Próteses e Reabilitação Oral em Campinas",
  description:
    "Implantes, próteses e reabilitação oral em Campinas com o Dr. Edi. Mais de 20 anos de experiência, mais de 10 mil implantes realizados e atendimento particular na Vida Odontologia.",
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
