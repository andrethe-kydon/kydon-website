import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Businesses | Kydon Group',
  description: 'Kydon Group businesses: Kydon Learning Systems (learning technology & consulting), ZilLearn (AI learning marketplace), and ZilLearn Bina Riya (Malaysia operations).',
  alternates: {
    canonical: '/businesses',
  },
}

export default function BusinessesLayout({ children }: { children: React.ReactNode }) {
  return children
}
