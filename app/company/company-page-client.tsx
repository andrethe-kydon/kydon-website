'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

interface Leader {
  name: string
  role: string
  bio: string
  imageUrl?: string
  order?: number
}

interface CompanyContent {
  heroHeadline: string
  heroHighlight: string
  heroDescription: string
  missionTitle: string
  missionDescription: string
  visionTitle: string
  visionDescription: string
  teamSectionTitle: string
}

interface CompanyPageClientProps {
  companyContent: CompanyContent
  leaders: Leader[]
}

// Leader Card Component with expandable bio
function LeaderCard({ leader, index }: { leader: Leader; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const bioLength = leader?.bio?.length ?? 0
  const shouldTruncate = bioLength > 150

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-neutral-100 flex flex-col"
    >
      {/* Header: Photo + Name/Role */}
      <div className="flex items-start gap-4 mb-4">
        {leader?.imageUrl ? (
          <div className="w-20 h-20 rounded-full overflow-hidden relative flex-shrink-0 border-2 border-primary/10">
            <Image
              src={leader.imageUrl}
              alt={leader.name || 'Team member'}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="font-display text-3xl font-bold text-primary">
              {leader?.name?.charAt?.(0) ?? ''}
            </span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-neutral-900 leading-tight">{leader?.name ?? ''}</h3>
          <p className="text-primary font-medium text-sm mt-1">{leader?.role ?? ''}</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.p
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-neutral-600 text-sm leading-relaxed"
            >
              {leader?.bio ?? ''}
            </motion.p>
          ) : (
            <motion.p
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-neutral-600 text-sm leading-relaxed line-clamp-3"
            >
              {leader?.bio ?? ''}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Read More / Show Less Button */}
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:text-primary-dark transition-colors self-start group"
        >
          {isExpanded ? (
            <>
              Show less
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </>
          ) : (
            <>
              Read more
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </>
          )}
        </button>
      )}
    </motion.div>
  )
}

export default function CompanyPageClient({ companyContent, leaders }: CompanyPageClientProps) {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary/5">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {companyContent.heroHeadline}{' '}
              <span className="gradient-text">{companyContent.heroHighlight}</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              {companyContent.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm rounded-full mb-4">
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Built on Collaboration & Innovation
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                At Kydon, we believe in the power of diverse perspectives coming together. 
                Our team combines deep expertise in education, technology, and AI to create 
                solutions that truly transform how people learn and grow.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We foster an environment where curiosity is celebrated, ideas are shared openly, 
                and every team member contributes to our mission of empowering individuals and 
                organisations worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero/culture-collage.png"
                  alt="Kydon team collaborating and working together"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {companyContent.teamSectionTitle}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Experienced leaders driving the future of AI-powered learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders?.map((leader, i) => (
              <LeaderCard key={leader?.name ?? `leader-${i}`} leader={leader} index={i} />
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">{companyContent.missionTitle}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {companyContent.missionDescription}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">{companyContent.visionTitle}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {companyContent.visionDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 md:p-16 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join us in transforming learning</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Partner with Kydon to build the AI-ready workforce of the future
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-xl hover:bg-neutral-200 hover:shadow-lg transition-all"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
