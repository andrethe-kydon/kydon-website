'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Layers, GraduationCap, Cpu, ArrowRight } from 'lucide-react'
import { PillarData } from '@/lib/cms-content'

interface PillarsSectionProps {
  pillars?: PillarData[]
}

const defaultPillars: PillarData[] = [
  {
    label: 'Orchestration Layer',
    title: 'AI Learning Platform',
    subtitle: 'Agentic Learning OS',
    icon: 'layers',
    features: [
      'Autonomous agents orchestrate pathways & nudges',
      'Learning in the flow of work',
      'Live dashboards & administration automation',
    ],
    link: '/platform',
    status: 'live',
  },
  {
    label: 'Delivery & Signal Layer',
    title: 'AI Workforce Factory',
    subtitle: 'Skills & Credentials',
    icon: 'graduation-cap',
    features: [
      'Role-based AI tracks',
      'Credentials / Skills Passport',
      'Continuous readiness/performance signals',
    ],
    link: '/ai-workforce-factory',
    status: 'coming-soon',
  },
  {
    label: 'Intelligence Layer',
    title: 'AI Learning Engine',
    subtitle: 'The Core',
    icon: 'cpu',
    features: [
      'Domain-specific learning LLM + skills graph',
      'Decision models powering agents',
      'API licensing for ecosystem',
    ],
    link: '/ai-learning-engine',
    status: 'beta',
  },
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'layers': Layers,
  'graduation-cap': GraduationCap,
  'cpu': Cpu,
}

const statusBadges: Record<string, { label: string; className: string }> = {
  'coming-soon': {
    label: 'Coming Soon',
    className: 'bg-neutral-50 text-neutral-600',
  },
  'beta': {
    label: 'Beta',
    className: 'bg-neutral-200 text-neutral-800',
  },
  'live': {
    label: '',
    className: '',
  },
}

export function PillarsSection({ pillars }: PillarsSectionProps) {
  const data = pillars && pillars.length > 0 ? pillars : defaultPillars

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            A vertically integrated <span className="gradient-text">intelligence stack</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Three interconnected layers delivering comprehensive AI-powered workforce transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {data?.map((pillar, i) => {
            const IconComponent = iconMap[pillar?.icon || 'layers'] || Layers
            const statusInfo = pillar?.status && pillar.status !== 'live' ? statusBadges[pillar.status] : null
            
            return (
              <motion.div
                key={pillar?.title ?? `pillar-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all card-hover border border-neutral-100"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-neutral-100 text-primary-darker font-medium text-xs rounded-full">
                    {pillar?.label || `Layer ${i + 1}`}
                  </span>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-neutral-900">
                    {pillar?.title ?? ''}
                  </h3>
                  {statusInfo && (
                    <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full border border-neutral-300 ${statusInfo.className}`}>
                      {statusInfo.label}
                    </span>
                  )}
                </div>
                <p className="text-neutral-500 text-sm mb-4">{pillar?.subtitle ?? ''}</p>
                <ul className="space-y-2 mb-6">
                  {pillar?.features?.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      {feature ?? ''}
                    </li>
                  )) ?? []}
                </ul>
                <Link
                  href={pillar?.link ?? '#'}
                  className="inline-flex items-center gap-2 text-primary-dark font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Explore {pillar?.title ?? ''}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )
          }) ?? []}
        </div>
      </div>
    </section>
  )
}
