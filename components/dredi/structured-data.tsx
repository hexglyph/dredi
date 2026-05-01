import {
  absoluteUrl,
  businessProfile,
  defaultOgImage,
  doctorImage,
  doctorName,
  homeSeo,
  logoImage,
  serviceSeo,
  siteName,
  siteUrl,
} from "@/lib/seo"

type JsonLdObject = Record<string, unknown>
type JsonLdInput = JsonLdObject | null | false | undefined

export type FaqItem = {
  question: string
  answer: string
}

export function JsonLd({ data }: { data: JsonLdInput | JsonLdInput[] }) {
  const graph = Array.isArray(data)
    ? {
        "@context": "https://schema.org",
        "@graph": data.filter(Boolean),
      }
    : data

  if (!graph) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  )
}

export function buildDentistSchema(): JsonLdObject {
  return {
    "@type": "Dentist",
    "@id": `${siteUrl}/#dentist`,
    name: businessProfile.name,
    legalName: businessProfile.legalName,
    alternateName: businessProfile.alternateName,
    description: homeSeo.description,
    url: siteUrl,
    image: [absoluteUrl(defaultOgImage), absoluteUrl(doctorImage)],
    logo: absoluteUrl(logoImage),
    telephone: businessProfile.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessProfile.address.streetAddress,
      addressLocality: businessProfile.address.locality,
      addressRegion: businessProfile.address.region,
      postalCode: businessProfile.address.postalCode,
      addressCountry: businessProfile.address.country,
    },
    areaServed: [
      { "@type": "City", name: "Campinas" },
      { "@type": "Place", name: "Jardim das Oliveiras" },
      { "@type": "AdministrativeArea", name: "Região Metropolitana de Campinas" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: businessProfile.telephone,
        contactType: "agendamento",
        areaServed: "BR",
        availableLanguage: ["pt-BR"],
      },
      {
        "@type": "ContactPoint",
        telephone: businessProfile.whatsapp,
        contactType: "WhatsApp",
        areaServed: "BR",
        availableLanguage: ["pt-BR"],
      },
    ],
    founder: { "@id": `${siteUrl}/#dr-edi` },
    employee: { "@id": `${siteUrl}/#dr-edi` },
    medicalSpecialty: "Dentistry",
    sameAs: businessProfile.sameAs,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${businessProfile.address.streetAddress}, ${businessProfile.address.locality} ${businessProfile.address.region}`,
    )}`,
    availableService: Object.entries(serviceSeo).map(([slug, service]) => ({
      "@type": "Service",
      "@id": `${absoluteUrl(`/${slug}`)}#service`,
      name: service.serviceType,
      serviceType: service.serviceType,
      url: absoluteUrl(`/${slug}`),
    })),
  }
}

export function buildPersonSchema(): JsonLdObject {
  return {
    "@type": "Person",
    "@id": `${siteUrl}/#dr-edi`,
    name: doctorName,
    jobTitle: "Cirurgião-dentista",
    image: absoluteUrl(doctorImage),
    worksFor: { "@id": `${siteUrl}/#dentist` },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Unicamp" },
      { "@type": "CollegeOrUniversity", name: "UNESP" },
    ],
    knowsAbout: [
      "Implantes dentários",
      "Próteses dentárias",
      "Facetas dentárias",
      "Coroas dentárias",
      "Clareamento dental",
      "Ortodontia",
      "Endodontia",
      "Dentística",
    ],
    sameAs: businessProfile.sameAs,
  }
}

export function buildWebsiteSchema(): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    inLanguage: "pt-BR",
    publisher: { "@id": `${siteUrl}/#dentist` },
    about: { "@id": `${siteUrl}/#dentist` },
  }
}

export function buildWebPageSchema({
  path,
  title,
  description,
  image,
  aboutId = `${siteUrl}/#dentist`,
}: {
  path: string
  title: string
  description: string
  image?: string
  aboutId?: string
}): JsonLdObject {
  const url = absoluteUrl(path)

  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": aboutId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(image ?? defaultOgImage),
    },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    dateModified: "2026-05-01",
  }
}

export function buildBreadcrumbSchema(
  path: string,
  items: Array<{ name: string; path: string }>,
): JsonLdObject {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function buildServiceSchema(slug: string): JsonLdObject | null {
  const service = serviceSeo[slug as keyof typeof serviceSeo]
  if (!service) return null

  const path = `/${slug}`

  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: `${service.serviceType} em Campinas`,
    serviceType: service.serviceType,
    description: service.description,
    url: absoluteUrl(path),
    image: absoluteUrl(service.image),
    provider: { "@id": `${siteUrl}/#dentist` },
    areaServed: businessProfile.areaServed.map((name) => ({
      "@type": name === "Campinas" ? "City" : "Place",
      name,
    })),
    audience: {
      "@type": "PeopleAudience",
      geographicArea: { "@type": "City", name: "Campinas" },
    },
  }
}

export function buildServiceItemListSchema(): JsonLdObject {
  return {
    "@type": "ItemList",
    "@id": `${siteUrl}/#tratamentos`,
    name: "Tratamentos odontológicos em Campinas",
    itemListElement: Object.entries(serviceSeo).map(([slug, service], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.serviceType,
      url: absoluteUrl(`/${slug}`),
      item: { "@id": `${absoluteUrl(`/${slug}`)}#service` },
    })),
  }
}

export function buildFaqSchema(path: string, faqs: readonly FaqItem[]): JsonLdObject | null {
  if (!faqs.length) return null

  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
