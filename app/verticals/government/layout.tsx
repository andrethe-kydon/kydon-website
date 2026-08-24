import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Government AI Learning Solutions - Public Sector Training | Kydon',
  description: 'Kydon\'s AI learning solutions for government agencies. Build public sector capabilities with secure, scalable training platforms trusted by MINDEF, MOE, MHA, and more.',
  openGraph: {
    title: 'Government AI Learning Solutions | Kydon',
    description: 'Secure, scalable AI learning for government agencies and public sector organizations.',
    type: 'website',
  },
  alternates: {
    canonical: '/verticals/government',
  },
  keywords: ['government training', 'public sector learning', 'government AI', 'civil service training', 'government LMS', 'Singapore government'],
}

export default function GovernmentLayout({ children }: { children: React.ReactNode }) {
  return children
}
