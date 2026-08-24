import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industry Solutions - AI Learning for Enterprise, Government & Education | Kydon',
  description: 'Kydon delivers tailored AI learning solutions across industries. Enterprise workforce transformation, government capability building, education innovation, and strategic partnerships.',
  openGraph: {
    title: 'Industry Solutions | Kydon',
    description: 'Tailored AI learning solutions for enterprise, government, education, and strategic partners.',
    type: 'website',
  },
  alternates: {
    canonical: '/verticals',
  },
  keywords: ['AI industry solutions', 'enterprise AI learning', 'government training', 'education technology', 'workforce development'],
}

export default function VerticalsLayout({ children }: { children: React.ReactNode }) {
  return children
}
