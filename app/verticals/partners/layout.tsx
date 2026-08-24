import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategic Partners - AI Learning Ecosystem | Kydon',
  description: 'Partner with Kydon to deliver AI-powered learning solutions. Join our ecosystem of technology partners, resellers, and implementation partners building the future of workforce development.',
  openGraph: {
    title: 'Strategic Partners | Kydon',
    description: 'Partner with Kydon to deliver AI-powered learning solutions globally.',
    type: 'website',
  },
  alternates: {
    canonical: '/verticals/partners',
  },
  keywords: ['AI learning partners', 'technology partnership', 'learning ecosystem', 'strategic alliance', 'reseller program'],
}

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children
}
