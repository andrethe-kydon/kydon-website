'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, GraduationCap, Landmark, Briefcase, Users, Globe, CheckCircle } from 'lucide-react'

const verticals = [
  {
    icon: Building2,
    title: 'Enterprise',
    description: 'Transform corporate learning with AI-driven personalization. Scale training across global teams while ensuring consistent quality and measurable outcomes.',
    link: '/verticals/enterprise',
    features: ['Custom learning paths', 'Skills analytics', 'Integration ready'],
    color: 'bg-primary',
  },
  {
    icon: Landmark,
    title: 'Government',
    description: 'Empower public sector workforce development with secure, compliant AI learning solutions designed for government agencies and civil service.',
    link: '/verticals/government',
    features: ['Compliance built-in', 'Secure deployment', 'Scale for agencies'],
    color: 'bg-primary-dark',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Revolutionize educational institutions with adaptive learning technology that personalizes education for every student.',
    link: '/verticals/education',
    features: ['Student-centric AI', 'Curriculum alignment', 'Assessment tools'],
    color: 'bg-accent',
  },
  {
    icon: Briefcase,
    title: 'Partners',
    description: 'Join our ecosystem of partners to integrate AI-powered learning capabilities into your solutions and expand your market reach.',
    link: '/verticals/partners',
    features: ['API access', 'White-label options', 'Revenue share'],
    color: 'bg-accent-dark',
  },
]

const stats = [
  { value: '100K+', label: 'Active Learners', icon: Users },
  { value: '100+', label: 'Organizations', icon: Building2 },
  { value: '10', label: 'Countries', icon: Globe },
]

export default function VerticalsPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 via-primary-dark to-neutral-900 text-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent font-medium text-sm rounded-full mb-4">
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI learning solutions for{' '}
              <span className="text-accent">every vertical</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Tailored AI-powered learning experiences designed for the unique challenges and requirements of your industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12">
            {stats?.map((stat, i) => (
              <motion.div
                key={stat?.label ?? `stat-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  {stat?.icon && <stat.icon className="w-7 h-7 text-primary-dark" />}
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-neutral-900">{stat?.value ?? ''}</p>
                  <p className="text-neutral-600">{stat?.label ?? ''}</p>
                </div>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Solutions by Industry
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our specialized AI learning solutions designed for your sector
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {verticals?.map((vertical, i) => (
              <motion.div
                key={vertical?.title ?? `vertical-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={vertical?.link ?? '#'}
                  className="block bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-lg hover:border-primary/20 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 ${vertical?.color ?? 'bg-primary'} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {vertical?.icon && <vertical.icon className="w-7 h-7 text-white" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                        {vertical?.title ?? ''}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {vertical?.description ?? ''}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {vertical?.features?.map((feature, j) => (
                      <span
                        key={j}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-primary-dark" />
                        {feature ?? ''}
                      </span>
                    )) ?? []}
                  </div>
                  <div className="flex items-center gap-2 mt-6 text-primary-dark font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure which solution is right for you?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Our team can help you identify the perfect AI learning solution for your organization's unique needs
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all shadow-lg shadow-primary/25"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
