import type { Metadata } from 'next'
import InsightsBody from '@/components/site/pages/InsightsBody'
import { getInsightCards } from '@/lib/insights'
import { BreadcrumbSchema } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Insights: thinking on people, AI and performance | Kydon',
  description:
    'Articles from Kydon on people, AI agents and performance: in-workflow learning, AI governance, workforce redesign and putting AI to work.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights | Kydon',
    description: 'Thinking on people, AI and performance.',
    url: '/insights',
  },
}

export const revalidate = 60

export default async function InsightsPage() {
  const cards = await getInsightCards()
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Insights', url: '/insights' }]} />
      <InsightsBody featured={cards.slice(0, 6)} more={cards.slice(6)} total={cards.length} />
    </>
  )
}
