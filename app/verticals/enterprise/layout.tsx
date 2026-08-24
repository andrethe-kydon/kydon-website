import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise AI Learning Solutions - Workforce Transformation | Kydon',
  description: 'Transform your enterprise workforce with Kydon\'s AI-powered learning solutions. Personalized training, skill gap analysis, and measurable ROI for Fortune 500 companies and global organizations.',
  openGraph: {
    title: 'Enterprise AI Learning Solutions | Kydon',
    description: 'AI-powered workforce transformation for enterprises. Personalized training with measurable ROI.',
    type: 'website',
  },
  alternates: {
    canonical: '/verticals/enterprise',
  },
  keywords: ['enterprise learning', 'corporate training AI', 'workforce transformation', 'employee development', 'enterprise LMS', 'AI training solutions'],
}

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return children
}
