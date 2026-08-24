import Script from 'next/script'
import { getTrackingSettings } from '@/lib/sanity-queries'

export default async function TrackingScripts() {
  const settings = await getTrackingSettings()

  if (!settings) return null

  return (
    <>
      {/* Google Tag Manager - Head Script */}
      {settings.gtmEnabled && settings.gtmId && (
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${settings.gtmId}');`,
          }}
        />
      )}

      {/* Google Analytics (GA4) */}
      {settings.gaEnabled && settings.gaMeasurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${settings.gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${settings.gaMeasurementId}');`,
            }}
          />
        </>
      )}

      {/* Facebook / Meta Pixel */}
      {settings.fbPixelEnabled && settings.fbPixelId && (
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${settings.fbPixelId}');
              fbq('track', 'PageView');`,
          }}
        />
      )}

      {/* Custom Head Scripts */}
      {settings.customHeadScripts && (
        <Script
          id="custom-head-scripts"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: settings.customHeadScripts,
          }}
        />
      )}
    </>
  )
}

// GTM noscript iframe for body - exported separately
export async function TrackingNoscript() {
  const settings = await getTrackingSettings()

  if (!settings?.gtmEnabled || !settings?.gtmId) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${settings.gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}

// Facebook Pixel noscript fallback
export async function FBPixelNoscript() {
  const settings = await getTrackingSettings()

  if (!settings?.fbPixelEnabled || !settings?.fbPixelId) return null

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${settings.fbPixelId}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  )
}
