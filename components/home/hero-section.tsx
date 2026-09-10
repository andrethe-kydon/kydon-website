'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Building2, Globe } from 'lucide-react'

interface HeroContent {
  headline: string
  highlightedText: string
  subheadline: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
  stats: {
    users: string
    customers: string
    countries: string
  }
  heroImage?: string
}

interface HeroSectionProps {
  content?: HeroContent
}

const defaultContent: HeroContent = {
  headline: 'Enterprise Data Intelligence & Workforce Solutions for',
  highlightedText: 'Modern Businesses',
  subheadline: 'The Agentic AI Learning stack that delivers skills and elevates performance outcomes for enterprises across Southeast Asia and Australia',
  primaryButtonText: 'Contact Us',
  primaryButtonLink: '/contact',
  secondaryButtonText: 'Explore the Intelligence Stack',
  secondaryButtonLink: '/platform',
  stats: {
    users: '100K+',
    customers: '100+',
    countries: '10',
  },
}

export function HeroSection({ content }: HeroSectionProps) {
  const data = {
    ...defaultContent,
    ...content,
    stats: {
      ...defaultContent.stats,
      ...(content?.stats || {}),
    },
  }
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              {data.headline}{' '}
              <span className="gradient-text">{data.highlightedText}</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
              {data.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href={data.primaryButtonLink}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              >
                {data.primaryButtonText}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={data.secondaryButtonLink}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary-darker font-semibold rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                {data.secondaryButtonText}
              </Link>
            </div>

            {/* Micro-proof chips */}
            <div>
              <p className="text-sm font-semibold text-primary-dark uppercase tracking-wide mb-3">Enabling AI Learning For</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-neutral-100">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-neutral-700">{data.stats.users} Users</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-neutral-100">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-neutral-700">{data.stats.customers} Customers</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-neutral-100">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-neutral-700">{data.stats.countries} Countries</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={data.heroImage || "/images/hero/kydon-learners.jpg"}
                alt="People collaborating and learning together"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
