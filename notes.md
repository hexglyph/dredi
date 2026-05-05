# Notes: Fotos por Servico

## Inventory

- Source directory: `app/fotos`.
- Total source size: 388 MB.
- Total source files: 237.
- All sampled files are 1080x1350 PNG/JPEG.
- Sets:
  - Alinhador: 4 files, 12 MB
  - Clareamento dental: 10 files, 21 MB
  - Coroa sobre implante: 1 file, 1.4 MB
  - Facetas em Porcelana: 9 files, 20 MB
  - Facetas em Resina: 78 files, 120 MB
  - Fechamento de diastema: 3 files, 5.7 MB
  - Limpeza- tartaro: 10 files, 21 MB
  - Piercing: 1 file, 2.7 MB
  - Protese 5 elementos: 1 file, 3.0 MB
  - Protese protocolo: 19 files, 37 MB
  - Restauracao em resina: 98 files, 141 MB
  - coroa sobre dente: 3 files, 5.9 MB

## Mapping

- Existing direct pages:
  - Clareamento dental -> `/clareamento`, `/clareamento/campinas`
  - Facetas em Porcelana, Facetas em Resina, Fechamento de diastema, coroa sobre dente -> `/facetas-e-coroas`, `/facetas/campinas`
  - Coroa sobre implante, Protese 5 elementos, Protese protocolo -> `/proteses`, `/proteses/campinas`, and related `/implantes`
  - Restauracao em resina -> `/dentistica`, `/dentistica/campinas`
- Missing/specific pages to create:
  - Created gallery index: `/fotos`
  - Created specific gallery pages:
    - `/fotos/alinhador`
    - `/fotos/clareamento-dental`
    - `/fotos/coroa-sobre-dente`
    - `/fotos/coroa-sobre-implante`
    - `/fotos/facetas-em-porcelana`
    - `/fotos/facetas-em-resina`
    - `/fotos/fechamento-de-diastema`
    - `/fotos/limpeza-tartaro`
    - `/fotos/piercing-dental`
    - `/fotos/protese-5-elementos`
    - `/fotos/protese-protocolo`
    - `/fotos/restauracao-em-resina`

## Deployment

- `pnpm lint` passed.
- `pnpm build` passed.
- `out/` generated 763 files, 38 MB.
- FTP upload completed successfully: 763 files.
- Live validation:
  - `https://dredi.com.br/fotos/` returned HTTP 200.
  - `https://dredi.com.br/fotos/restauracao-em-resina/` returned HTTP 200.
  - Live sitemap includes gallery pages and optimized gallery images.
