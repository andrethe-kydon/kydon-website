import { Metadata } from 'next'
import { getInsights } from '@/lib/sanity-queries'
import { urlFor } from '@/lib/sanity'
import InsightsClientWrapper from './insights-client'
import { BreadcrumbSchema } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Insights & Blog - AI Learning Thought Leadership | Kydon',
  description: 'Explore thought leadership, research, and updates on AI-powered learning and workforce transformation from Kydon\'s experts. Industry trends, case studies, and best practices.',
  openGraph: {
    title: 'Insights & Blog | Kydon',
    description: 'Thought leadership on AI-powered learning, workforce transformation, and enterprise training innovation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights & Blog | Kydon',
    description: 'AI learning thought leadership and industry insights.',
  },
  alternates: {
    canonical: '/insights',
  },
  keywords: ['AI learning insights', 'workforce transformation blog', 'enterprise training', 'L&D thought leadership', 'AI education research'],
}

export const revalidate = 60

// Default insights for fallback - isPlaceholder flag prevents broken links
const defaultInsights = [
  {
    _id: '1',
    slug: { current: '' },
    category: 'AI Trends',
    title: 'The AI Shock: How Enterprises Must Adapt',
    excerpt: "85% of jobs that will exist in 2030 haven't been invented yet. How organizations can prepare for the largest workforce transformation in history.",
    publishedAt: '2026-02-15T00:00:00Z',
    readTime: '8 min read',
    isPlaceholder: true,
  },
  {
    _id: '2',
    slug: { current: '' },
    category: 'Technology',
    title: 'From Static LMS to Agentic Learning',
    excerpt: 'Why autonomous agents are replacing rules-based learning systems and what it means for L&D leaders.',
    publishedAt: '2026-02-10T00:00:00Z',
    readTime: '6 min read',
    isPlaceholder: true,
  },
  {
    _id: '3',
    slug: { current: '' },
    category: 'Case Study',
    title: 'Singapore Government AI Reskilling Initiative',
    excerpt: 'How MINDEF Singapore deployed AI-powered learning to transform workforce capabilities across 50,000+ personnel.',
    publishedAt: '2026-02-05T00:00:00Z',
    readTime: '10 min read',
    isPlaceholder: true,
  },
  {
    _id: '4',
    slug: { current: '' },
    category: 'Research',
    title: 'The Skills Passport: Future of Credentials',
    excerpt: 'Why traditional certifications are becoming obsolete and how verified digital credentials are reshaping career mobility.',
    publishedAt: '2026-01-28T00:00:00Z',
    readTime: '7 min read',
    isPlaceholder: true,
  },
]

export default async function InsightsPage() {
  const cmsInsights = await getInsights()
  const insights = cmsInsights && cmsInsights.length > 0 ? cmsInsights : defaultInsights

  // Transform CMS data to include imageUrl (do NOT pass functions/components)
  const transformedInsights = insights.map(insight => ({
    _id: insight._id,
    slug: insight.slug,
    category: insight.category || 'AI Trends',
    title: insight.title,
    excerpt: insight.excerpt,
    publishedAt: insight.publishedAt,
    readTime: insight.readTime,
    imageUrl: 'image' in insight && insight.image ? urlFor(insight.image).width(600).height(400).url() : undefined,
    isPlaceholder: 'isPlaceholder' in insight ? insight.isPlaceholder : false,
  }))

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://kydongrp.com' },
          { name: 'Insights', url: 'https://kydongrp.com/insights' },
        ]}
      />
      <InsightsClientWrapper insights={transformedInsights} />
    </>
  )
}
