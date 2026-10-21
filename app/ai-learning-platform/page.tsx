import type { Metadata } from 'next'
import AILearningPlatformBody from '@/components/site/pages/AILearningPlatformBody'

export const metadata: Metadata = {
  title: { absolute: "AI Learning Platform: learning built into the work | Kydon" },
  description: "Personalised pathways, answers in the flow of work and live insight into skills. Capability 01 of Kydon ZilLearn, where your people learn.",
  alternates: { canonical: "/ai-learning-platform" },
  openGraph: { title: "AI Learning Platform: learning built into the work", description: "Personalised pathways, answers in the flow of work and live insight into skills. Capability 01 of Kydon ZilLearn, where your people learn.", url: "/ai-learning-platform" },
}

export default function Page() {
  return <AILearningPlatformBody />
}
