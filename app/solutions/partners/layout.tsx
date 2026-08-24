import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partner Solutions - Channel & Implementation Partners | Kydon',
  description: 'Join Kydon\'s partner ecosystem. Technology partners, channel partners, and implementation partners delivering AI learning solutions worldwide.',
  openGraph: {
    title: 'Partner Solutions | Kydon',
    description: 'Join Kydon\'s ecosystem delivering AI learning solutions worldwide.',
    type: 'website',
  },
  alternates: {
    canonical: '/solutions/partners',
  },
  keywords: ['AI learning partners', 'channel partners', 'implementation partners', 'learning ecosystem'],
}

export default function PartnerSolutionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
