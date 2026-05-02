import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react"

import {
  JsonLd,
  buildBreadcrumbSchema,
  buildDentistSchema,
  buildPersonSchema,
  buildWebPageSchema,
  buildWebsiteSchema,
} from "@/components/dredi/structured-data"
import { WhatsAppLink } from "@/components/whatsapp-link"
import { businessProfile, createPageMetadata } from "@/lib/seo"

const pageTitle = "Agende pelo WhatsApp"
const pageDescription =
  "Fale pelo WhatsApp com a equipe do Dr. Edi em Campinas para agendar uma avaliação odontológica particular."

const logo = "/site-assets/2025/01/VIDA-S_FUNDO-DOURADA.webp"
const heroImage = "/site-assets/2026/03/Dr.-Edi-Banner-5.webp"
const clinicImages = [
  "/site-assets/2026/03/4.webp",
  "/site-assets/2026/03/18.webp",
  "/site-assets/2026/03/20.webp",
]

export const metadata: Metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/whatsapp",
  image: heroImage,
  noindex: true,
})

export default function WhatsAppPage() {
  const defaultHref = createWhatsAppHref()

  return (
    <>
      <JsonLd
        data={[
          buildDentistSchema(),
          buildPersonSchema(),
          buildWebsiteSchema(),
          buildWebPageSchema({
            path: "/whatsapp",
            title: pageTitle,
            description: pageDescription,
            image: heroImage,
          }),
          buildBreadcrumbSchema("/whatsapp", [
            { name: "Início", path: "/" },
            { name: "WhatsApp", path: "/whatsapp" },
          ]),
        ]}
      />
      <main className="min-h-screen bg-[#101010] text-white">
        <section className="relative flex min-h-[88svh] overflow-hidden">
          <Image
            src={heroImage}
            alt="Dr. Edi na Vida Odontologia"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.42)_48%,rgba(0,0,0,.18)),linear-gradient(0deg,#101010_0%,rgba(16,16,16,0)_28%)]" />

          <header className="absolute inset-x-0 top-0 z-10">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-6">
              <Link className="relative block h-16 w-28 overflow-hidden" href="/" aria-label="Vida Odontologia">
                <Image
                  src={logo}
                  alt="Vida Odontologia Avançada e Estética"
                  fill
                  priority
                  sizes="112px"
                  className="scale-[2.15] object-contain"
                />
              </Link>
              <a
                className="hidden items-center gap-2 rounded-md border border-[rgba(220,195,115,.44)] bg-black/30 px-4 py-3 text-sm font-extrabold text-[var(--gold-soft)] backdrop-blur transition hover:border-[var(--gold)] hover:text-white sm:inline-flex"
                href="tel:+551932760525"
              >
                <Phone className="size-4" />
                {businessProfile.telephoneDisplay}
              </a>
            </div>
          </header>

          <div className="relative z-10 mx-auto flex w-full max-w-6xl items-end px-4 pb-14 pt-28 md:items-center md:px-6 md:pb-12">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-md border border-[rgba(220,195,115,.38)] bg-black/35 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--gold-soft)] backdrop-blur">
                <MapPin className="size-4" />
                Campinas, SP
              </p>
              <h1 className="mt-7 text-balance text-[42px] font-black leading-[1.02] text-white md:text-[64px]">
                Fale com a equipe do Dr. Edi pelo WhatsApp
              </h1>
              <p className="mt-7 max-w-xl text-pretty text-base font-bold leading-7 text-white md:text-lg">
                Agende sua avaliação odontológica particular em Campinas e receba orientação inicial para implantes,
                próteses, facetas, clareamento, ortodontia, endodontia ou dentística.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton href={defaultHref}>Chamar no WhatsApp</WhatsAppButton>
                <a
                  className="inline-flex min-h-16 items-center justify-center gap-3 rounded-lg border border-white/24 bg-black/25 px-7 text-base font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:border-[var(--gold)]"
                  href="tel:+551932760525"
                >
                  <Phone className="size-5" />
                  Ligar para a clínica
                </a>
              </div>
              <ul className="mt-8 grid max-w-2xl gap-3 text-sm font-bold text-white/88 sm:grid-cols-3">
                {[
                  "Resposta pela equipe",
                  "Atendimento particular",
                  "Clínica em Campinas",
                ].map((item) => (
                  <li className="flex items-center gap-2" key={item}>
                    <CheckCircle2 className="size-5 fill-[var(--gold)] text-black" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="light-section py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1.05fr_.95fr] md:px-6">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--gold-dark)]">
                Atendimento direto
              </p>
              <h2 className="mt-4 max-w-3xl text-balance text-4xl font-black leading-tight text-black md:text-5xl">
                Em poucos minutos você inicia seu agendamento
              </h2>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-black">
                O WhatsApp é o caminho mais rápido para contar o que você precisa, confirmar disponibilidade de
                horários e receber as orientações para a avaliação.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: MessageCircle,
                  title: "Conte o que deseja resolver",
                  text: "Sorriso incompleto, dor, estética dental, prótese, implante ou avaliação preventiva.",
                },
                {
                  icon: Clock3,
                  title: "Receba retorno da equipe",
                  text: "A equipe encaminha as primeiras informações e combina o melhor horário disponível.",
                },
                {
                  icon: ShieldCheck,
                  title: "Faça uma avaliação profissional",
                  text: "O plano de tratamento é definido presencialmente, com análise individual do seu caso.",
                },
              ].map((item) => (
                <article className="info-card-light corner-mark" key={item.title}>
                  <item.icon className="size-7 text-[var(--gold-dark)]" />
                  <h3 className="mt-5 text-xl font-extrabold text-black">{item.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-black">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--gold-soft)]">
              Escolha o motivo do contato
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-black leading-tight text-white md:text-5xl">
              Abra o WhatsApp com a mensagem certa
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                "Implantes dentários",
                "Próteses dentárias",
                "Facetas e coroas",
                "Clareamento dental",
                "Ortodontia",
                "Tratamento de canal",
              ].map((service) => (
                <WhatsAppLink
                  className="corner-mark rounded-lg border border-[rgba(184,145,49,.28)] bg-white/[.035] p-6 text-left text-lg font-extrabold text-white transition hover:-translate-y-1 hover:border-[var(--gold)] hover:bg-white/[.06]"
                  href={createWhatsAppHref(`Olá. Vim pela campanha e gostaria de saber mais sobre ${service}.`)}
                  key={service}
                >
                  {service}
                  <span className="mt-4 flex items-center gap-2 text-sm font-bold text-[var(--gold-soft)]">
                    <MessageCircle className="size-4" />
                    Conversar agora
                  </span>
                </WhatsAppLink>
              ))}
            </div>
          </div>
        </section>

        <section className="light-section py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[.9fr_1.1fr] md:px-6">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--gold-dark)]">
                Vida Odontologia
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-black md:text-5xl">
                Avaliação odontológica em Campinas
              </h2>
              <div className="mt-7 space-y-4 text-base font-semibold leading-7 text-black">
                <p>
                  Atendimento na {businessProfile.address.streetAddress}, {businessProfile.address.locality} -{" "}
                  {businessProfile.address.region}, CEP {businessProfile.address.postalCode}.
                </p>
                <p>
                  A clínica atende de forma particular, com planejamento personalizado e foco em saúde, estética e
                  função do sorriso.
                </p>
              </div>
              <div className="mt-8">
                <WhatsAppButton href={defaultHref}>Agendar pelo WhatsApp</WhatsAppButton>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {clinicImages.map((src, index) => (
                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[rgba(184,145,49,.2)] bg-[#f8f6ee]"
                  key={src}
                >
                  <Image
                    src={src}
                    alt={`Vida Odontologia em Campinas - foto ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 250px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="text-balance text-4xl font-black leading-tight text-white md:text-5xl">
              Pronto para falar com a equipe?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-7 text-white">
              Clique no botão abaixo e envie uma mensagem para iniciar seu atendimento pelo WhatsApp.
            </p>
            <div className="mt-9 flex justify-center">
              <WhatsAppButton href={defaultHref}>Chamar no WhatsApp</WhatsAppButton>
            </div>
          </div>
        </section>

        <footer className="border-t border-[rgba(184,145,49,.28)] bg-[#101010] px-4 py-8 text-center text-sm font-semibold text-[var(--gold-soft)]">
          {businessProfile.name} - {businessProfile.telephoneDisplay}
        </footer>

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/12 bg-[#101010]/94 p-3 backdrop-blur md:hidden">
          <WhatsAppLink
            className="cta-shine flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#1fad58] px-5 text-base font-extrabold text-white shadow-[0_0_34px_rgba(32,201,103,.45)]"
            href={defaultHref}
          >
            <MessageCircle className="relative z-10 size-5" />
            <span className="relative z-10">Chamar no WhatsApp</span>
          </WhatsAppLink>
        </div>
      </main>
    </>
  )
}

function WhatsAppButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <WhatsAppLink
      className="cta-shine inline-flex min-h-16 w-full max-w-[380px] items-center justify-center gap-4 overflow-hidden rounded-lg bg-[#1fad58] px-7 text-base font-extrabold text-white shadow-[0_0_52px_rgba(32,201,103,.48)] transition hover:-translate-y-1 md:text-lg"
      href={href}
    >
      <MessageCircle className="size-5" />
      {children}
    </WhatsAppLink>
  )
}

function createWhatsAppHref(message = "Olá. Vim pela campanha e gostaria de agendar uma avaliação odontológica.") {
  const number = businessProfile.whatsapp.replace(/\D/g, "")

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
