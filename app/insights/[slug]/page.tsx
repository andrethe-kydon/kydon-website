import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { sanityClient, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { notFound } from 'next/navigation'
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/json-ld'

export const revalidate = 60

interface InsightPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  category?: string
  publishedAt?: string
  readTime?: string
  author?: string
  metaTitle?: string
  metaDescription?: string
  image?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  body?: PortableTextBlock[]
}

async function getInsightBySlug(slug: string): Promise<InsightPost | null> {
  try {
    const query = `*[_type == "insight" && slug.current == $slug][0]`
    return await sanityClient.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching insight:', error)
    return null
  }
}

export async function generateStaticParams() {
  try {
    const query = `*[_type == "insight"]{ slug }`
    const insights = await sanityClient.fetch(query)
    return insights?.map((insight: { slug?: { current?: string } }) => ({
      slug: insight?.slug?.current || '',
    })).filter((p: { slug: string }) => p.slug) || []
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const insight = await getInsightBySlug(params.slug)
  
  if (!insight) {
    return {
      title: 'Article Not Found',
    }
  }

  const title = insight.metaTitle || insight.title
  const description = insight.metaDescription || insight.excerpt || `Read ${insight.title} on Kydon Insights`
  const imageUrl = insight.image ? urlFor(insight.image).width(1200).height(630).url() : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: insight.publishedAt,
      authors: insight.author ? [insight.author] : ['Kydon'],
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    alternates: {
      canonical: `/insights/${params.slug}`,
    },
  }
}

function formatDate(dateString?: string): string {
  if (!dateString) return ''
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return ''
  }
}

const components = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string } }) => {
      if (!value?.asset) return null
      return (
        <div className="relative aspect-video my-8 rounded-xl overflow-hidden">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || 'Blog image'}
            fill
            className="object-cover"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-3xl font-bold text-neutral-900 mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-neutral-600 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-neutral-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a href={value?.href} className="text-primary-dark hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-neutral-900">{children}</strong>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-neutral-600">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-neutral-600">{children}</ol>
    ),
  },
}

export default async function InsightDetailPage({ params }: { params: { slug: string } }) {
  const insight = await getInsightBySlug(params.slug)

  if (!insight) {
    notFound()
  }

  const imageUrl = insight.image ? urlFor(insight.image).width(1200).height(600).url() : null
  const baseUrl = 'https://kydongrp.com'

  return (
    <main className="pt-24">
      <ArticleSchema
        title={insight.title}
        description={insight.excerpt || ''}
        url={`${baseUrl}/insights/${insight.slug.current}`}
        imageUrl={imageUrl || undefined}
        publishedAt={insight.publishedAt}
        authorName={insight.author || 'Kydon'}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Insights', url: `${baseUrl}/insights` },
          { name: insight.title, url: `${baseUrl}/insights/${insight.slug.current}` },
        ]}
      />

      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-neutral-50 via-white to-primary/5">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-dark mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          {insight.category && (
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              {insight.category}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            {insight.title}
          </h1>

          {insight.excerpt && (
            <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
              {insight.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
            {insight.author && (
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {insight.author}
              </span>
            )}
            {insight.publishedAt && (
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(insight.publishedAt)}
              </span>
            )}
            {insight.readTime && (
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {insight.readTime}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {imageUrl && (
        <section className="py-8">
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={imageUrl}
                alt={insight.image?.alt || insight.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          {insight.body ? (
            <article className="prose prose-lg max-w-none">
              <PortableText value={insight.body} components={components} />
            </article>
          ) : (
            <p className="text-neutral-600 leading-relaxed">
              {insight.excerpt || 'No content available for this article.'}
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Want to learn more about AI-powered learning?
          </h2>
          <p className="text-neutral-600 mb-6">
            Contact us to discover how Kydon can transform your workforce.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
