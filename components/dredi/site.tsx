import Image, { getImageProps } from "next/image"
import Link from "next/link"
import {
  CheckCircle2,
  ChevronDown,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Phone,
  Youtube,
} from "lucide-react"

import type { DrediPage } from "@/lib/dredi-data"
import type { LocalServiceLanding } from "@/lib/local-service-landings"
import { absoluteUrl, businessProfile, getServiceSeo, homeSeo } from "@/lib/seo"
import {
  JsonLd,
  buildBreadcrumbSchema,
  buildDentistSchema,
  buildFaqSchema,
  buildPersonSchema,
  buildServiceItemListSchema,
  buildServiceSchema,
  buildWebPageSchema,
  buildWebsiteSchema,
} from "./structured-data"
import { CarouselStrip } from "./carousel-strip"

const DEFAULT_MESSAGE =
  "Olá. Quero avaliar meu caso e entender o melhor tratamento para recuperar meu sorriso."

const LOGO_GOLD = "/site-assets/2025/01/VIDA-S_FUNDO-DOURADA.webp"
const DOCTOR_PHOTO = "/site-assets/2025/09/Dr-Edi-foto.webp"

const navTreatments = [
  { label: "Implantes", href: "/implantes" },
  { label: "Reabilitação oral", href: "/reabilitacao-oral/campinas" },
  { label: "Facetas e Coroas", href: "/facetas-e-coroas" },
  { label: "Clareamento", href: "/clareamento" },
  { label: "Próteses", href: "/proteses" },
  { label: "Ortodontia", href: "/ortodontia" },
  { label: "Endodontia", href: "/endodontia" },
  { label: "Dentística", href: "/dentistica" },
]

const heroAssets: Record<string, { desktop: string; mobile?: string }> = {
  home: {
    desktop: "/site-assets/2026/03/Dr.-Edi-Banner-5.webp",
    mobile: "/site-assets/2026/03/Edi-Mobile-2.webp",
  },
  implantes: {
    desktop: "/site-assets/2025/09/upscalemedia-transformed-1-scaled.png",
    mobile: "/site-assets/2025/09/5.webp",
  },
  "facetas-e-coroas": {
    desktop: "/site-assets/2025/09/upscalemedia-transformed-2-1-scaled.webp",
    mobile: "/site-assets/2025/09/4.webp",
  },
  clareamento: {
    desktop: "/site-assets/2026/04/Dr.-Edi-Banner-2.webp",
    mobile: "/site-assets/2026/04/Edi-Mobile-2.webp",
  },
  proteses: {
    desktop: "/site-assets/2026/04/Dr.-Edi-Banner-1.webp",
    mobile: "/site-assets/2026/03/Edi-Mobile-5.webp",
  },
  dentistica: {
    desktop: "/site-assets/2026/03/Dr.-Edi-Banner-4.webp",
    mobile: "/site-assets/2026/03/Edi-Mobile-3.webp",
  },
  endodontia: {
    desktop: "/site-assets/2026/03/Dr-Edi-banner-8-scaled.jpg",
    mobile: "/site-assets/2026/03/Edi-Mobile-4.webp",
  },
  ortodontia: {
    desktop: "/site-assets/2026/03/Dr.-Edi-Banner-3.webp",
    mobile: "/site-assets/2026/03/Edi-Mobile-2.webp",
  },
}

const treatmentCards = [
  {
    title: "Implantes dentários",
    href: "/implantes",
    image: "/site-assets/2025/01/Implantes-resultados-4-300x300.webp",
    text: "Planejamento para substituir dentes perdidos com foco em função, estética e conforto.",
  },
  {
    title: "Prótese protocolo",
    href: "/proteses",
    image: "/site-assets/2025/03/Protese-300x300.webp",
    text: "Prótese fixa sobre implantes para reabilitar arcadas completas com estabilidade.",
  },
  {
    title: "Reabilitação oral completa",
    href: "/reabilitacao-oral/campinas",
    image: "/site-assets/2025/01/Sorriso-perfeito-300x300.webp",
    text: "Planejamento integrado para recuperar mastigação, estética, conforto e confiança.",
  },
  {
    title: "Facetas e coroas",
    href: "/facetas-e-coroas",
    image: "/site-assets/2025/03/Facetas-4-300x300.webp",
    text: "Tratamentos estéticos para transformar o sorriso com naturalidade, proporção e planejamento.",
  },
  {
    title: "Clareamento dental",
    href: "/clareamento",
    image: "/site-assets/2025/03/Clareamento-300x300.webp",
    text: "Clareamento dental profissional para melhorar a tonalidade dos dentes com acompanhamento.",
  },
  {
    title: "Tratamento de canal",
    href: "/endodontia",
    image: "/site-assets/2026/03/Dr-Edi-banner-8-scaled.jpg",
    text: "Endodontia para tratar dor, infecção e preservar dentes naturais quando há indicação.",
  },
  {
    title: "Dentística restauradora",
    href: "/dentistica",
    image: "/site-assets/2025/03/Restauracao-300x300.webp",
    text: "Restaurações e correções com foco em saúde, função e naturalidade.",
  },
  {
    title: "Ortodontia",
    href: "/ortodontia",
    image: "/site-assets/2025/05/Ortodontia-300x300.webp",
    text: "Planejamento para alinhamento dental, mordida e harmonia do sorriso.",
  },
]

const authorityProofs = [
  { value: "+20", label: "anos de experiência" },
  { value: "+10 mil", label: "implantes realizados" },
  { value: "Unicamp + UNESP", label: "formação e especialização" },
]

const patientPainPoints = [
  "Evita sorrir em fotos?",
  "Tem dificuldade para mastigar?",
  "Usa dentadura ou prótese solta?",
  "Perdeu um ou mais dentes?",
  "Tem vergonha do sorriso?",
  "Quer voltar a sorrir com segurança?",
]

const textTestimonials = [
  {
    quote: "Voltei a mastigar melhor e sorrir com confiança.",
    label: "Paciente de implantes dentários - Campinas/SP",
  },
  {
    quote: "Recebi um planejamento claro e entendi cada etapa do tratamento.",
    label: "Paciente de reabilitação oral - Campinas/SP",
  },
  {
    quote: "O resultado ficou natural e me deixou mais segura para sorrir.",
    label: "Paciente de estética dental - Campinas/SP",
  },
]

const resultImages = [
  "/site-assets/2025/03/Facetas-4-300x300.webp",
  "/site-assets/2025/03/Porcelana-1-300x300.webp",
  "/site-assets/2025/03/Resina-1-300x300.webp",
  "/site-assets/2025/01/Implantes-resultados-4-300x300.webp",
  "/site-assets/2025/01/Implantes-resultados-3-300x300.webp",
  "/site-assets/2025/01/Implantes-resultados-2-300x300.webp",
  "/site-assets/2025/01/Implantes-resultados-1-300x300.webp",
  "/site-assets/2025/03/Restauracao-300x300.webp",
]

const feedbackImages = [
  "/site-assets/2025/03/Feedbacks-dr-Edi-1-1.webp",
  "/site-assets/2025/03/Feedbacks-dr-Edi-8-1.webp",
  "/site-assets/2025/03/Feedbacks-dr-Edi-7-1.webp",
  "/site-assets/2025/03/Feedbacks-dr-Edi-6-1.webp",
  "/site-assets/2025/03/Feedbacks-dr-Edi-5-1.webp",
  "/site-assets/2025/03/Feedbacks-dr-Edi-4-1.webp",
  "/site-assets/2025/03/Feedbacks-dr-Edi-3-1.webp",
  "/site-assets/2025/03/Feedbacks-dr-Edi-2-1.webp",
]

const clinicImages = [
  "/site-assets/2026/03/4.webp",
  "/site-assets/2026/03/18.webp",
  "/site-assets/2026/03/9.webp",
  "/site-assets/2026/03/17.webp",
  "/site-assets/2026/03/20.webp",
  "/site-assets/2026/03/24.webp",
  "/site-assets/2026/03/10.webp",
  "/site-assets/2026/03/13.webp",
  "/site-assets/2026/03/12.webp",
  "/site-assets/2026/03/3.webp",
  "/site-assets/2026/03/25.webp",
  "/site-assets/2026/03/15.webp",
  "/site-assets/2026/03/16.webp",
  "/site-assets/2026/03/14.webp",
  "/site-assets/2026/03/23.webp",
]

const headingHighlights =
  /(experiência|Dr\. Edi|melhor|sorriso|sintomas|facetas|coroas|próteses|implantes|clareamento|tratamento|vida|confiança|você)/gi

export function whatsappBridgeHref(message = DEFAULT_MESSAGE) {
  return `/whatsapp/?mensagem=${encodeURIComponent(message)}`
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(184,145,49,.22)] bg-[#111] text-white shadow-[0_14px_40px_rgba(0,0,0,.25)]">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 md:h-[88px] md:px-6">
        <Link className="relative block h-14 w-24 shrink-0 overflow-hidden md:h-16 md:w-28" href="/" aria-label="Vida Odontologia">
          <Image
            src={LOGO_GOLD}
            alt="Vida Odontologia Avançada e Estética"
            fill
            sizes="112px"
            className="scale-[2.15] object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-semibold text-[var(--gold-soft)] md:flex">
          <Link className="nav-link" href="/">
            Home
          </Link>
          <div className="group relative py-8">
            <Link className="nav-link inline-flex items-center gap-2" href="/#quemeedi">
              Especialistas <ChevronDown className="size-4" />
            </Link>
            <div className="invisible absolute left-0 top-full w-44 translate-y-2 rounded-md border border-[rgba(184,145,49,.28)] bg-[#151515] p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link className="dropdown-link" href="/#quemeedi">
                Dr. Edi
              </Link>
            </div>
          </div>
          <div className="group relative py-8">
            <Link className="nav-link inline-flex items-center gap-2" href="/implantes">
              Tratamentos <ChevronDown className="size-4" />
            </Link>
            <div className="invisible absolute left-0 top-full w-56 translate-y-2 rounded-md border border-[rgba(184,145,49,.28)] bg-[#151515] p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {navTreatments.map((item) => (
                <Link className="dropdown-link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link className="nav-link" href="/#localizacao">
            Localização
          </Link>
        </nav>

        <div className="hidden items-center gap-7 md:flex">
          <a
            className="inline-flex h-11 min-w-44 items-center justify-center rounded-md bg-[linear-gradient(135deg,#d6b95f,#b38b2e)] px-5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(184,145,49,.26)] transition hover:-translate-y-0.5"
            href={whatsappBridgeHref()}
          >
            Quero avaliar meu caso
            <span className="ml-2">›</span>
          </a>
          <div className="flex items-center gap-4 text-[var(--gold-soft)]">
            <a aria-label="Instagram" href="https://www.instagram.com/doutoredi" target="_blank" rel="noopener noreferrer">
              <Instagram className="size-5" />
            </a>
            <a aria-label="TikTok" href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <Music2 className="size-5" />
            </a>
            <a aria-label="Facebook" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="size-5" />
            </a>
            <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="size-5" />
            </a>
          </div>
        </div>

        <details className="group relative md:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-md text-[var(--gold-soft)] marker:hidden">
            <Menu className="size-6" />
          </summary>
          <div className="absolute right-0 top-14 w-[min(82vw,320px)] rounded-lg border border-[rgba(184,145,49,.3)] bg-[#111] p-4 shadow-2xl">
            <Link className="mobile-link" href="/">
              Home
            </Link>
            <Link className="mobile-link" href="/#quemeedi">
              Dr. Edi
            </Link>
            {navTreatments.map((item) => (
              <Link className="mobile-link" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="mobile-link" href="/#localizacao">
              Localização
            </Link>
          </div>
        </details>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="border-y border-[rgba(184,145,49,.35)] bg-[#111] py-10 text-[var(--gold-dark)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center md:flex-row md:justify-between">
        <div className="relative h-20 w-36 overflow-hidden">
          <Image src={LOGO_GOLD} alt="Vida Odontologia" fill sizes="144px" className="scale-[2.15] object-contain" />
        </div>
        <p className="text-sm">Copyright ©2025 Vida Mais. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <a
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-16 place-items-center rounded-full border border-emerald-300/35 bg-[#20e47b] text-black shadow-[0_0_34px_rgba(32,228,123,.55)] transition hover:-translate-y-1 md:bottom-8 md:right-8"
      href={whatsappBridgeHref()}
    >
      <WhatsAppIcon className="size-9 text-[#111]" />
    </a>
  )
}

export function HomePage({ page }: { page: DrediPage }) {
  const faq = parseFaq(page.text)

  return (
    <>
      <JsonLd
        data={[
          buildDentistSchema(),
          buildPersonSchema(),
          buildWebsiteSchema(),
          buildWebPageSchema({
            path: "/",
            title: homeSeo.title,
            description: homeSeo.description,
            image: homeSeo.image,
          }),
          buildBreadcrumbSchema("/", [{ name: "Início", path: "/" }]),
          buildServiceItemListSchema(),
          buildFaqSchema("/", faq),
        ]}
      />
      <SiteShell>
        <Hero
          cta="Agendar avaliação pelo WhatsApp"
          ctaMessage="Olá. Quero agendar uma avaliação para implantes, próteses ou reabilitação oral."
          image={heroAssets.home.desktop}
          mobileImage={heroAssets.home.mobile}
          subtitle="Atendimento particular para quem deseja recuperar mastigação, estética e confiança ao sorrir com planejamento personalizado e cuidado multidisciplinar."
          title="Implantes, próteses e reabilitação oral em Campinas com mais de 20 anos de experiência"
        />

        <AuthorityProofSection />
        <PainPointsSection />

        <section className="defer-render dark-section py-16 md:py-28">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <p className="mx-auto max-w-3xl text-base font-semibold text-white">
              O foco da clínica é resolver casos que envolvem perda dental, próteses, estética e reabilitação oral com planejamento individual.
            </p>
            <SectionTitle className="mt-8" title="Tratamentos para recuperar função, estética e segurança ao sorrir" />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {treatmentCards.map((card) => (
                <Link className="treatment-card corner-mark text-left" href={card.href} key={card.href}>
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 220px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-7 text-xl font-extrabold text-white">
                    <HighlightedText text={card.title} />
                  </h3>
                  <p className="mt-4 text-sm font-semibold leading-6 text-white">{card.text}</p>
                </Link>
              ))}
            </div>
            <p className="mt-16 text-base font-semibold text-white">
              A avaliação mostra qual caminho faz sentido para o seu caso clínico e para sua expectativa.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton message="Olá. Quero saber se posso fazer implante ou reabilitação oral.">Quero saber se posso fazer implante</CtaButton>
            </div>
          </div>
        </section>

        <GallerySection
          images={resultImages}
          intro="Nossos pacientes já passaram por essa jornada e hoje são prova de que é possível ter um sorriso bonito e funcional novamente."
          title="Histórias reais de transformação"
        />

        <TestimonialSection />

        <AboutDoctor />
        <ClinicSection tone="dark" />
        <LocalSearchSection />
        <CtaSection
          dark
          cta="Quero recuperar meu sorriso"
          text="Agende uma avaliação e descubra o melhor plano para recuperar mastigação, estética e confiança ao sorrir."
          title="Casos complexos pedem planejamento, experiência e cuidado próximo."
        />
        <FAQSection faqs={faq} />
      </SiteShell>
    </>
  )
}

export function DentistCampinasPage({ page }: { page: DrediPage }) {
  const faq = parseFaq(page.text)

  return (
    <>
      <JsonLd
        data={[
          buildDentistSchema(),
          buildPersonSchema(),
          buildWebsiteSchema(),
          buildWebPageSchema({
            path: "/dentista/campinas",
            title: "Dentista em Campinas",
            description:
              "Dentista em Campinas para avaliação odontológica particular, implantes, próteses, facetas, clareamento e tratamento de canal.",
            image: heroAssets.home.desktop,
          }),
          buildBreadcrumbSchema("/dentista/campinas", [
            { name: "Início", path: "/" },
            { name: "Dentista em Campinas", path: "/dentista/campinas" },
          ]),
          buildServiceItemListSchema(),
          buildFaqSchema("/dentista/campinas", faq),
        ]}
      />
      <SiteShell>
        <Hero
          cta="Agendar avaliação"
          image={heroAssets.home.desktop}
          mobileImage={heroAssets.home.mobile}
          subtitle="Atendimento particular na Vida Odontologia para quem busca diagnóstico claro, planejamento personalizado e cuidado completo com o sorriso em Campinas."
          title="Dentista em Campinas para cuidar do seu sorriso com o Dr. Edi."
        />

        <section className="defer-render light-section py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--gold-dark)]">
                Campinas, SP
              </p>
              <SectionTitle
                className="mt-4"
                title="Avaliação odontológica para entender seu caso e indicar o melhor tratamento"
              />
              <p className="mx-auto mt-7 max-w-3xl text-base font-semibold leading-7 text-black">
                A consulta é conduzida com atenção ao seu objetivo, histórico bucal e necessidade atual. O plano pode
                envolver prevenção, estética, restaurações, implantes, próteses ou tratamento de canal.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Atendimento particular",
                  text: "Consulta com orientação profissional e explicação clara das alternativas de tratamento.",
                },
                {
                  title: "Tratamentos completos",
                  text: "Implantes, próteses, reabilitação oral, facetas, coroas, clareamento, endodontia, ortodontia e dentística.",
                },
                {
                  title: "Clínica em Campinas",
                  text: `Atendimento na ${businessProfile.address.streetAddress}, ${businessProfile.address.locality} - ${businessProfile.address.region}.`,
                },
              ].map((item) => (
                <article className="info-card-light corner-mark" key={item.title}>
                  <h3 className="text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-4 text-sm font-semibold leading-6">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <CtaButton>Agendar avaliação</CtaButton>
            </div>
          </div>
        </section>

        <section className="defer-render dark-section py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <SectionTitle title="Escolha o tratamento que você procura" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {treatmentCards.map((card) => (
                <Link className="treatment-card corner-mark text-left" href={card.href} key={card.href}>
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 220px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-7 text-xl font-extrabold text-white">
                    <HighlightedText text={card.title} />
                  </h3>
                  <p className="mt-4 text-sm font-semibold leading-6 text-white">{card.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <AboutDoctor />
        <ClinicSection tone="dark" />
        <LocalSearchSection />
        <FAQSection faqs={faq} />
      </SiteShell>
    </>
  )
}

export function LocalServiceLandingPage({
  page,
  landing,
}: {
  page: DrediPage
  landing: LocalServiceLanding
}) {
  const faq = parseFaq(page.text)
  const hero = heroAssets[landing.sourceSlug] ?? heroAssets.home
  const gallery = getGalleryImages(page)
  const feedback = page.images.filter((image) => image.includes("Feedbacks-dr-Edi"))

  return (
    <>
      <JsonLd
        data={[
          buildDentistSchema(),
          buildPersonSchema(),
          buildWebsiteSchema(),
          buildServiceSchema(landing.sourceSlug),
          buildWebPageSchema({
            path: landing.path,
            title: landing.title,
            description: landing.description,
            image: hero.desktop,
            aboutId: `${absoluteUrl(landing.path)}#service`,
          }),
          buildBreadcrumbSchema(landing.path, [
            { name: "Início", path: "/" },
            { name: landing.label, path: landing.path },
          ]),
          buildFaqSchema(landing.path, faq),
        ]}
      />
      <SiteShell>
        <CampaignHero landing={landing} hero={hero} />

        <CampaignDecisionSection landing={landing} />
        <CampaignProcessSection landing={landing} />

        <GallerySection
          dark
          images={gallery}
          intro="Veja exemplos de resultados e estruturas usadas no planejamento dos tratamentos da Vida Odontologia."
          title={`Resultados de ${landing.label.toLowerCase()}`}
        />

        {feedback.length ? (
          <GallerySection
            images={feedback}
            intro="A experiência de outros pacientes ajuda você a conhecer melhor o cuidado da clínica antes de agendar."
            title="Depoimentos de pacientes"
          />
        ) : null}

        <AboutDoctor />
        <ClinicSection tone="dark" />
        <LocalSearchSection />
        <FAQSection faqs={faq} />
      </SiteShell>
    </>
  )
}

function CampaignHero({
  landing,
  hero,
}: {
  landing: LocalServiceLanding
  hero: { desktop: string; mobile?: string }
}) {
  return (
    <section className="relative overflow-hidden bg-[#101010] text-white">
      <div className="absolute inset-0 opacity-72">
        <HeroImage image={hero.desktop} mobileImage={hero.mobile} title={landing.heroTitle} />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.9),rgba(0,0,0,.62)_48%,rgba(0,0,0,.18)),linear-gradient(0deg,#101010_0%,rgba(16,16,16,.28)_42%,rgba(16,16,16,.1))]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-6xl items-end gap-8 px-4 py-10 md:min-h-[620px] md:grid-cols-[1.08fr_.72fr] md:items-center md:px-6 md:py-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-md border border-[rgba(220,195,115,.42)] bg-black/35 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--gold-soft)] backdrop-blur">
            <MapPin className="size-4" />
            Campinas, SP
          </p>
          <h1 className="mt-7 text-balance text-[38px] font-black leading-[1.02] text-white md:text-[62px]">
            <HighlightedText text={landing.heroTitle} />
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base font-bold leading-7 text-white md:text-lg" data-speakable>
            {landing.heroSubtitle}
          </p>
          <div className="mt-8 grid max-w-2xl gap-3 text-sm font-bold text-white/92 sm:grid-cols-3">
            {landing.benefits.map((benefit) => (
              <div className="flex items-center gap-2" key={benefit.title}>
                <CheckCircle2 className="size-5 fill-[var(--gold)] text-black" />
                {benefit.title}
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-lg border border-[rgba(220,195,115,.34)] bg-[#111]/88 p-5 shadow-[0_30px_90px_rgba(0,0,0,.38)] backdrop-blur md:p-7">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--gold-soft)]">
            Atendimento particular
          </p>
          <h2 className="mt-4 text-2xl font-black leading-tight md:text-3xl">
            Fale com a equipe e agende sua avaliação.
          </h2>
          <p className="mt-4 text-sm font-semibold leading-6 text-white/84">
            Explique seu caso pelo WhatsApp e receba orientação para marcar uma consulta na clínica.
          </p>
          <CampaignCta landing={landing}>Quero avaliar meu caso</CampaignCta>
          <a
            className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md border border-white/20 px-5 text-sm font-extrabold text-white transition hover:border-[var(--gold)]"
            href="tel:+551932760525"
          >
            <Phone className="size-4" />
            {businessProfile.telephoneDisplay}
          </a>
        </aside>
      </div>
    </section>
  )
}

function CampaignDecisionSection({ landing }: { landing: LocalServiceLanding }) {
  return (
    <section className="defer-render light-section py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[.82fr_1.18fr] md:px-6">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--gold-dark)]">
            {landing.label}
          </p>
          <SectionTitle className="mt-4 text-left" title={landing.introTitle} />
          <p className="mt-7 text-base font-semibold leading-7 text-black">{landing.intro}</p>
          <div className="mt-8">
            <CampaignCta landing={landing}>Agendar avaliação</CampaignCta>
          </div>
        </div>

        <div className="grid gap-4">
          {landing.benefits.map((benefit, index) => (
            <article
              className="corner-mark grid gap-4 rounded-lg border border-[rgba(184,145,49,.2)] bg-[#fbfaf7] p-6 text-black md:grid-cols-[72px_1fr]"
              key={benefit.title}
            >
              <div className="grid size-16 place-items-center rounded-md bg-[#111] text-xl font-black text-[var(--gold-soft)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-xl font-extrabold">
                  <HighlightedText text={benefit.title} />
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6">{benefit.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CampaignProcessSection({ landing }: { landing: LocalServiceLanding }) {
  const steps = [
    {
      title: "Conte o que está acontecendo",
      text: "Envie uma mensagem com sua dúvida, sintoma ou objetivo estético para a equipe entender a prioridade.",
    },
    {
      title: "Faça a avaliação clínica",
      text: "O Dr. Edi avalia sua saúde bucal, escuta sua expectativa e explica as alternativas indicadas.",
    },
    {
      title: "Receba um plano claro",
      text: "Você sai com orientação sobre etapas, cuidados e próximos passos para realizar o tratamento.",
    },
  ]

  return (
    <section className="defer-render dark-section py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_.9fr] md:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--gold-soft)]">
              Como começa
            </p>
            <SectionTitle className="mt-4 text-left text-white" title="Uma avaliação objetiva antes de qualquer decisão" />
            <p className="mt-7 max-w-2xl text-base font-semibold leading-7 text-white/86">
              O foco inicial é {landing.label.toLowerCase()}, mas a indicação final depende da avaliação presencial.
              Assim, cada etapa considera sua saúde bucal, expectativa e melhor alternativa clínica.
            </p>
          </div>
          <div className="grid gap-4">
            {steps.map((step) => (
              <article className="rounded-lg border border-white/12 bg-white/[.04] p-5" key={step.title}>
                <h3 className="text-lg font-extrabold text-white">{step.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/78">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CampaignCta({
  landing,
  children,
}: {
  landing: LocalServiceLanding
  children: React.ReactNode
}) {
  return (
    <a
      className="cta-shine mt-6 inline-flex min-h-14 w-full max-w-[380px] items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#1fad58] px-6 text-base font-extrabold text-white shadow-[0_0_44px_rgba(32,201,103,.44)] transition hover:-translate-y-1"
      href={whatsappBridgeHref(`Olá. Gostaria de agendar uma avaliação sobre ${landing.label}.`)}
    >
      <MessageCircle className="size-5" />
      {children}
    </a>
  )
}

export function ServicePage({ page }: { page: DrediPage }) {
  const cta = page.buttons[0] ?? "Agendar agora"
  const faq = parseFaq(page.text)
  const groups = splitServiceGroups(page)
  const hero = heroAssets[page.slug] ?? heroAssets.home
  const feedback = page.images.filter((image) => image.includes("Feedbacks-dr-Edi"))
  const gallery = getGalleryImages(page)
  const seo = getServiceSeo(page.slug)
  const path = `/${page.slug}`
  const title = seo?.title ?? page.title
  const description = seo?.description ?? page.text[1] ?? ""

  return (
    <>
      <JsonLd
        data={[
          buildDentistSchema(),
          buildPersonSchema(),
          buildWebsiteSchema(),
          buildServiceSchema(page.slug),
          buildWebPageSchema({
            path,
            title,
            description,
            image: seo?.image ?? hero.desktop,
            aboutId: `${absoluteUrl(path)}#service`,
          }),
          buildBreadcrumbSchema(path, [
            { name: "Início", path: "/" },
            { name: seo?.label ?? page.title, path },
          ]),
          buildFaqSchema(path, faq),
        ]}
      />
      <SiteShell>
        <Hero
          cta={cta}
          image={hero.desktop}
          mobileImage={hero.mobile}
          subtitle={page.text[1] ?? ""}
          title={page.text[0]}
        />

        <main>
          {groups.map((group, index) => {
            if (/quem é/i.test(group.title)) {
              return <AboutDoctor key={group.title} />
            }

            if (/clínica vida mais/i.test(group.title)) {
              return <ClinicSection key={group.title} />
            }

            if (/depoimentos/i.test(group.title)) {
              return (
                <GallerySection
                  dark
                  images={feedback.length ? feedback : feedbackImages}
                  intro={group.lines.join(" ")}
                  key={group.title}
                  title={group.title}
                />
              )
            }

            if (/histórias|resultados|sorrisos transformados/i.test(group.title)) {
              return (
                <GallerySection
                  dark={index % 2 === 0}
                  images={gallery}
                  intro={group.lines.join(" ")}
                  key={group.title}
                  title={group.title}
                />
              )
            }

            if (/pronto|não deixe|dê o primeiro passo/i.test(group.title)) {
              return (
                <CtaSection
                  dark={index % 2 === 0}
                  key={group.title}
                  text={group.lines.join(" ")}
                  title={group.title}
                  cta={cta}
                />
              )
            }

            return (
              <TextSection
                dark={index % 2 === 0}
                group={group}
                key={`${group.title}-${index}`}
              />
            )
          })}

          <FAQSection faqs={faq} />
        </main>
      </SiteShell>
    </>
  )
}

function Hero({
  title,
  subtitle,
  cta,
  ctaMessage,
  image,
  mobileImage,
}: {
  title: string
  subtitle: string
  cta: string
  ctaMessage?: string
  image: string
  mobileImage?: string
}) {
  return (
    <section className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-black md:min-h-[560px]">
      <HeroImage image={image} mobileImage={mobileImage} title={title} />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.92),rgba(0,0,0,.2)_46%,rgba(0,0,0,.16)),linear-gradient(90deg,rgba(0,0,0,.76),rgba(0,0,0,.24)_58%,rgba(0,0,0,.38))] md:bg-[linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,.14)_56%,rgba(0,0,0,.35)),linear-gradient(0deg,rgba(0,0,0,.95),rgba(0,0,0,0)_28%)]" />

      <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-6xl items-end px-4 pb-10 pt-16 md:min-h-[560px] md:items-center md:px-6 md:pb-0 md:pt-0">
        <div className="max-w-[590px]">
          <h1 className="text-balance text-[34px] font-black leading-[1.05] text-white min-[390px]:text-[38px] md:text-[54px]">
            <HighlightedText text={title} />
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-[15px] font-bold leading-7 text-white md:mt-7 md:text-lg" data-speakable>
            {subtitle}
          </p>
          <div className="mt-7 md:mt-10">
            <CtaButton message={ctaMessage}>{cta}</CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroImage({
  title,
  image,
  mobileImage,
}: {
  title: string
  image: string
  mobileImage?: string
}) {
  const common = {
    alt: title,
    fill: true,
    priority: true,
    sizes: "100vw",
  }
  const {
    props: { srcSet: desktopSrcSet, ...desktopProps },
  } = getImageProps({
    ...common,
    src: image,
  })
  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({
    ...common,
    src: mobileImage ?? image,
  })

  return (
    <picture>
      {mobileImage ? <source media="(max-width: 767px)" srcSet={mobileSrcSet} /> : null}
      <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
      <img
        {...desktopProps}
        alt=""
        className="object-cover object-top md:object-center"
        fetchPriority="high"
      />
    </picture>
  )
}

function SectionTitle({
  title,
  className = "",
  id,
}: {
  title: string
  className?: string
  id?: string
}) {
  return (
    <h2 id={id} className={`mx-auto max-w-4xl text-balance text-4xl font-black leading-tight md:text-5xl ${className}`}>
      <HighlightedText text={title} />
    </h2>
  )
}

function HighlightedText({ text }: { text: string }) {
  const parts = text.split(headingHighlights)
  return (
    <>
      {parts.map((part, index) =>
        index % 2 ? (
          <span className="gold-text" key={`${part}-${index}`}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}

function CtaButton({
  children,
  message,
}: {
  children: React.ReactNode
  message?: string
}) {
  return (
    <a
      className="cta-shine inline-flex min-h-16 w-full max-w-[380px] items-center justify-center gap-4 overflow-hidden rounded-lg bg-[#1fad58] px-7 text-base font-extrabold text-white shadow-[0_0_52px_rgba(32,201,103,.48)] transition hover:-translate-y-1 md:text-lg"
      href={whatsappBridgeHref(message)}
    >
      <ToothIcon className="size-5 fill-white" />
      {children}
    </a>
  )
}

function AuthorityProofSection() {
  return (
    <section className="light-section py-10 md:py-14" aria-label="Autoridade do Dr. Edi">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3">
        {authorityProofs.map((proof) => (
          <article className="info-card-light corner-mark min-h-0 py-7 text-center" key={proof.label}>
            <p className="text-4xl font-black leading-none text-[var(--gold-dark)] md:text-5xl">{proof.value}</p>
            <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.12em] text-black">{proof.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function PainPointsSection() {
  return (
    <section className="defer-render light-section py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--gold-dark)]">
            Você se identifica?
          </p>
          <SectionTitle
            className="mt-4"
            title="A reabilitação começa quando o sorriso deixa de limitar sua rotina"
          />
          <p className="mx-auto mt-7 max-w-3xl text-base font-semibold leading-7 text-black">
            Pacientes que procuram implantes, próteses e reabilitação oral geralmente chegam com dúvidas parecidas. A
            avaliação serve para entender a causa, o grau de complexidade e as alternativas possíveis.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {patientPainPoints.map((point) => (
            <div
              className="flex min-h-20 items-center gap-4 rounded-md border border-[rgba(184,145,49,.2)] bg-[#fbfaf7] px-5 py-4 text-base font-extrabold text-black"
              key={point}
            >
              <CheckCircle2 className="size-6 shrink-0 fill-[var(--gold)] text-white" />
              {point}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton message="Olá. Quero avaliar meu caso e descobrir o melhor plano para recuperar meu sorriso.">
            Quero avaliar meu caso
          </CtaButton>
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="defer-render light-section py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionTitle title="Depoimentos de pacientes" />
        <p className="mx-auto mt-8 max-w-3xl text-base font-semibold leading-7 text-black">
          Além dos registros em imagem, estes relatos ajudam a entender como o tratamento impacta mastigação, segurança e
          confiança no dia a dia.
        </p>
        <div className="mt-12">
          <CarouselStrip images={feedbackImages} title="Depoimentos em imagem" tone="light" />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {textTestimonials.map((testimonial) => (
            <article className="info-card-light corner-mark text-left" key={testimonial.quote}>
              <p className="text-xl font-black leading-7 text-black">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.1em] text-[var(--gold-dark)]">
                {testimonial.label}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CtaButton message="Olá. Quero falar com a equipe pelo WhatsApp e agendar uma avaliação.">
            Falar com a equipe pelo WhatsApp
          </CtaButton>
        </div>
      </div>
    </section>
  )
}

function GallerySection({
  title,
  intro,
  images,
  dark = false,
}: {
  title: string
  intro?: string
  images: readonly string[]
  dark?: boolean
}) {
  return (
    <section className={dark ? "defer-render dark-section py-16 md:py-28" : "defer-render light-section py-16 md:py-28"}>
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionTitle title={title} />
        {intro ? (
          <p className={`mx-auto mt-8 max-w-3xl text-base font-semibold leading-7 ${dark ? "text-white" : "text-black"}`}>
            {intro}
          </p>
        ) : null}
        <div className="mt-12">
          <CarouselStrip images={images} title={title} tone={dark ? "dark" : "light"} />
        </div>
        <div className="mt-8 flex justify-center">
          <CtaButton>Quero avaliar meu caso</CtaButton>
        </div>
      </div>
    </section>
  )
}

function AboutDoctor() {
  return (
    <section className="defer-render light-section py-16 md:py-28" id="quemeedi">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[.95fr_1.25fr]">
        <div className="corner-mark relative aspect-[4/5] overflow-hidden rounded-lg border border-[rgba(184,145,49,.2)] bg-[#f8f6ee] p-7">
          <div className="relative size-full overflow-hidden rounded-md">
            <Image
              src={DOCTOR_PHOTO}
              alt="Dr. Edi"
              fill
              sizes="(max-width: 768px) 90vw, 480px"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <SectionTitle title="Quem é o Dr. Edi..." />
          <div className="mt-8 space-y-5 text-base font-medium leading-8 text-black">
            <p>
              O Dr. Edi é cirurgião-dentista especialista em próteses dentárias e pós-graduado em implantes com mais de 20 anos de experiência prática e mais de 10 mil implantes realizados. <strong>Sua missão é devolver sorrisos e transformar vidas.</strong>
            </p>
            <p>
              <strong>Formado pela renomada Unicamp e com especialização pela UNESP,</strong> seu trabalho vai muito além da estética, com foco em resultados duradouros e no seu bem-estar.
            </p>
            <p>
              Cada paciente é único e recebe atendimento personalizado, humano e acolhedor. Temos o compromisso de cuidar de você com dedicação, respeito e excelência.
            </p>
            <p>
              Além do Dr. Edi, a clínica conta com uma equipe altamente qualificada, garantindo uma experiência completa, multidisciplinar e segura.
            </p>
          </div>
          <a
            className="mt-8 inline-flex items-center gap-3 rounded-md border border-[var(--gold)] px-6 py-4 text-lg font-extrabold text-[var(--gold-dark)]"
            href="https://www.instagram.com/doutoredi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Instagram className="size-8" />
            @doutoredi
          </a>
        </div>
      </div>
    </section>
  )
}

function ClinicSection({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark"
  return (
    <section className={dark ? "defer-render dark-section py-16 md:py-28" : "defer-render light-section py-16 md:py-28"} id="localizacao">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionTitle title="Conheça a Clínica Vida Mais" />
        <p className={`mx-auto mt-7 max-w-3xl text-base font-semibold leading-7 ${dark ? "text-white" : "text-black"}`}>
          Um lugar onde você será bem atendido, por uma equipe treinada e qualificada!
        </p>
        <div className={`mx-auto mt-8 flex max-w-2xl flex-col items-center gap-5 text-base font-bold ${dark ? "text-white" : "text-black"}`}>
          <p className="inline-flex items-center gap-2">
            <MapPin className="size-5 text-[var(--gold)]" />
            Avenida Jorge Tibiriçá, 1613 - Jardim das Oliveiras, Campinas SP.
          </p>
          <a
            className="inline-flex items-center gap-3 rounded-md border border-[rgba(184,145,49,.7)] px-6 py-4 text-[var(--gold-dark)]"
            href="tel:+551932760525"
          >
            <Phone className="size-5" />
            (19) 3276-0525
          </a>
        </div>
        <div className="mt-12">
          <CarouselStrip images={clinicImages} title="Fotos da clínica" tone={dark ? "dark" : "light"} />
        </div>
        <div className="mt-12 overflow-hidden rounded-lg border border-[rgba(184,145,49,.18)]">
          <iframe
            className="h-[360px] w-full"
            loading="lazy"
            src="https://maps.google.com/maps?q=Avenida%20Jorge%20Tibiri%C3%A7%C3%A1%2C%201613%20Jardim%20das%20Oliveiras%2013044-125%2C%20Campinas%20SP.&t=m&z=15&output=embed&iwloc=near"
            title="Avenida Jorge Tibiriçá, 1613 Jardim das Oliveiras 13044-125, Campinas SP."
          />
        </div>
      </div>
    </section>
  )
}

function LocalSearchSection() {
  const address = `${businessProfile.address.streetAddress}, ${businessProfile.address.locality} - ${businessProfile.address.region}`
  const serviceLinks = [
    { href: "/implantes/campinas", label: "Implantes dentários em Campinas" },
    { href: "/proteses/campinas", label: "Próteses dentárias em Campinas" },
    { href: "/reabilitacao-oral/campinas", label: "Reabilitação oral em Campinas" },
    { href: "/facetas/campinas", label: "Facetas e coroas dentárias em Campinas" },
    { href: "/clareamento/campinas", label: "Clareamento dental em Campinas" },
    { href: "/ortodontia", label: "Ortodontia em Campinas" },
    { href: "/canal/campinas", label: "Tratamento de canal em Campinas" },
    { href: "/dentistica/campinas", label: "Dentística em Campinas" },
  ]

  return (
    <section className="defer-render light-section py-16 md:py-28" aria-labelledby="dentista-campinas">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--gold-dark)]">
            Campinas, SP
          </p>
          <SectionTitle
            className="mt-4"
            id="dentista-campinas"
            title="Dentista particular em Campinas para implantes, próteses e estética dental"
          />
          <p className="mx-auto mt-7 max-w-3xl text-base font-semibold leading-7 text-black" data-speakable>
            A Vida Odontologia Avançada e Estética é uma clínica odontológica particular em Campinas com mais de 20 anos
            de experiência. O Dr. Edi é especialista em próteses e implantes, com mais de 10 mil implantes realizados.
            Atendemos pacientes de toda Campinas e região com planejamento personalizado.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <article className="info-card-light corner-mark">
            <h3 className="text-xl font-extrabold">
              Onde fica a clínica odontológica?
            </h3>
            <p className="mt-4 text-sm font-semibold leading-6">
              A clínica fica na {address}, CEP {businessProfile.address.postalCode}, no Jardim das Oliveiras em
              Campinas. Atendemos pacientes de Barão Geraldo, Cambuí, Taquaral, Sousas e toda a região.
            </p>
          </article>
          <article className="info-card-light corner-mark">
            <h3 className="text-xl font-extrabold">Quais tratamentos o dentista oferece?</h3>
            <p className="mt-4 text-sm font-semibold leading-6">
              Implantes dentários, próteses dentárias (fixa, removível, protocolo), facetas de porcelana, lentes de
              contato dental, clareamento profissional, ortodontia, tratamento de canal e restaurações estéticas.
            </p>
          </article>
          <article className="info-card-light corner-mark">
            <h3 className="text-xl font-extrabold">Como agendar consulta com dentista em Campinas?</h3>
            <p className="mt-4 text-sm font-semibold leading-6">
              Agende pelo WhatsApp {businessProfile.whatsappDisplay} ou telefone {businessProfile.telephoneDisplay}.
              Atendimento de segunda a sexta, das 8h às 18h. Consulta particular com avaliação personalizada.
            </p>
          </article>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {serviceLinks.map((service) => (
            <Link
              className="rounded-md border border-[rgba(184,145,49,.32)] px-4 py-3 text-sm font-extrabold text-[var(--gold-dark)] transition hover:border-[var(--gold)] hover:bg-[rgba(184,145,49,.08)]"
              href={service.href}
              key={service.href}
            >
              {service.label}
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton>Agendar avaliação odontológica</CtaButton>
        </div>
      </div>
    </section>
  )
}

function CtaSection({
  title,
  text,
  dark = false,
  cta = "Quero avaliar meu caso",
}: {
  title: string
  text?: string
  dark?: boolean
  cta?: string
}) {
  return (
    <section className={dark ? "defer-render dark-section py-16 md:py-28" : "defer-render light-section py-16 md:py-28"}>
      <div className="mx-auto max-w-4xl px-4 text-center">
        <SectionTitle title={title} />
        {text ? (
          <p className={`mx-auto mt-7 max-w-3xl text-base font-semibold leading-7 ${dark ? "text-white" : "text-black"}`}>
            {text}
          </p>
        ) : null}
        <div className="mt-10 flex justify-center">
          <CtaButton>{cta}</CtaButton>
        </div>
      </div>
    </section>
  )
}

function TextSection({
  group,
  dark,
}: {
  group: { title: string; lines: string[] }
  dark: boolean
}) {
  const { intro, cards, list } = shapeLines(group.lines)

  return (
    <section className={dark ? "defer-render dark-section py-16 md:py-28" : "defer-render light-section py-16 md:py-28"}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <SectionTitle title={group.title} />
          {intro.map((line) => (
            <p className={`mx-auto mt-5 max-w-3xl text-base font-semibold leading-7 ${dark ? "text-white" : "text-black"}`} key={line}>
              {line}
            </p>
          ))}
        </div>

        {cards.length ? (
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <article className={`${dark ? "info-card-dark" : "info-card-light"} corner-mark`} key={card.title}>
                <h3 className="text-xl font-extrabold">
                  <HighlightedText text={card.title} />
                </h3>
                <p className="mt-4 text-sm font-semibold leading-6">{card.text}</p>
              </article>
            ))}
          </div>
        ) : null}

        {list.length ? (
          <ul className={`mx-auto mt-10 grid max-w-4xl gap-5 text-base font-semibold leading-7 ${dark ? "text-white" : "text-black"}`}>
            {list.map((line) => (
              <li className="flex gap-4" key={line}>
                <CheckCircle2 className="mt-1 size-6 shrink-0 fill-[var(--gold)] text-black" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}

function FAQSection({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  if (!faqs.length) return null

  return (
    <section className="defer-render dark-section py-16 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle title="Perguntas Frequentes" />
        <div className="mt-10 divide-y divide-white/15">
          {faqs.map((faq) => (
            <details className="group py-5" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-extrabold text-white marker:hidden">
                {faq.question}
                <span className="text-[var(--gold)] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm font-semibold leading-7 text-white/82">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function splitServiceGroups(page: DrediPage) {
  const faqIndex = page.text.findIndex((line) => line === "Perguntas Frequentes")
  const body = page.text.slice(3, faqIndex > -1 ? faqIndex : undefined)
  const majorHeadings = new Set<string>(page.headings.filter(isMajorHeading))
  const groups: Array<{ title: string; lines: string[] }> = []
  let current: { title: string; lines: string[] } | null = null

  for (const line of body) {
    if (majorHeadings.has(line)) {
      current = { title: line, lines: [] }
      groups.push(current)
      continue
    }
    if (!current) {
      current = { title: line, lines: [] }
      groups.push(current)
      continue
    }
    current.lines.push(line)
  }

  const seen = new Set<string>()
  return groups.filter((group) => {
    const key = `${group.title}-${group.lines.join("|")}`
    if (!group.title || seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function isMajorHeading(line: string) {
  return /^(Você|Se você|Volte|Conheça|Histórias|Confira|Por que|Como funciona|Quem é|Não deixe|Dê o primeiro|Pronto|Sorrisos|Agora confira|Quais tipos|Tratamentos|O que é|Depoimentos)/i.test(line)
}

function shapeLines(lines: string[]) {
  const intro: string[] = []
  const cards: Array<{ title: string; text: string }> = []
  const list: string[] = []

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]
    const next = lines[index + 1]
    if (line.includes(":") && line.length > 45) {
      list.push(line)
      continue
    }
    if (line.length <= 54 && next && next.length > 45) {
      cards.push({ title: line, text: next })
      index += 1
      continue
    }
    intro.push(line)
  }

  return { intro, cards, list }
}

function parseFaq(lines: readonly string[]) {
  const index = lines.findIndex((line) => line === "Perguntas Frequentes")
  if (index === -1) return []

  const items = lines.slice(index + 1)
  const faqs: Array<{ question: string; answer: string }> = []
  for (let i = 0; i < items.length; i += 2) {
    const question = items[i]
    const answer = items[i + 1]
    if (!question || !answer) continue
    faqs.push({ question, answer })
  }
  return faqs
}

function getGalleryImages(page: DrediPage) {
  const images = page.images.filter((image) => {
    if (/Feedbacks|Logo|Dr-Edi|Banner|Edi-Mobile|HelloParis/i.test(image)) return false
    if (/-150x150|-768x|-1024x|-819x|-240x300|-169x300/.test(image)) return false
    return /\.(webp|png|jpg|jpeg)$/i.test(image)
  })
  return images.length ? images : resultImages
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5a9.46 9.46 0 0 0-8 14.55L3 21l4.04-1.02A9.5 9.5 0 1 0 12 2.5Zm0 17.18a7.65 7.65 0 0 1-3.9-1.07l-.28-.17-2.39.61.64-2.32-.19-.3A7.67 7.67 0 1 1 12 19.68Zm4.26-5.74c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.53.12-.15.23-.61.75-.75.9-.14.16-.28.17-.52.06a6.23 6.23 0 0 1-1.84-1.14 6.94 6.94 0 0 1-1.27-1.59c-.13-.23-.01-.36.1-.47.1-.1.23-.27.35-.4.12-.14.16-.23.24-.39.08-.15.04-.29-.02-.41-.06-.12-.53-1.28-.73-1.75-.19-.46-.39-.4-.53-.4h-.45c-.16 0-.41.06-.62.29-.21.23-.81.79-.81 1.93 0 1.14.83 2.23.95 2.39.11.15 1.63 2.49 3.96 3.49.55.24.98.38 1.32.49.55.17 1.06.15 1.45.09.44-.07 1.38-.56 1.57-1.1.2-.54.2-1 .14-1.1-.06-.09-.21-.15-.44-.26Z" />
    </svg>
  )
}

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" aria-hidden="true">
      <path d="M444 96c-11-45-47-82-92-94-32-8-63 5-89 24-8 6-18 9-29 9h-20c-10 0-20-3-28-9-26-19-57-32-89-24C52 14 15 51 4 96c-10 42 0 81 22 111 23 31 32 68 36 107 4 47 10 94 21 140l8 34c3 14 15 24 29 24s26-10 30-23l34-139c5-18 21-31 40-31s35 13 40 31l34 139c4 13 16 23 30 23s26-10 29-24l8-34c11-46 17-93 21-140 4-39 13-76 36-107 22-30 32-69 22-111Z" />
    </svg>
  )
}
