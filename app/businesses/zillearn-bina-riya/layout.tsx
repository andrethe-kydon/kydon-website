import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ZilLearn Bina Riya - AI Learning Solutions in Malaysia | Kydon',
  description: 'ZilLearn Bina Riya delivers Kydon\'s AI-powered learning solutions in Malaysia. Workforce development, digital skills training, and enterprise learning for Malaysian organizations.',
  openGraph: {
    title: 'ZilLearn Bina Riya | Kydon Group',
    description: 'AI-powered learning solutions for Malaysia. Workforce development and enterprise training.',
    type: 'website',
  },
  alternates: {
    canonical: '/businesses/zillearn-bina-riya',
  },
  keywords: ['Malaysia AI learning', 'workforce development Malaysia', 'enterprise training Malaysia', 'digital skills Malaysia'],
}

export default function ZilLearnBinaRiyaLayout({ children }: { children: React.ReactNode }) {
  return children
}
