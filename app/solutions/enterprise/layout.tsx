import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise Solutions - AI Workforce Development | Kydon',
  description: 'Kydon enterprise solutions align AI-powered skills training to business outcomes. Scalable workforce development trusted by Fortune 500 companies.',
  openGraph: {
    title: 'Enterprise Solutions | Kydon',
    description: 'AI-powered skills training aligned to business outcomes for enterprise.',
    type: 'website',
  },
  alternates: {
    canonical: '/solutions/enterprise',
  },
  keywords: ['enterprise AI solutions', 'workforce development', 'corporate training', 'AI skills alignment', 'business outcomes'],
}

export default function EnterpriseSolutionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
