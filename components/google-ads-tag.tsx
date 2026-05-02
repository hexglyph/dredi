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
          gtag('config', '${adsId}', {
            allow_enhanced_conversions: true,
            conversion_linker: true
          });
          gtag('consent', 'default', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
            analytics_storage: 'granted'
          });

          window.drediGoogleAdsConversions = ${JSON.stringify(conversions)};

          function drediOpenConversionUrl(link, url) {
            var target = link.getAttribute('target');
            if (target === '_blank') {
              var newWindow = window.open('about:blank', '_blank');
              if (newWindow) {
                newWindow.opener = null;
                newWindow.location = url;
                return;
              }
            }

            window.location.href = url;
          }

          function drediSendGoogleAdsConversion(sendTo, navigate) {
            if (!sendTo || typeof gtag !== 'function') {
              navigate();
              return false;
            }

            var didNavigate = false;
            var safeNavigate = function () {
              if (didNavigate) return;
              didNavigate = true;
              navigate();
            };

            gtag('event', 'conversion', {
              send_to: sendTo,
              value: 1.0,
              currency: 'BRL',
              event_callback: safeNavigate,
              event_timeout: 1000
            });

            window.setTimeout(safeNavigate, 1100);
            return false;
          }

          window.gtag_report_conversion = function (url) {
            var sendTo = window.drediGoogleAdsConversions && window.drediGoogleAdsConversions.whatsappAppointment;

            return drediSendGoogleAdsConversion(sendTo, function () {
              if (typeof url !== 'undefined' && url) {
                window.location.href = url;
              }
            });
          };

          window.drediReportGoogleAdsConversion = function (link, conversionType) {
            var sendTo = window.drediGoogleAdsConversions && window.drediGoogleAdsConversions[conversionType];
            if (!link || !link.href || !sendTo || typeof gtag !== 'function') return true;

            return drediSendGoogleAdsConversion(sendTo, function () {
              drediOpenConversionUrl(link, link.href);
            });
          };

          document.addEventListener('click', function (event) {
            var link = event.target && event.target.closest ? event.target.closest('a') : null;
            if (!link) return;
            if (link.hasAttribute('data-client-google-ads-conversion')) return;

            var conversionType = link.getAttribute('data-google-ads-conversion');
            if (!conversionType && link.href && (link.href.indexOf('https://wa.me/') === 0 || link.href.indexOf('https://api.whatsapp.com/') === 0)) {
              conversionType = 'whatsappContact';
            }

            if (!conversionType) return;
            event.preventDefault();
            window.drediReportGoogleAdsConversion(link, conversionType);
          }, true);
        `}
      </Script>
    </>
  )
}
