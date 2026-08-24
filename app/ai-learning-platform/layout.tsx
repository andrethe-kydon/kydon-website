import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learning Intelligence Infrastructure - AI Learning Platform | Kydon',
  description: 'Kydon\'s Learning Intelligence Infrastructure uses adaptive AI to deliver personalized learning paths, skill gap analysis, and real-time analytics for enterprise workforce development.',
  openGraph: {
    title: 'Learning Intelligence Infrastructure | Kydon',
    description: 'Adaptive AI-powered learning infrastructure for personalized workforce development at scale.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learning Intelligence Infrastructure | Kydon',
    description: 'Adaptive AI-powered learning infrastructure for workforce development.',
  },
  alternates: {
    canonical: '/ai-learning-platform',
  },
  keywords: ['learning intelligence', 'AI learning infrastructure', 'adaptive learning', 'skill gap analysis', 'personalized learning', 'enterprise AI'],
}

export default function AILearningPlatformLayout({ children }: { children: React.ReactNode }) {
  return children
}
