"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

type CarouselStripProps = {
  images: readonly string[]
  title: string
  tone?: "light" | "dark"
}

export function CarouselStrip({ images, title, tone = "light" }: CarouselStripProps) {
  const railRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "prev" | "next") => {
    const rail = railRef.current
    if (!rail) return
    const firstCard = rail.querySelector<HTMLElement>("[data-slide]")
    const amount = firstCard ? firstCard.offsetWidth + 24 : rail.clientWidth * 0.8
    rail.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    })
  }

  if (!images.length) return null

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <div
        ref={railRef}
        aria-label={title}
        className="scrollbar-none flex snap-x gap-5 overflow-x-auto scroll-smooth px-8 py-3"
      >
        {images.map((src, index) => (
          <div
            data-slide
            className="relative aspect-square w-[78vw] max-w-[360px] shrink-0 snap-center overflow-hidden rounded-lg bg-neutral-100 shadow-[0_18px_55px_rgba(0,0,0,0.13)] md:w-[31%]"
            key={`${src}-${index}`}
          >
            <Image
              src={src}
              alt={`${title} - imagem ${index + 1}`}
              fill
              sizes="(max-width: 768px) 78vw, 360px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <button
        aria-label="Imagem anterior"
        className={`absolute left-0 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border transition hover:scale-105 ${
          tone === "dark"
            ? "border-[rgba(184,145,49,.45)] bg-black/50 text-[var(--gold)]"
            : "border-[rgba(184,145,49,.25)] bg-white/90 text-[var(--gold-dark)]"
        }`}
        onClick={() => scroll("prev")}
        type="button"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        aria-label="Próxima imagem"
        className={`absolute right-0 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border transition hover:scale-105 ${
          tone === "dark"
            ? "border-[rgba(184,145,49,.45)] bg-black/50 text-[var(--gold)]"
            : "border-[rgba(184,145,49,.25)] bg-white/90 text-[var(--gold-dark)]"
        }`}
        onClick={() => scroll("next")}
        type="button"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  )
}
