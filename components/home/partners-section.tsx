'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Handshake } from 'lucide-react'

const partners = [
  { name: 'SkillsFuture Singapore', type: 'Government' },
  { name: 'SMU Academy', type: 'Education' },
  { name: 'UnConstrainED', type: 'Strategic' },
  { name: 'Teamie (Acquired)', type: 'Acquisition' },
]

const accreditations = [
  'SkillsFuture Singapore Approved',
  'SOC 2 Type II Compliant',
  'PDPA Compliant',
  'ISO 27001 Aligned',
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-neutral-50 border-y border-neutral-100">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Handshake className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Strategic Alliances & Accreditations
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Key Partners</h3>
            <div className="grid grid-cols-2 gap-3">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-neutral-200 hover:border-primary/30 transition-all"
                >
                  <p className="font-medium text-neutral-900 text-sm">{partner.name}</p>
                  <p className="text-xs text-neutral-500">{partner.type}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Accreditations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Trust & Compliance</h3>
            <div className="flex flex-wrap gap-3">
              {accreditations.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-neutral-700 border border-neutral-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
