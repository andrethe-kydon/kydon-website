import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education Solutions - AI-Powered Learning for Institutions | Kydon',
  description: 'Transform educational outcomes with Kydon\'s AI-powered learning solutions for schools, universities, and training providers. Adaptive learning paths and intelligent analytics.',
  openGraph: {
    title: 'Education Solutions | Kydon',
    description: 'AI-powered learning solutions for schools, universities, and training providers.',
    type: 'website',
  },
  alternates: {
    canonical: '/solutions/education',
  },
  keywords: ['education AI solutions', 'adaptive learning', 'edtech platform', 'institutional learning', 'AI education'],
}

export default function EducationSolutionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
