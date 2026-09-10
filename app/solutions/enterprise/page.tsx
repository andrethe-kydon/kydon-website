'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Target, TrendingUp, Users, Shield, Zap } from 'lucide-react'

const benefits = [
  { icon: Target, title: 'Skills Alignment', description: 'Connect learning directly to business objectives and strategic priorities.' },
  { icon: TrendingUp, title: 'Performance Outcomes', description: 'Drive measurable improvements in workforce capability and productivity.' },
  { icon: Users, title: 'Scalable Solution', description: 'Deploy across thousands of employees with consistent quality.' },
  { icon: Shield, title: 'Enterprise Security', description: 'SOC2 compliant with enterprise-grade data protection.' },
]

export default function EnterprisePage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary/5">
        <div className="max-w-container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-primary-dark" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Enterprise <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Transform workforce development with AI-powered learning that aligns skills to business outcomes. Trusted by Fortune 500 companies and global organizations.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all shadow-lg shadow-primary/25">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits?.map((benefit, i) => (
              <motion.div key={benefit?.title ?? `benefit-${i}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-neutral-50 rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {benefit?.icon && <benefit.icon className="w-6 h-6 text-primary-dark" />}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{benefit?.title ?? ''}</h3>
                <p className="text-neutral-600 text-sm">{benefit?.description ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary-darker text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your enterprise?</h2>
          <p className="text-white max-w-xl mx-auto mb-8">Join 100+ enterprises using Kydon to build AI-ready workforces</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-darker font-semibold rounded-xl hover:bg-neutral-200 hover:shadow-lg transition-all">
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
