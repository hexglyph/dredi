"use client"

import type React from "react"

type WhatsAppLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: string,
      params: {
        send_to: string
        value?: number
        currency?: string
        event_callback?: () => void
        event_timeout?: number
      },
    ) => void
  }
}

const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_APPOINTMENT_LABEL
const sendTo = adsId && conversionLabel ? `${adsId}/${conversionLabel}` : ""

export function WhatsAppLink({ href, children, className }: WhatsAppLinkProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()

    let didRedirect = false
    const redirect = () => {
      if (didRedirect) return
      didRedirect = true
      window.location.href = href
    }

    if (!sendTo || typeof window.gtag !== "function") {
      redirect()
      return
    }

    window.gtag("event", "conversion", {
      send_to: sendTo,
      value: 1.0,
      currency: "BRL",
      event_callback: redirect,
      event_timeout: 2000,
    })

    window.setTimeout(redirect, 2000)
  }

  return (
    <a className={className} data-client-google-ads-conversion="whatsappAppointment" href={href} onClick={handleClick}>
      {children}
    </a>
  )
}
