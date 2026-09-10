'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Handshake } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-neutral-900 rounded-3xl p-10 md:p-16 text-center"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Build an AI-ready workforce
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
              Transform how your organization learns, adapts, and thrives in the AI era
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-xl hover:bg-neutral-200 transition-all shadow-lg"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/solutions/partners"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                <Handshake className="w-5 h-5" />
                Partner with Kydon
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
