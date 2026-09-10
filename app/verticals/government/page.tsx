'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Landmark, Shield, Users, BookOpen, BarChart3, CheckCircle, Award, Globe } from 'lucide-react'

const clients = [
  'Ministry of Social and Family Development (MSF)',
  'Majlis Ugama Islam Singapura (MUIS)',
  'Ministry of Defence Singapore',
  'Singapore Armed Forces (SAF)',
  'Civil Service College Singapore',
]

const benefits = [
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security and compliance built-in to meet stringent government requirements and data protection standards.',
  },
  {
    icon: Users,
    title: 'Large-Scale Deployment',
    description: 'Purpose-built LMS for the public sector, enabling agencies to easily develop, deliver, and manage training programs across departments.',
  },
  {
    icon: BookOpen,
    title: 'Public Service Excellence',
    description: 'Enhance civil service capabilities with tailored learning solutions that support workforce development initiatives.',
  },
  {
    icon: BarChart3,
    title: 'Progress Monitoring',
    description: 'Centralized platform for managing and monitoring employee learning and development progress across agencies.',
  },
]

const solutions = [
  'Learning Management Systems for public sector',
  'Custom application development',
  'System integration services',
  'AR/VR and gamified e-learning content',
  'Learning consultancy and needs analysis',
  'Program evaluation services',
]

export default function GovernmentVerticalPage() {
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
              Government Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Empowering public sector{' '}
              <span className="text-primary">workforce transformation</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Kydon has been a trusted partner for Singapore government ministries and statutory boards, delivering secure, scalable learning solutions that enhance civil service capabilities and drive public sector excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                View Our Platform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Trusted by Government Agencies</h2>
            <p className="text-neutral-600">Our proven track record with Singapore's public sector</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {clients?.map((client, i) => (
              <motion.div
                key={client ?? `client-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-3 bg-neutral-50 rounded-full border border-neutral-200 text-neutral-700 font-medium text-sm"
              >
                {client ?? ''}
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
              Purpose-Built for Public Sector
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our end-to-end LMS and learning solutions are specifically designed for the unique needs of government agencies and statutory boards.
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
                  {benefit?.icon && <benefit.icon className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{benefit?.title ?? ''}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit?.description ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Leadership Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm rounded-full mb-4">
                Leadership Experience
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Deep government sector expertise
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Our founder David Yeo was instrumental in the Singapore Armed Forces' (SAF) digital learning transformation initiative under the LEARNet program. This experience, combined with our leadership team's background with agencies like the Monetary Authority of Singapore, ensures we understand the unique challenges of public sector learning.
              </p>
              <ul className="space-y-3">
                {solutions?.map((solution, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {solution ?? ''}
                  </li>
                )) ?? []}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-neutral-900 to-primary-dark rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Landmark className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">SAF LEARNet Program</p>
                      <p className="text-sm text-white/70">Led digital learning transformation for Singapore Armed Forces</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">EduTech Alliance for Action</p>
                      <p className="text-sm text-white/70">Participated in Singapore Government's workforce initiative</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Singapore Together</p>
                      <p className="text-sm text-white/70">Developed Employment Readiness Platform with SkillsFuture SG</p>
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
              Partner with a proven government sector expert
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Let us help you build a world-class learning ecosystem for your agency
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-xl hover:bg-neutral-200 transition-all shadow-lg"
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
