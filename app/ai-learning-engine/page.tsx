'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Cpu, GitBranch, Bot, BarChart3, Zap, CheckCircle, FlaskConical } from 'lucide-react'
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/json-ld'

const architectureSteps = [
  { icon: GitBranch, label: 'Skills Graph', color: 'bg-primary' },
  { icon: Cpu, label: 'Learning LLM', color: 'bg-primary-dark' },
  { icon: Bot, label: 'Agents', color: 'bg-accent' },
  { icon: BarChart3, label: 'Dashboards/APIs', color: 'bg-accent-dark' },
]

const differentiators = [
  'Better relevance than generic LLMs',
  'Improved coaching / pathway decisions',
  'Compounding improvement from real-world signals',
  'Deep understanding of learning context and pedagogy',
]

export default function AILearningEnginePage() {
  return (
    <>
      <ServiceSchema
        name="Kydon AI Learning Engine"
        description="Domain-specific LLM trained for pedagogy, competency maps, and behavioral insights. The intelligence core for learning and workforce performance."
        url="https://kydongrp.com/ai-learning-engine"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://kydongrp.com' },
          { name: 'AI Learning Engine', url: 'https://kydongrp.com/ai-learning-engine' },
        ]}
      />
      <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 via-primary-dark to-neutral-900 text-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent font-medium text-sm rounded-full">
                Intelligence Layer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 text-white font-semibold text-sm rounded-full border border-white/25">
                <FlaskConical className="w-4 h-4" />
                Beta
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The intelligence core for learning and{' '}
              <span className="text-accent">workforce performance</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Domain-specific LLM trained for pedagogy, competency maps, and behavioral insights. The intelligent backbone empowering personalized learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25"
              >
                Partner / License
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beta Banner */}
      <section className="py-6 bg-neutral-200 border-y border-neutral-300">
        <div className="max-w-container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 text-neutral-800">
            <FlaskConical className="w-5 h-5" />
            <p className="font-medium">
              AI Learning Engine is currently in Beta. We are working with select partners to refine and expand our capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Intelligence Architecture
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              A comprehensive stack powering autonomous learning and workforce insights
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {architectureSteps?.map((step, i) => (
              <motion.div
                key={step?.label ?? `step-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-20 h-20 ${step?.color ?? 'bg-primary'} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {step?.icon && <step.icon className="w-10 h-10 text-white" />}
                  </div>
                  <span className="mt-3 font-semibold text-neutral-900 text-center">
                    {step?.label ?? ''}
                  </span>
                </div>
                {i < (architectureSteps?.length ?? 0) - 1 && (
                  <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-neutral-300 to-neutral-200 mx-4" />
                )}
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
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm rounded-full mb-4">
                API Licensing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Built for ecosystem integration
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Our vision is for third-party content and learning platform developers to directly call this specialized engine, rather than generic LLMs, for domain-specific and highly relevant responses.
              </p>
              <ul className="space-y-3">
                {['Pedagogy-aware responses', 'Competency mapping', 'Behavioral insights', 'Skills graph integration']?.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-700">
                    <Zap className="w-5 h-5 text-accent" />
                    {item ?? ''}
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

      {/* Differentiation */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why domain-specific matters
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators?.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-6 shadow-sm border border-neutral-100"
              >
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <p className="text-neutral-900 font-medium">{item ?? ''}</p>
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
              Talk to us about licensing & partnerships
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Integrate the power of domain-specific AI into your learning ecosystem
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  )
}
