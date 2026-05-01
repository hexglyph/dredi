import { mkdir, writeFile } from "node:fs/promises"
import { basename, dirname, join } from "node:path"

const SITE = "https://dredi.com.br"
const PAGES =
  `${SITE}/wp-json/wp/v2/pages?per_page=100&_fields=id,slug,link,title,content`

const commonEntities = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  rsquo: "'",
  lsquo: "'",
  rdquo: '"',
  ldquo: '"',
  hellip: "...",
  ndash: "-",
  mdash: "-",
}

function decodeEntities(value) {
  return value.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (_, entity) => {
    if (entity[0] === "#") {
      const isHex = entity[1]?.toLowerCase() === "x"
      const code = Number.parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10)
      return Number.isFinite(code) ? String.fromCodePoint(code) : _
    }
    return commonEntities[entity] ?? _
  })
}

function cleanHtml(html) {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(h[1-6]|p|li|div|section|article|a)>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/\r/g, "")
      .replace(/[ \t]+/g, " ")
      .replace(/\n[ \t]+/g, "\n")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  )
}

function uniqueLines(text) {
  const seen = new Set()
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 1)
    .filter((line) => {
      const key = line.toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
}

function extractMatches(html, regex) {
  return [...html.matchAll(regex)]
    .map((match) => decodeEntities(cleanHtml(match[1] ?? match[0])))
    .map((value) => value.trim())
    .filter(Boolean)
}

function extractUrls(html) {
  const urls = new Set()
  const uploadRegex =
    /https:\/\/dredi\.com\.br\/wp-content\/uploads\/[^"'()<>\s]+\.(?:webp|png|jpe?g|gif|json|ttf)/gi
  for (const match of html.matchAll(uploadRegex)) {
    urls.add(match[0].replaceAll("\\/", "/"))
  }
  return [...urls].sort()
}

async function download(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Failed ${response.status}: ${url}`)
  const relative = new URL(url).pathname.replace(/^\/wp-content\/uploads\//, "")
  const target = join("public", "site-assets", relative)
  await mkdir(dirname(target), { recursive: true })
  const buffer = Buffer.from(await response.arrayBuffer())
  await writeFile(target, buffer)
  return { url, local: `/site-assets/${relative}`, file: basename(relative) }
}

const response = await fetch(PAGES)
if (!response.ok) throw new Error(`Failed ${response.status}: ${PAGES}`)

const pages = await response.json()
const normalizedPages = pages
  .sort((a, b) => a.id - b.id)
  .map((page) => {
    const html = page.content.rendered
    const text = uniqueLines(cleanHtml(html))
    return {
      id: page.id,
      slug: page.slug === "homenova" ? "" : page.slug,
      link: page.link,
      title: decodeEntities(cleanHtml(page.title.rendered)),
      headings: extractMatches(html, /<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi),
      buttons: extractMatches(
        html,
        /<span class="elementor-button-text">([\s\S]*?)<\/span>/gi,
      ),
      images: extractUrls(html),
      text,
    }
  })

const allUrls = new Set()
for (const page of normalizedPages) {
  for (const url of page.images) allUrls.add(url)
}
allUrls.add(`${SITE}/wp-content/uploads/2025/01/HelloParisSerif-Bold.ttf`)

await mkdir(".codex", { recursive: true })
await writeFile(
  ".codex/dredi-pages.json",
  JSON.stringify(normalizedPages, null, 2),
  "utf8",
)

for (const page of normalizedPages) {
  const slug = page.slug || "home"
  await writeFile(
    `.codex/dredi-${slug}.txt`,
    [
      `${page.title} - ${page.link}`,
      "",
      "HEADINGS",
      ...page.headings.map((item) => `- ${item}`),
      "",
      "BUTTONS",
      ...page.buttons.map((item) => `- ${item}`),
      "",
      "TEXT",
      ...page.text,
      "",
      "IMAGES",
      ...page.images,
    ].join("\n"),
    "utf8",
  )
}

const downloaded = []
for (const url of allUrls) {
  try {
    downloaded.push(await download(url))
  } catch (error) {
    downloaded.push({ url, error: String(error) })
  }
}

await writeFile(
  ".codex/dredi-assets.json",
  JSON.stringify(downloaded, null, 2),
  "utf8",
)

console.log(`pages=${normalizedPages.length} assets=${downloaded.length}`)
