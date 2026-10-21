import type { Metadata, Viewport } from 'next'
import { Montserrat, League_Spartan } from 'next/font/google'
import './globals.css'
import './kydon-base.css'
import './kydon.css'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import GoogleAnalytics from '@/components/google-analytics'
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from '@/components/seo/json-ld'
import TrackingScripts, { TrackingNoscript, FBPixelNoscript } from '@/components/tracking-scripts'

// Body face. Weights limited to those the codebase actually uses:
// 400 default/font-normal, 500 font-medium, 600 font-semibold, 700 font-bold.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

// Display face for h1-h4 and the .font-display escape hatch. Headings only
// ever use font-semibold (600) and font-bold (700).
const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-league-spartan',
  display: 'swap',
})

export const dynamic = 'force-dynamic'

const siteUrl = process.env.NEXTAUTH_URL || 'https://www.kydongrp.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0E1215',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kydon | Where people and AI learn, and learn to work together',
    template: '%s | Kydon',
  },
  description: 'Kydon ZilLearn is the learning and performance platform for people and AI agents. Whatever AI agents your teams work with, Kydon makes your people and your agents learn from each other, so performance keeps improving.',
  keywords: [
    'AI learning',
    'workforce transformation',
    'enterprise learning',
    'AI training',
    'skills development',
    'agentic AI',
    'corporate training',
    'L&D technology',
    'learning management',
    'AI education',
    'reskilling',
    'upskilling',
    'Kydon',
    'Kydon Group',
    'Singapore AI company',
    'learning intelligence',
    'AI-powered LMS',
    'adaptive learning platform',
  ],
  authors: [{ name: 'Kydon Group' }],
  creator: 'Kydon Group',
  publisher: 'Kydon Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Kydon',
    title: 'Kydon | Where people and AI learn, and learn to work together',
    description: 'Kydon ZilLearn is the learning and performance platform for people and AI agents, with the AI Workforce Factory™ to put it to work.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kydon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kydon | Where people and AI learn, and learn to work together',
    description: 'The learning and performance platform for people and AI agents.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
        <TrackingScripts />
      </head>
      <body className={`${montserrat.variable} ${leagueSpartan.variable}`}>
        <TrackingNoscript />
        <FBPixelNoscript />
        <OrganizationSchema />
        <WebSiteSchema />
        <LocalBusinessSchema />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
