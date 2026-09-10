'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Sparkles, Target, Users, Zap, CheckCircle, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Adaptive Learning Paths',
    description: 'AI dynamically adjusts content difficulty and sequence based on individual learner performance and preferences.',
    color: 'bg-primary',
  },
  {
    icon: Sparkles,
    title: 'Personalized Recommendations',
    description: 'Machine learning algorithms curate relevant courses, resources, and micro-learning modules for each user.',
    color: 'bg-primary-dark',
  },
  {
    icon: Target,
    title: 'Skill Gap Analysis',
    description: 'Identify and bridge competency gaps with precision-targeted learning interventions.',
    color: 'bg-accent',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track learning progress, engagement metrics, and ROI with comprehensive dashboards.',
    color: 'bg-accent-dark',
  },
]

const benefits = [
  'Accelerate time-to-competency by 40%',
  'Increase learner engagement and completion rates',
  'Reduce training costs through efficiency',
  'Enable continuous learning culture',
  'Provide actionable workforce insights',
  'Scale personalized learning across organizations',
]

export default function AILearningPlatformPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-neutral-900 text-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-4 py-1.5 bg-white/20 text-white font-medium text-sm rounded-full">
                AI Learning Platform
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900/40 text-white font-semibold text-sm rounded-full border border-white/25">
                Beta
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Transform learning with{' '}
              <span className="text-white/90 underline decoration-white/30 underline-offset-4">intelligent automation</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Our AI-powered learning platform delivers personalized, adaptive learning experiences that evolve with your workforce. Harness the power of machine learning to create truly intelligent education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary-darker font-semibold rounded-xl hover:bg-neutral-200 transition-all shadow-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                View Platform Details
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Intelligent Features
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Powered by advanced AI to deliver learning experiences that adapt and evolve
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features?.map((feature, i) => (
              <motion.div
                key={feature?.title ?? `feature-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 ${feature?.color ?? 'bg-primary'} rounded-xl flex items-center justify-center mb-4`}>
                  {feature?.icon && <feature.icon className="w-7 h-7 text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature?.title ?? ''}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{feature?.description ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Learning Intelligence Infrastructure Illustration */}
      <section className="py-16 bg-neutral-50 overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg bg-neutral-900"
          >
            {/* Image - full width on all devices */}
            <div className="relative">
              <Image
                src="/images/illustrations/learning_intel_infra.jpg"
                alt="Intelligent learning infrastructure connecting learning, skills, and jobs"
                width={2752}
                height={1536}
                className="w-full h-auto"
              />
              {/* Desktop overlay - hidden on mobile */}
              <div className="hidden md:flex absolute inset-0 items-end justify-end">
                <div className="w-full bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent p-8 lg:p-12">
                  <div className="max-w-2xl ml-auto text-right">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                      The Intelligent Backbone for Learning
                    </h3>
                    <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                      Our AI-driven infrastructure connects learning to skills to jobs—powering 
                      governments, enterprises, and institutions at scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile text - shown below image */}
            <div className="md:hidden p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                The Intelligent Backbone for Learning
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Our AI-driven infrastructure connects learning to skills to jobs—powering 
                governments, enterprises, and institutions at scale.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-neutral-100 text-primary-darker font-medium text-sm rounded-full mb-4">
                Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Drive measurable outcomes
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Organizations using our AI Learning Platform experience significant improvements in learning efficiency, engagement, and business impact.
              </p>
              <ul className="space-y-3">
                {benefits?.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {benefit ?? ''}
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
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-display text-3xl font-bold text-neutral-900">40%</p>
                      <p className="text-neutral-600">Faster skill acquisition</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-display text-3xl font-bold text-neutral-900">85%</p>
                      <p className="text-neutral-600">Completion rate improvement</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary-dark rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-display text-3xl font-bold text-neutral-900">3x</p>
                      <p className="text-neutral-600">ROI on training investment</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Ready to transform your learning experience?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Discover how our AI Learning Platform can accelerate workforce development in your organization
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
