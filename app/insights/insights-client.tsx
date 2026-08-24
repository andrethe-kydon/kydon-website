'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, TrendingUp, Cpu, Users, BookOpen, FileText } from 'lucide-react'

interface InsightData {
  _id: string
  slug?: { current: string }
  category?: string
  title: string
  excerpt?: string
  publishedAt?: string
  readTime?: string
  imageUrl?: string
  isPlaceholder?: boolean
}

interface InsightsClientWrapperProps {
  insights: InsightData[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Market Trends': TrendingUp,
  'AI Trends': TrendingUp,
  'Technology': Cpu,
  'Product Update': Cpu,
  'Case Study': Users,
  'Research': BookOpen,
  'Thought Leadership': BookOpen,
  'Industry News': TrendingUp,
}

function formatDate(dateString?: string): string {
  if (!dateString) return ''
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return ''
  }
}

export default function InsightsClientWrapper({ insights }: InsightsClientWrapperProps) {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary/5">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Insights & <span className="gradient-text">News</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Thought leadership, research, and updates from the forefront of AI-powered learning and workforce transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          {insights && insights.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {insights.map((insight, i) => {
                const IconComponent = iconMap[insight?.category || 'AI Trends'] || TrendingUp
                const slug = insight?.slug?.current || insight?._id
                const isPlaceholder = insight?.isPlaceholder || false
                
                return (
                  <motion.article
                    key={insight?._id ?? `insight-${i}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-neutral-100 card-hover"
                  >
                    {insight?.imageUrl && !isPlaceholder && (
                      <Link href={`/insights/${slug}`}>
                        <div className="relative aspect-video bg-neutral-100">
                          <Image
                            src={insight.imageUrl}
                            alt={insight.title || 'Insight image'}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </Link>
                    )}
                    {isPlaceholder && (
                      <div className="relative aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                        <span className="px-4 py-2 bg-neutral-800/80 text-white text-sm font-medium rounded-full">
                          Coming Soon
                        </span>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                          {insight?.category ?? 'Article'}
                        </span>
                      </div>
                      {isPlaceholder ? (
                        <h2 className="text-xl font-bold text-neutral-900 mb-3">
                          {insight?.title ?? ''}
                        </h2>
                      ) : (
                        <Link href={`/insights/${slug}`}>
                          <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                            {insight?.title ?? ''}
                          </h2>
                        </Link>
                      )}
                      <p className="text-neutral-600 mb-4 leading-relaxed">
                        {insight?.excerpt ?? ''}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-neutral-500">
                          {insight?.publishedAt && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(insight.publishedAt)}
                            </span>
                          )}
                          {insight?.readTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {insight.readTime}
                            </span>
                          )}
                        </div>
                        {isPlaceholder ? (
                          <span className="inline-flex items-center gap-1 text-neutral-400 font-semibold text-sm">
                            Coming Soon
                          </span>
                        ) : (
                          <Link
                            href={`/insights/${slug}`}
                            className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all"
                          >
                            Read more
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-600 mb-2">No insights yet</h3>
              <p className="text-neutral-500">Check back soon for our latest articles and updates.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 md:p-16 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay ahead of the curve</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Get the latest insights on AI-powered learning delivered to your inbox
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-neutral-100 transition-all"
            >
              Subscribe to Updates
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
