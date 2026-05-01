import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"

const pages = JSON.parse(await readFile(".codex/dredi-pages.json", "utf8"))

function absolutize(url, base) {
  return new URL(url.replaceAll("\\/", "/").replaceAll("&amp;", "&"), base).href
}

function uploadUrls(source, base) {
  const urls = new Set()
  const pattern =
    /(?:url\(["']?|href=["']|src=["'])([^"')]+wp-content\/uploads\/[^"')]+\.(?:webp|png|jpe?g|gif|json|ttf))/gi
  for (const match of source.matchAll(pattern)) {
    urls.add(absolutize(match[1], base))
  }
  return [...urls]
}

async function download(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Failed ${response.status}: ${url}`)
  const relative = new URL(url).pathname.replace(/^\/wp-content\/uploads\//, "")
  const target = join("public", "site-assets", relative)
  await mkdir(dirname(target), { recursive: true })
  const buffer = Buffer.from(await response.arrayBuffer())
  await writeFile(target, buffer)
  return `/site-assets/${relative}`
}

const cssUrls = new Set()
const assetUrls = new Set()

for (const page of pages) {
  const response = await fetch(page.link)
  const html = await response.text()
  for (const asset of uploadUrls(html, page.link)) assetUrls.add(asset)
  for (const match of html.matchAll(/<link[^>]+href=["']([^"']+\.css[^"']*)["']/gi)) {
    cssUrls.add(absolutize(match[1], page.link))
  }
}

for (const cssUrl of cssUrls) {
  const response = await fetch(cssUrl)
  if (!response.ok) continue
  const css = await response.text()
  for (const asset of uploadUrls(css, cssUrl)) assetUrls.add(asset)
}

const downloaded = []
for (const url of assetUrls) {
  try {
    downloaded.push({ url, local: await download(url) })
  } catch (error) {
    downloaded.push({ url, error: String(error) })
  }
}

await writeFile(
  ".codex/dredi-css-assets.json",
  JSON.stringify({ cssUrls: [...cssUrls].sort(), downloaded }, null, 2),
  "utf8",
)

console.log(`css=${cssUrls.size} assets=${downloaded.length}`)
