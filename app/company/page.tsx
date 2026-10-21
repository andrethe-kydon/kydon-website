import type { Metadata } from 'next'
import CompanyBody from '@/components/site/pages/CompanyBody'

export const metadata: Metadata = {
  title: { absolute: "Company: people and AI, learning together | Kydon" },
  description: "Founded in Singapore in 2012, Kydon is a group of companies across Asia and Australia. We build the platform, and train the people, that help organisations get their people and AI performing together.",
  alternates: { canonical: "/company" },
  openGraph: { title: "Company: people and AI, learning together", description: "Founded in Singapore in 2012, Kydon is a group of companies across Asia and Australia. We build the platform, and train the people, that help organisations get their people and AI performing together.", url: "/company" },
}

export default function Page() {
  return <CompanyBody />
}
