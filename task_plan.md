# Task Plan: Fotos por Servico

## Goal

Otimizar as fotos de `/fotos`, publicar assets web em `public/site-assets`, encaixar cada conjunto nas paginas corretas e criar paginas para conjuntos sem pagina especifica.

## Phases

- [x] Phase 1: Plan and setup
- [x] Phase 2: Inventory photos and current service routes
- [x] Phase 3: Process images for web
- [x] Phase 4: Wire galleries/routes/sitemap
- [x] Phase 5: Build, verify, and deploy

## Key Questions

1. Quais conjuntos existem em `/fotos` e quais servicos eles representam?
2. Quais conjuntos ja possuem pagina e quais precisam de nova pagina?
3. Qual formato/tamanho final mantem boa qualidade sem peso excessivo?

## Decisions Made

- Use `public/site-assets/service-galleries` for optimized copies to avoid mutating source photos in `/fotos`.
- Keep source photos untouched.
- Use WebP at max width 900px and quality around 76 for gallery images.
- Generated 237 optimized WebP images: 386.54 MB source -> 9.75 MB optimized.
- Created `/fotos`, 12 gallery detail pages, service-page gallery previews, and sitemap entries.

## Errors Encountered

- `app/fotos` exists instead of lowercase root `/fotos`: resolved by treating `app/fotos` as source.
- No native ImageMagick/ffmpeg/sharp available initially: use `sharp` through pnpm tooling/script.

## Status

**Complete** - Images optimized, pages wired, build passed, and FTP deploy completed.
