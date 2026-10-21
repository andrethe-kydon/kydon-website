import type { Metadata } from 'next'
import SolPartnersBody from '@/components/site/pages/SolPartnersBody'

export const metadata: Metadata = {
  title: { absolute: "Partners: build the future of people and AI with us | Kydon" },
  description: "Join an ecosystem of technology providers, content creators, agent builders and market leaders shaping how the world works with AI.",
  alternates: { canonical: "/solutions/partners" },
  openGraph: { title: "Partners: build the future of people and AI with us", description: "Join an ecosystem of technology providers, content creators, agent builders and market leaders shaping how the world works with AI.", url: "/solutions/partners" },
}

export default function Page() {
  return <SolPartnersBody />
}
