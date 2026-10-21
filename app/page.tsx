import type { Metadata } from 'next'
import HomeBody from '@/components/site/pages/HomeBody'
import { getInsightCards } from '@/lib/insights'

export const metadata: Metadata = {
  title: { absolute: "Kydon | Where people and AI learn, and learn to work together" },
  description: "Kydon ZilLearn is the learning and performance platform for people and AI agents. Whatever agents your teams use, your people and your agents learn from each other so performance keeps improving.",
  alternates: { canonical: "/" },
  openGraph: { title: "Kydon | Where people and AI learn, and learn to work together", description: "Kydon ZilLearn is the learning and performance platform for people and AI agents. Whatever agents your teams use, your people and your agents learn from each other so performance keeps improving.", url: "/" },
}

export const revalidate = 60

export default async function Page() {
  const cards = await getInsightCards()
  return <HomeBody insights={cards.slice(0, 3)} />
}
