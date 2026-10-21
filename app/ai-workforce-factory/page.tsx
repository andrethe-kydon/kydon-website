import type { Metadata } from 'next'
import FactoryBody from '@/components/site/pages/FactoryBody'

export const metadata: Metadata = {
  title: { absolute: "The AI Workforce Factory\u2122: we develop the people who put AI to work | Kydon" },
  description: "The talent engine behind Kydon ZilLearn: one repeatable model that links people, deployment and performance.",
  alternates: { canonical: "/ai-workforce-factory" },
  openGraph: { title: "The AI Workforce Factory\u2122: we develop the people who put AI to work", description: "The talent engine behind Kydon ZilLearn: one repeatable model that links people, deployment and performance.", url: "/ai-workforce-factory" },
}

export default function Page() {
  return <FactoryBody />
}
