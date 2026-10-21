/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { sanityClient, urlFor } from '@/lib/sanity'
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/json-ld'
import { getInsightCards, formatDate, type InsightCard } from '@/lib/insights'

export const revalidate = 60

interface InsightPost {
  title: string
  slug: { current: string }
  excerpt?: string
  category?: string
  publishedAt?: string
  metaTitle?: string
  metaDescription?: string
  image?: { asset: { _ref: string }; alt?: string }
  body?: PortableTextBlock[]
}

/** Returns the post, null if Sanity says it does not exist, or undefined if Sanity could not be reached. */
async function getInsightBySlug(slug: string): Promise<InsightPost | null | undefined> {
  try {
    return await sanityClient.fetch(`*[_type == "insight" && slug.current == $slug][0]`, { slug })
  } catch (error) {
    console.error('Error fetching insight:', error)
    return undefined
  }
}

export async function generateStaticParams() {
  try {
    const insights = await sanityClient.fetch(`*[_type == "insight" && defined(slug.current)]{ slug }`)
    return (insights || []).map((i: { slug?: { current?: string } }) => ({ slug: i?.slug?.current || '' })).filter((p: { slug: string }) => p.slug)
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const insight = await getInsightBySlug(params.slug)
  if (!insight) return { title: { absolute: 'Insights | Kydon' } }
  const title = insight.metaTitle || insight.title
  const description = insight.metaDescription || insight.excerpt || `${insight.title}. Insights from Kydon.`
  const imageUrl = insight.image?.asset ? urlFor(insight.image).width(1200).height(630).url() : undefined
  return {
    title: { absolute: `${title} | Kydon` },
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: insight.publishedAt,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : undefined,
    },
    twitter: { card: 'summary_large_image', title, description, images: imageUrl ? [imageUrl] : undefined },
    alternates: { canonical: `/insights/${params.slug}` },
  }
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: { _ref: string }; alt?: string } }) =>
      value?.asset ? <img src={urlFor(value).width(1400).url()} alt={value.alt || ''} loading="lazy" /> : null,
  },
  block: {
    h1: ({ children }) => <h2>{children}</h2>,
    normal: ({ children }) => <p>{children}</p>,
  },
  marks: {
    link: ({ value, children }) => {
      const href: string = value?.href || '#'
      const external = /^https?:\/\//.test(href) && !href.includes('kydongrp.com')
      return (
        <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {children}
        </a>
      )
    },
  },
}

const DEFAULT_IMAGE = '/images/site/metro-reading.jpg'

export default async function InsightDetailPage({ params }: { params: { slug: string } }) {
  const [post, cards] = await Promise.all([getInsightBySlug(params.slug), getInsightCards()])
  const card: InsightCard | undefined = cards.find((c) => c.slug === params.slug)

  // Sanity answered and the article does not exist.
  if (post === null) notFound()
  // Sanity unreachable and we have no record of the slug either.
  if (post === undefined && !card) notFound()

  const title = post?.title || card!.title
  const category = post?.category || card?.category || 'Insights'
  const publishedAt = post?.publishedAt || card?.publishedAt
  const excerpt = post?.excerpt || card?.excerpt
  const image = post?.image?.asset ? urlFor(post.image).width(1600).height(610).fit('crop').url() : card?.image || DEFAULT_IMAGE
  const related = cards.filter((c) => c.slug !== params.slug).slice(0, 2)
  const url = `https://kydongrp.com/insights/${params.slug}`
  const date = formatDate(publishedAt)

  return (
    <div className="k p-article">
      <ArticleSchema title={title} description={excerpt || ''} url={url} imageUrl={image.startsWith('http') ? image : undefined} publishedAt={publishedAt} authorName="Kydon" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://kydongrp.com' },
          { name: 'Insights', url: 'https://kydongrp.com/insights' },
          { name: title, url },
        ]}
      />

      {/* ARTICLE HERO */}
      <section className="sec" style={{ padding: '64px 0 40px', background: 'radial-gradient(900px 520px at 80% 30%,rgba(254,80,0,0.12),rgba(14,18,21,0) 70%)' }}>
        <div className="streak" style={{ top: '20%', left: '0' }}></div>
        <div className="wrap" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
          <a href="/insights" style={{ color: '#FF7A3D', fontSize: '15px', textDecoration: 'none' }}>← All insights</a>
          <div className="tag">{date ? `${category} · ${date}` : category}</div>
          <h1 style={{ fontSize: 'clamp(38px,4.6vw,64px)', lineHeight: '1', fontWeight: '800' }}>{title}</h1>
        </div>
      </section>
      <section className="sec" style={{ padding: '0 0 20px' }}>
        <div className="wrap">
          <img src={image} alt={post?.image?.alt || ''} style={{ width: '100%', aspectRatio: '21/8', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="sec" style={{ padding: '40px 0 72px' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'flex-start' }}>
          <article className="prose-k" style={{ flex: '1 1 560px', minWidth: '0', maxWidth: '760px' }}>
            {excerpt && (
              <p className="lead" style={{ margin: '0', fontSize: '21px', lineHeight: '1.5', color: '#fff' }}>{excerpt}</p>
            )}
            {post?.body ? (
              <PortableText value={post.body} components={components} />
            ) : (
              !excerpt && <p>This article is being updated. Please check back shortly.</p>
            )}
          </article>
          <aside style={{ flex: '0 1 320px', minWidth: '260px', display: 'flex', flexDirection: 'column', gap: '14px', position: 'sticky', top: '24px' }}>
            <div className="card" style={{ padding: '24px', position: 'relative', overflow: 'hidden' }}>
              <div className="plane" aria-hidden="true" style={{ left: '0', top: '0', width: '5px', height: '100%', background: 'var(--kfold)' }}></div>
              <div className="tag">Put it to work</div>
              <h3 style={{ fontSize: '22px', marginTop: '8px' }}>See learning agents inside your workflow.</h3>
              <a className="btn" href="/contact" style={{ marginTop: '14px', minHeight: '46px', fontSize: '15px' }}>Book a platform demo</a>
            </div>
            {related.length > 0 && (
              <div className="card" style={{ padding: '24px' }}>
                <div className="tag" style={{ color: '#93A0A8' }}>Related</div>
                {related.map((r) => (
                  <a key={r.slug} href={`/insights/${r.slug}`} style={{ display: 'block', color: '#fff', marginTop: '10px', fontWeight: '600', textDecoration: 'none' }}>
                    {r.title}
                  </a>
                ))}
                <a href="/platform" style={{ display: 'block', color: '#FF7A3D', marginTop: '14px', textDecoration: 'none' }}>About Kydon ZilLearn →</a>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  )
}
