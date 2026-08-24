import { Metadata } from 'next'
import { HeroSection } from '@/components/home/hero-section'
import { SocialProofSection } from '@/components/home/social-proof-section'
import { PillarsSection } from '@/components/home/pillars-section'
import { WhyKydonSection } from '@/components/home/why-kydon-section'
import { TractionSection } from '@/components/home/traction-section'
import { TransformSection } from '@/components/home/transform-section'
import { CTASection } from '@/components/home/cta-section'
import {
  getHeroContentWithFallback,
  getPillarsWithFallback,
  getClientLogosWithFallback,
} from '@/lib/cms-content'

export const metadata: Metadata = {
  title: 'Kydon Group | Enterprise Data Intelligence & Workforce Solutions | SEA & Australia',
  description: 'Transform your enterprise with Kydon Group\'s data intelligence and workforce training solutions. AI-powered LMS platforms, adaptive learning, and workforce transformation serving businesses across Southeast Asia and Australia. Founded in Singapore, 2012.',
  openGraph: {
    title: 'Kydon Group | Enterprise Data Intelligence & Workforce Solutions',
    description: 'Transform your enterprise with Kydon Group\'s AI-powered data intelligence and workforce training solutions. Serving businesses across Southeast Asia and Australia with cutting-edge LMS platforms and analytics.',
    type: 'website',
    url: 'https://www.kydongrp.com',
    images: [
      {
        url: 'https://www.kydongrp.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kydon Group - Enterprise Data Intelligence & Workforce Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kydon Group | Enterprise Data Intelligence & Workforce Solutions',
    description: 'AI-powered data intelligence and workforce training solutions for enterprises across Southeast Asia and Australia.',
    images: ['https://www.kydongrp.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.kydongrp.com',
  },
}

export const revalidate = 60

export default async function HomePage() {
  const [heroContent, pillars, clientLogos] = await Promise.all([
    getHeroContentWithFallback(),
    getPillarsWithFallback(),
    getClientLogosWithFallback(),
  ])

  return (
    <>
      <HeroSection content={heroContent} />
      <SocialProofSection clients={clientLogos} />
      <PillarsSection pillars={pillars} />
      <WhyKydonSection />
      <TractionSection />
      <TransformSection />
      <CTASection />
    </>
  )
}
