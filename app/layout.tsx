import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import localFont from "next/font/local"

import { GoogleAdsTag } from "@/components/google-ads-tag"
import { businessProfile, defaultOgImage, homeSeo, siteName, siteUrl } from "@/lib/seo"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

const helloParis = localFont({
  src: "../public/site-assets/2025/01/HelloParisSerif-Bold.ttf",
  display: "swap",
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: {
    default: `${homeSeo.title} | Dr. Edi - Vida Odontologia`,
    template: "%s | Dr. Edi - Vida Odontologia",
  },
  description: homeSeo.description,
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  authors: [{ name: "Dr. Edi", url: siteUrl }],
  creator: "Dr. Edi",
  publisher: "Vida Odontologia Avançada e Estética",
  category: "Odontologia",
  keywords: [...homeSeo.keywords],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  icons: {
    icon: [
      {
        url: "/site-assets/2026/04/cropped-Logo-Dr-Edi-32x32.webp",
        sizes: "32x32",
      },
      {
        url: "/site-assets/2026/04/cropped-Logo-Dr-Edi-192x192.webp",
        sizes: "192x192",
      },
    ],
    apple: "/site-assets/2026/04/cropped-Logo-Dr-Edi-180x180.webp",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: `${homeSeo.title} | Dr. Edi - Vida Odontologia`,
    description: homeSeo.description,
    url: "/",
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${homeSeo.title} - Dr. Edi`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${homeSeo.title} | Dr. Edi - Vida Odontologia`,
    description: homeSeo.description,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": businessProfile.address.locality,
    "geo.position": `${businessProfile.geo.latitude};${businessProfile.geo.longitude}`,
    "ICBM": `${businessProfile.geo.latitude}, ${businessProfile.geo.longitude}`,
    "business:contact_data:street_address": businessProfile.address.streetAddress,
    "business:contact_data:locality": businessProfile.address.locality,
    "business:contact_data:region": businessProfile.address.region,
    "business:contact_data:postal_code": businessProfile.address.postalCode,
    "business:contact_data:country_name": "Brasil",
    "business:contact_data:phone_number": businessProfile.telephoneDisplay,
  },
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#111111",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <head>
        <link rel="author" href={siteUrl} />
        <link rel="me" href="https://www.instagram.com/doutoredi" />
      </head>
      <body className={`${montserrat.variable} ${helloParis.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <GoogleAdsTag />}
      </body>
    </html>
  )
}
