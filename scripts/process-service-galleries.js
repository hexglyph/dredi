/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs")
const path = require("node:path")

const sharp = require("../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp")

const root = process.cwd()
const sourceRoot = path.join(root, "app", "fotos")
const outputRoot = path.join(root, "public", "site-assets", "service-galleries")
const manifestPath = path.join(root, "lib", "service-gallery-data.ts")

const galleries = [
  {
    folder: "Alinhador",
    slug: "alinhador",
    title: "Alinhador invisível",
    heading: "Resultados com alinhador invisível",
    description:
      "Fotos de casos relacionados a alinhadores e planejamento ortodôntico para melhorar alinhamento, mordida e estética do sorriso.",
    serviceHref: "/ortodontia",
    serviceLabel: "Ortodontia",
  },
  {
    folder: "Clareamento dental",
    slug: "clareamento-dental",
    title: "Clareamento dental",
    heading: "Resultados de clareamento dental",
    description:
      "Fotos de clareamento dental profissional com acompanhamento para melhorar a tonalidade dos dentes com segurança.",
    serviceHref: "/clareamento",
    serviceLabel: "Clareamento",
  },
  {
    folder: "coroa sobre dente",
    slug: "coroa-sobre-dente",
    title: "Coroa sobre dente",
    heading: "Resultados com coroa sobre dente",
    description:
      "Fotos de coroas dentárias planejadas para recuperar estrutura, função e estética de dentes comprometidos.",
    serviceHref: "/facetas-e-coroas",
    serviceLabel: "Facetas e coroas",
  },
  {
    folder: "Coroa sobre implante",
    slug: "coroa-sobre-implante",
    title: "Coroa sobre implante",
    heading: "Resultados com coroa sobre implante",
    description:
      "Fotos de reabilitação com coroa sobre implante para substituir dentes ausentes com planejamento funcional e estético.",
    serviceHref: "/implantes",
    serviceLabel: "Implantes",
  },
  {
    folder: "Facetas em Porcelana",
    slug: "facetas-em-porcelana",
    title: "Facetas em porcelana",
    heading: "Resultados com facetas em porcelana",
    description:
      "Fotos de facetas em porcelana para transformar formato, cor e harmonia do sorriso com naturalidade.",
    serviceHref: "/facetas-e-coroas",
    serviceLabel: "Facetas e coroas",
  },
  {
    folder: "Facetas em Resina",
    slug: "facetas-em-resina",
    title: "Facetas em resina",
    heading: "Resultados com facetas em resina",
    description:
      "Fotos de estética em resina composta para melhorar formato, proporção e harmonia do sorriso.",
    serviceHref: "/facetas-e-coroas",
    serviceLabel: "Facetas e coroas",
  },
  {
    folder: "Fechamento de diastema",
    slug: "fechamento-de-diastema",
    title: "Fechamento de diastema",
    heading: "Resultados de fechamento de diastema",
    description:
      "Fotos de fechamento de espaços entre dentes com planejamento estético e resina composta.",
    serviceHref: "/facetas-e-coroas",
    serviceLabel: "Facetas e coroas",
  },
  {
    folder: "Limpeza- tártaro",
    slug: "limpeza-tartaro",
    title: "Limpeza de tártaro",
    heading: "Resultados de limpeza de tártaro",
    description:
      "Fotos de limpeza odontológica para remover tártaro, melhorar saúde gengival e prevenir problemas bucais.",
    serviceHref: "/dentistica",
    serviceLabel: "Dentística",
  },
  {
    folder: "Piercing",
    slug: "piercing-dental",
    title: "Piercing dental",
    heading: "Fotos de piercing dental",
    description:
      "Fotos de piercing dental em contexto estético, com orientação profissional sobre cuidados e indicação.",
    serviceHref: "/dentistica",
    serviceLabel: "Dentística",
  },
  {
    folder: "Prótese 5 elementos",
    slug: "protese-5-elementos",
    title: "Prótese 5 elementos",
    heading: "Resultados com prótese de 5 elementos",
    description:
      "Fotos de prótese dentária para reabilitação de múltiplos dentes com foco em função, estética e conforto.",
    serviceHref: "/proteses",
    serviceLabel: "Próteses",
  },
  {
    folder: "Prótese protocolo",
    slug: "protese-protocolo",
    title: "Prótese protocolo",
    heading: "Resultados com prótese protocolo",
    description:
      "Fotos de prótese protocolo e reabilitação sobre implantes para recuperar mastigação e segurança ao sorrir.",
    serviceHref: "/proteses",
    serviceLabel: "Próteses",
  },
  {
    folder: "Restauração em resina",
    slug: "restauracao-em-resina",
    title: "Restauração em resina",
    heading: "Resultados de restauração em resina",
    description:
      "Fotos de restaurações em resina composta para recuperar dentes, corrigir desgaste e preservar naturalidade.",
    serviceHref: "/dentistica",
    serviceLabel: "Dentística",
  },
]

function naturalSort(a, b) {
  return a.localeCompare(b, "pt-BR", { numeric: true, sensitivity: "base" })
}

function bytes(file) {
  return fs.statSync(file).size
}

function tsString(value) {
  return JSON.stringify(value)
}

async function main() {
  fs.rmSync(outputRoot, { recursive: true, force: true })
  fs.mkdirSync(outputRoot, { recursive: true })

  const manifest = []
  let originalBytes = 0
  let optimizedBytes = 0
  let totalFiles = 0

  for (const gallery of galleries) {
    const sourceDir = path.join(sourceRoot, gallery.folder)
    const outputDir = path.join(outputRoot, gallery.slug)
    fs.mkdirSync(outputDir, { recursive: true })

    const files = fs
      .readdirSync(sourceDir)
      .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
      .sort(naturalSort)

    const images = []
    for (let index = 0; index < files.length; index += 1) {
      const input = path.join(sourceDir, files[index])
      const outputName = `${gallery.slug}-${String(index + 1).padStart(2, "0")}.webp`
      const output = path.join(outputDir, outputName)

      await sharp(input)
        .rotate()
        .resize({ width: 900, withoutEnlargement: true })
        .webp({ quality: 76, effort: 5 })
        .toFile(output)

      const inputBytes = bytes(input)
      const outputBytes = bytes(output)
      originalBytes += inputBytes
      optimizedBytes += outputBytes
      totalFiles += 1

      images.push({
        src: `/site-assets/service-galleries/${gallery.slug}/${outputName}`,
        alt: `${gallery.title} - caso ${index + 1}`,
        originalName: files[index],
        originalBytes: inputBytes,
        optimizedBytes: outputBytes,
      })
    }

    manifest.push({ ...gallery, images })
  }

  const source = `export type ServiceGalleryImage = {
  src: string
  alt: string
  originalName: string
  originalBytes: number
  optimizedBytes: number
}

export type ServiceGallery = {
  folder: string
  slug: string
  title: string
  heading: string
  description: string
  serviceHref: string
  serviceLabel: string
  images: ServiceGalleryImage[]
}

export const serviceGalleries = [
${manifest
  .map(
    (gallery) => `  {
    folder: ${tsString(gallery.folder)},
    slug: ${tsString(gallery.slug)},
    title: ${tsString(gallery.title)},
    heading: ${tsString(gallery.heading)},
    description: ${tsString(gallery.description)},
    serviceHref: ${tsString(gallery.serviceHref)},
    serviceLabel: ${tsString(gallery.serviceLabel)},
    images: [
${gallery.images
  .map(
    (image) => `      {
        src: ${tsString(image.src)},
        alt: ${tsString(image.alt)},
        originalName: ${tsString(image.originalName)},
        originalBytes: ${image.originalBytes},
        optimizedBytes: ${image.optimizedBytes},
      },`,
  )
  .join("\n")}
    ],
  },`,
  )
  .join("\n")}
] as const satisfies readonly ServiceGallery[]

export function getServiceGallery(slug: string) {
  return serviceGalleries.find((gallery) => gallery.slug === slug)
}

export function getServiceGalleriesByHref(href: string) {
  return serviceGalleries.filter((gallery) => gallery.serviceHref === href)
}
`

  fs.writeFileSync(manifestPath, source)

  console.log(
    JSON.stringify(
      {
        files: totalFiles,
        originalMB: Number((originalBytes / 1024 / 1024).toFixed(2)),
        optimizedMB: Number((optimizedBytes / 1024 / 1024).toFixed(2)),
        savedPercent: Number((100 - (optimizedBytes / originalBytes) * 100).toFixed(1)),
      },
      null,
      2,
    ),
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
