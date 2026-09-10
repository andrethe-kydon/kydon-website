'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Landmark, Shield, Globe, Users, Scale } from 'lucide-react'

const features = [
  { icon: Shield, title: 'Sovereign Data', description: 'Data residency and compliance with government security requirements.' },
  { icon: Globe, title: 'Population Scale', description: 'Proven deployment across national workforces and civil services.' },
  { icon: Users, title: 'Citizen Reskilling', description: 'Programs designed for workforce transformation at national level.' },
  { icon: Scale, title: 'Policy Alignment', description: 'Solutions that support national skills frameworks and policies.' },
]

export default function GovernmentPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary/5">
        <div className="max-w-container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Landmark className="w-7 h-7 text-primary-dark" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Government <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Trusted by ministries and government agencies to deliver AI-powered learning at national scale. From defense to education, we power workforce transformation across the public sector.
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
            {features?.map((feature, i) => (
              <motion.div key={feature?.title ?? `feature-${i}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-neutral-50 rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {feature?.icon && <feature.icon className="w-6 h-6 text-primary-dark" />}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature?.title ?? ''}</h3>
                <p className="text-neutral-600 text-sm">{feature?.description ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by governments worldwide</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">Including Singapore\'s Ministry of Defence, Ministry of Education, and Ministry of Home Affairs</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all">
            Schedule a Briefing <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
