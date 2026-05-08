import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Home, MessageCircle, Search } from "lucide-react"

import { SiteShell, whatsappBridgeHref } from "@/components/dredi/site"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Pagina nao encontrada",
  description: "A pagina solicitada nao foi encontrada no site do Dr. Edi e Vida Odontologia.",
  path: "/404",
  noindex: true,
})

export default function NotFound() {
  return (
    <SiteShell>
      <main className="min-h-[72svh] bg-[#101010] text-white">
        <section className="relative overflow-hidden px-4 py-20 md:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(184,145,49,.18),rgba(16,16,16,0)_38%),radial-gradient(circle_at_75%_18%,rgba(255,255,255,.08),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[.82fr_1.18fr] md:items-center">
            <div className="border-l-2 border-[var(--gold)] pl-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--gold-soft)]">
                Erro 404
              </p>
              <h1 className="mt-5 text-balance text-5xl font-black leading-none text-white md:text-7xl">
                Pagina nao encontrada
              </h1>
              <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-white/84 md:text-lg">
                O endereco pode ter mudado ou a pagina pode nao existir mais. Voce pode voltar ao inicio ou falar com
                a equipe para encontrar o tratamento certo.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[linear-gradient(135deg,#d6b95f,#b38b2e)] px-6 text-base font-extrabold text-white shadow-[0_14px_34px_rgba(184,145,49,.28)] transition hover:-translate-y-1"
                  href="/"
                >
                  <Home className="size-5" />
                  Ir para o inicio
                </Link>
                <a
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/[.04] px-6 text-base font-extrabold text-white transition hover:-translate-y-1 hover:border-[var(--gold)]"
                  href={whatsappBridgeHref()}
                >
                  <MessageCircle className="size-5" />
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Implantes dentarios", href: "/implantes" },
                { label: "Facetas e coroas", href: "/facetas-e-coroas" },
                { label: "Clareamento dental", href: "/clareamento" },
                { label: "Proteses dentarias", href: "/proteses" },
              ].map((item) => (
                <Link
                  className="corner-mark group min-h-28 rounded-lg border border-[rgba(184,145,49,.28)] bg-white/[.035] p-5 text-left text-lg font-extrabold text-white transition hover:-translate-y-1 hover:border-[var(--gold)] hover:bg-white/[.06]"
                  href={item.href}
                  key={item.href}
                >
                  <Search className="mb-5 size-5 text-[var(--gold-soft)]" />
                  {item.label}
                </Link>
              ))}
              <Link
                className="inline-flex min-h-14 items-center gap-3 text-sm font-extrabold uppercase tracking-[0.12em] text-[var(--gold-soft)] transition hover:text-white sm:col-span-2"
                href="/"
              >
                <ArrowLeft className="size-4" />
                Voltar para a pagina inicial
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
