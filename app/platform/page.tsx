import type { Metadata } from 'next'
import ZilLearnBody from '@/components/site/pages/ZilLearnBody'
import { getInsightCardsBySlug } from '@/lib/insights'

export const metadata: Metadata = {
  title: { absolute: "Kydon ZilLearn: the learning and performance platform for people and AI agents | Kydon" },
  description: "Agents are easy to buy. Getting people and agents to perform together is not. Kydon ZilLearn sits across every agent your teams use and makes people and AI learn from each other.",
  alternates: { canonical: "/platform" },
  openGraph: { title: "Kydon ZilLearn: the learning and performance platform for people and AI agents", description: "Agents are easy to buy. Getting people and agents to perform together is not. Kydon ZilLearn sits across every agent your teams use and makes people and AI learn from each other.", url: "/platform" },
}

export const revalidate = 60

const FEATURED = [
  'how-agentic-ai-closes-the-training-to-performance-gap',
  'enterprises-need-an-agentic-layer',
  'from-shadow-ai-to-governed-agents-how-enterprises-are-replacing-risk-with-capability',
]

export default async function Page() {
  const insights = await getInsightCardsBySlug(FEATURED)
  return <ZilLearnBody insights={insights} />
}
