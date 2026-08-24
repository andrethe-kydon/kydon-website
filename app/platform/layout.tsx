import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent OS Learning Platform - AI-Powered Enterprise Learning | Kydon',
  description: 'Kydon\'s Agent OS Learning Platform delivers AI-powered adaptive learning for enterprises, governments, and education. Personalized learning paths, real-time analytics, and scalable workforce transformation.',
  openGraph: {
    title: 'Agent OS Learning Platform | Kydon',
    description: 'AI-powered adaptive learning platform for workforce transformation. Personalized paths, real-time analytics, and enterprise-grade scalability.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent OS Learning Platform | Kydon',
    description: 'AI-powered adaptive learning platform for workforce transformation.',
  },
  alternates: {
    canonical: '/platform',
  },
  keywords: ['AI learning platform', 'adaptive learning', 'enterprise LMS', 'workforce transformation', 'AI training platform', 'corporate learning', 'learning management system'],
}

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return children
}
