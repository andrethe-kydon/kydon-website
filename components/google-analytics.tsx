'use client'

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function GoogleAnalytics() {
  // Only render if measurement ID is configured and not a placeholder
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    return null
  }
  
  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />
}
