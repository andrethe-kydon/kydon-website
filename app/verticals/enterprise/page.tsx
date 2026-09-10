'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Users, Brain, BarChart3, Zap, Target, CheckCircle, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: Brain,
    title: 'AI-Powered Personalization',
    description: 'Leverage AI and machine learning to create personalized adaptive learning paths that respond to individual employee performance and preferences.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insights',
    description: 'Real-time analytics and dashboards provide actionable insights into workforce capabilities, skill gaps, and training ROI.',
  },
  {
    icon: Zap,
    title: 'Rapid Knowledge Mobilization',
    description: 'Accelerate time-to-competency with our intelligent learning ecosystem that delivers the right content at the right time.',
  },
  {
    icon: Target,
    title: 'Business Goal Alignment',
    description: 'Solutions designed to maximize performance and help organizations achieve their strategic business objectives.',
  },
]

const features = [
  'Custom eLearning and scenario-based learning',
  'Immersive AR/VR training experiences',
  'Gamified learning modules',
  'Learning Management System integration',
  'Skills assessment and gap analysis',
  'Competency mapping and career pathways',
]

const stats = [
  { value: '2M+', label: 'Learners Served' },
  { value: '500K+', label: 'Hours of Learning Designed' },
  { value: '15+', label: 'Years of Experience' },
]

export default function EnterpriseVerticalPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-900 text-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/90 text-white font-medium text-sm rounded-full mb-4">
              Enterprise Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transform corporate learning with{' '}
              <span className="text-primary">AI-powered intelligence</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Kydon partners with enterprises to design and deliver learning solutions that go beyond traditional training. We support enterprise-wide digital learning transformation through our comprehensive suite of AI-driven tools and methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary-darker font-semibold rounded-xl hover:bg-neutral-200 transition-all shadow-lg"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Explore Platform
              </Link>
            </div>
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
                className="text-center"
              >
                <p className="font-display text-4xl font-bold text-primary">{stat?.value ?? ''}</p>
                <p className="text-neutral-600">{stat?.label ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Building Human Capital Through Technology
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We utilize cutting-edge technology and innovative pedagogical strategies to develop skills and knowledge, helping individuals reach their potential and contribute to organizational growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits?.map((benefit, i) => (
              <motion.div
                key={benefit?.title ?? `benefit-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {benefit?.icon && <benefit.icon className="w-7 h-7 text-primary-dark" />}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{benefit?.title ?? ''}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit?.description ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-neutral-100 text-primary-darker font-medium text-sm rounded-full mb-4">
                Comprehensive Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Enterprise-wide digital learning transformation
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Our whole systems integration approach combines people, processes, and technology—merging learning technologies, design, and consultancy with research and development to provide optimal learning solutions.
              </p>
              <ul className="space-y-3">
                {features?.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {feature ?? ''}
                  </li>
                )) ?? []}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Enterprise Clients</p>
                      <p className="text-sm text-neutral-600">Global organizations across industries</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Scalable Solutions</p>
                      <p className="text-sm text-neutral-600">From 100 to 100,000+ employees</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-dark rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">AI-Driven Outcomes</p>
                      <p className="text-sm text-neutral-600">Measurable business impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Ready to transform your enterprise learning?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Partner with Kydon to build a learning ecosystem that drives real business outcomes
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
