'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Zap, TrendingUp, Users, CheckCircle } from 'lucide-react'

const outcomes = [
  {
    icon: Zap,
    title: 'Accelerate Time-to-Competency',
    description: 'Reduce training time significantly with AI-powered personalized learning paths.',
  },
  {
    icon: TrendingUp,
    title: 'Boost Engagement & Completion',
    description: 'Dramatically increase learning completion rates with adaptive content delivery.',
  },
  {
    icon: Target,
    title: 'Close Skills Gaps Faster',
    description: 'Identify and address competency gaps with precision-targeted interventions.',
  },
  {
    icon: Users,
    title: 'Scale Personalized Learning',
    description: 'Deliver tailored experiences to thousands of learners simultaneously.',
  },
]

const useCases = [
  'Enterprise workforce reskilling',
  'Government agency training programs',
  'Educational institution modernization',
  'Partner ecosystem enablement',
]

export function TransformSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm rounded-full mb-4">
            Transform Your Organization
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Ready to <span className="gradient-text">Elevate Your Workforce?</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Join leading organizations using Kydon&apos;s AI-powered platform to transform how their people learn and grow
          </p>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-neutral-200/50 border border-neutral-100 hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4">
                <outcome.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">
                {outcome.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let&apos;s Discuss Your Learning Transformation
              </h3>
              <p className="text-neutral-400 mb-6">
                Whether you&apos;re looking to reskill your workforce, modernize training programs, or build AI-ready teams, we&apos;re here to help.
              </p>
              <ul className="space-y-3 mb-6">
                {useCases.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-flex flex-col items-center md:items-end gap-4">
                <p className="text-neutral-400">
                  Get a personalized consultation
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all shadow-lg shadow-primary/25"
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-sm text-neutral-500">
                  No commitment required
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
