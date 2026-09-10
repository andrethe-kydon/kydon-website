'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Handshake, Code, Layers, Globe, Rocket } from 'lucide-react'

const partnerTypes = [
  { icon: Code, title: 'Technology Partners', description: 'Integrate our AI Learning Engine into your platform via API licensing.' },
  { icon: Layers, title: 'Content Partners', description: 'Enhance your content with AI-powered personalization and delivery.' },
  { icon: Globe, title: 'Channel Partners', description: 'Expand your offerings with Kydon solutions in your market.' },
  { icon: Rocket, title: 'Strategic Partners', description: 'Join us in building the future of AI-powered learning.' },
]

export default function PartnersPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary/5">
        <div className="max-w-container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Handshake className="w-7 h-7 text-primary-dark" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Partner <span className="gradient-text">Program</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Join the Kydon ecosystem and help shape the future of AI-powered learning. Whether you\'re a technology provider, content creator, or market leader, there\'s a partnership opportunity for you.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all shadow-lg shadow-primary/25">
              Become a Partner <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Partnership Opportunities</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes?.map((type, i) => (
              <motion.div key={type?.title ?? `type-${i}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-neutral-50 rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {type?.icon && <type.icon className="w-6 h-6 text-primary-dark" />}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{type?.title ?? ''}</h3>
                <p className="text-neutral-600 text-sm">{type?.description ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s build together</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">Join our growing ecosystem of partners shaping the future of workforce learning</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all">
            Start the Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
