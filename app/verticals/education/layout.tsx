import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education AI Solutions - Smart Learning for Institutions | Kydon',
  description: 'Kydon\'s AI-powered education solutions for schools, universities, and training institutions. Adaptive learning, student analytics, and curriculum optimization for better outcomes.',
  openGraph: {
    title: 'Education AI Solutions | Kydon',
    description: 'AI-powered learning solutions for educational institutions. Adaptive learning and student analytics.',
    type: 'website',
  },
  alternates: {
    canonical: '/verticals/education',
  },
  keywords: ['education AI', 'adaptive learning', 'edtech', 'student analytics', 'curriculum optimization', 'AI in education', 'smart learning'],
}

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return children
}
