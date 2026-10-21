import type { Metadata } from 'next'
import IntelligenceBody from '@/components/site/pages/IntelligenceBody'

export const metadata: Metadata = {
  title: { absolute: "Kydon Intelligence: help your organisation learn faster than the world changes | Kydon" },
  description: "Monitor change, understand what it means for you and decide with evidence. Capability 04 of Kydon ZilLearn.",
  alternates: { canonical: "/kydon-intelligence" },
  openGraph: { title: "Kydon Intelligence: help your organisation learn faster than the world changes", description: "Monitor change, understand what it means for you and decide with evidence. Capability 04 of Kydon ZilLearn.", url: "/kydon-intelligence" },
}

export default function Page() {
  return <IntelligenceBody />
}
