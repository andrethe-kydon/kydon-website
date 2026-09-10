'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Handshake, Code, Globe, Zap, Users, Building2, CheckCircle, Sparkles } from 'lucide-react'

const partnerTypes = [
  {
    icon: Code,
    title: 'Technology Partners',
    description: 'Integrate our AI Learning Engine APIs into your platforms. Access domain-specific learning LLM, skills graph, and decision models.',
  },
  {
    icon: Building2,
    title: 'System Integrators',
    description: 'Partner with us to deliver comprehensive learning transformation projects for enterprise and government clients.',
  },
  {
    icon: Users,
    title: 'Content Partners',
    description: 'Enhance your learning content with our AI-powered delivery and personalization capabilities.',
  },
  {
    icon: Globe,
    title: 'Regional Partners',
    description: 'Expand into Southeast Asian markets with our proven learning solutions and local expertise.',
  },
]

const apiFeatures = [
  'Domain-specific learning LLM',
  'Skills graph integration',
  'Decision models powering agents',
  'Competency mapping APIs',
  'Behavioral insights',
  'Personalized pathway generation',
]

const alliances = [
  { name: 'UnConstrainED', description: 'AI learning consultancy alliance for Asia' },
  { name: 'SMU Academy', description: 'Employment Readiness Platform consortium' },
  { name: 'SkillsFuture SG', description: 'National skills development initiative' },
  { name: 'Teamie', description: 'Acquired online learning platform (2025)' },
  { name: 'Glean Asia', description: 'Digital experience agency partner (2025)' },
]

export default function PartnersVerticalPage() {
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
              Partner Ecosystem
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Join the future of{' '}
              <span className="text-primary">AI-powered learning</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Kydon's vision is for third-party content and learning platform developers to directly leverage our specialized AI Learning Engine—rather than generic LLMs—for domain-specific and highly relevant learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/ai-learning-engine"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Explore AI Engine
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Multiple ways to partner with Kydon and expand your capabilities in AI-powered learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes?.map((partner, i) => (
              <motion.div
                key={partner?.title ?? `partner-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                  {partner?.icon && <partner.icon className="w-7 h-7 text-white" />}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{partner?.title ?? ''}</h3>
                <p className="text-neutral-600 leading-relaxed">{partner?.description ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* API Licensing */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-neutral-100 text-primary-darker font-medium text-sm rounded-full mb-4">
                API Licensing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Built for ecosystem integration
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Our AI Learning Engine offers better relevance than generic LLMs, improved coaching and pathway decisions, and compounding improvement from real-world signals.
              </p>
              <ul className="space-y-3">
                {apiFeatures?.map((feature, i) => (
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
              <div className="bg-neutral-900 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-2 text-neutral-500 text-sm">API Example</span>
                </div>
                <pre className="text-sm text-neutral-300 font-mono overflow-x-auto">
{`// Kydon AI Learning Engine API
const response = await kydon.engine({
  endpoint: '/v1/learning-path',
  data: {
    role: 'sales_manager',
    current_skills: ['negotiation', 'crm'],
    target_competencies: ['ai_tools'],
    context: 'enterprise_b2b'
  }
});

// Returns personalized learning path
console.log(response.pathway);`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Alliances */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Strategic Alliances & Acquisitions
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Growing our ecosystem through strategic partnerships and acquisitions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alliances?.map((alliance, i) => (
              <motion.div
                key={alliance?.name ?? `alliance-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-50 rounded-xl p-6 border border-neutral-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-primary-dark" />
                  </div>
                  <h3 className="font-bold text-neutral-900">{alliance?.name ?? ''}</h3>
                </div>
                <p className="text-neutral-600 text-sm">{alliance?.description ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to partner with Kydon?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Let's explore how we can work together to transform learning
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-darker font-semibold rounded-xl hover:bg-neutral-200 transition-all shadow-lg"
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
