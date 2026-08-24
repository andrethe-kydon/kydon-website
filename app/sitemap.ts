import { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { sanityClient } from '@/lib/sanity'

interface InsightSlug {
  slug?: { current?: string }
  _updatedAt?: string
}

interface JobSlug {
  _id?: string
  _updatedAt?: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = headers()
  const host = headersList.get('x-forwarded-host') || process.env.NEXTAUTH_URL || 'https://kydongrp.com'
  const baseUrl = host.startsWith('http') ? host : `https://${host}`

  const now = new Date()

  // Core pages - highest priority
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/platform`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-learning-platform`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ai-university`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ai-learning-engine`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/company`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  // Verticals pages
  const verticalPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/verticals`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/verticals/enterprise`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/verticals/government`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/verticals/education`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/verticals/partners`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]

  // Solutions pages
  const solutionPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/solutions/enterprise`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/solutions/government`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/solutions/education`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/solutions/partners`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]

  // Business pages
  const businessPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/businesses/kydon-learning-systems`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/businesses/zillearn-bina-riya`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  // Dynamic blog posts from Sanity
  let blogPosts: MetadataRoute.Sitemap = []
  try {
    const insights: InsightSlug[] = await sanityClient.fetch(
      `*[_type == "insight"]{ slug, _updatedAt }`
    )
    blogPosts = insights
      .filter((post) => post?.slug?.current)
      .map((post) => ({
        url: `${baseUrl}/insights/${post.slug!.current}`,
        lastModified: post._updatedAt ? new Date(post._updatedAt) : now,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }))
  } catch (error) {
    console.error('Error fetching insights for sitemap:', error)
  }

  // Dynamic job positions from Sanity
  let jobPages: MetadataRoute.Sitemap = []
  try {
    const jobs: JobSlug[] = await sanityClient.fetch(
      `*[_type == "jobPosition" && isActive == true]{ _id, _updatedAt }`
    )
    jobPages = jobs
      .filter((job) => job?._id)
      .map((job) => ({
        url: `${baseUrl}/careers/${job._id}`,
        lastModified: job._updatedAt ? new Date(job._updatedAt) : now,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }))
  } catch (error) {
    console.error('Error fetching jobs for sitemap:', error)
  }

  return [...corePages, ...verticalPages, ...solutionPages, ...businessPages, ...blogPosts, ...jobPages]
}
