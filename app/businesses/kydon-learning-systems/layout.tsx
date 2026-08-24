import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kydon Learning Systems - Learning Technology & Consulting | Kydon',
  description: 'Kydon Learning Systems delivers end-to-end learning technology solutions including LMS, custom application development, AR/VR training, gamified e-learning, and learning consultancy. 500,000+ hours of R&D expertise.',
  openGraph: {
    title: 'Kydon Learning Systems | Kydon Group',
    description: 'End-to-end learning technology solutions. LMS, custom apps, AR/VR, gamification, and consulting.',
    type: 'website',
  },
  alternates: {
    canonical: '/businesses/kydon-learning-systems',
  },
  keywords: ['learning management system', 'LMS', 'e-learning development', 'learning technology', 'AR VR training', 'gamified learning', 'learning consultancy', 'Singapore'],
}

export default function KLSLayout({ children }: { children: React.ReactNode }) {
  return children
}
