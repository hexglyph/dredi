import Script from "next/script"

const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
const whatsappContactLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONTACT_LABEL
const whatsappAppointmentLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_APPOINTMENT_LABEL

export function GoogleAdsTag() {
  if (!adsId) return null

  const conversions = {
    whatsappContact: whatsappContactLabel ? `${adsId}/${whatsappContactLabel}` : "",
    whatsappAppointment: whatsappAppointmentLabel ? `${adsId}/${whatsappAppointmentLabel}` : "",
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`} strategy="afterInteractive" />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${adsId}');

          window.drediGoogleAdsConversions = ${JSON.stringify(conversions)};

          document.addEventListener('click', function (event) {
            var link = event.target && event.target.closest ? event.target.closest('a') : null;
            if (!link) return;

            var conversionType = link.getAttribute('data-google-ads-conversion');
            if (!conversionType && link.href && link.href.indexOf('https://wa.me/') === 0) {
              conversionType = 'whatsappContact';
            }

            var sendTo = window.drediGoogleAdsConversions && window.drediGoogleAdsConversions[conversionType];
            if (!sendTo || typeof gtag !== 'function') return;

            gtag('event', 'conversion', {
              send_to: sendTo,
              event_callback: function () {}
            });
          });
        `}
      </Script>
    </>
  )
}
