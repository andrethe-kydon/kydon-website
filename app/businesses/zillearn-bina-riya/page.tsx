'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, BookOpen, Building2, Heart, Globe } from 'lucide-react'

const focuses = [
  { icon: Users, title: 'Community Development', description: 'Programs designed for community upliftment and skill building.' },
  { icon: BookOpen, title: 'Vocational Training', description: 'Practical skills training for employability and entrepreneurship.' },
  { icon: Building2, title: 'Corporate Programs', description: 'Customized enterprise solutions for Indonesian businesses.' },
  { icon: Heart, title: 'Social Impact', description: 'Committed to making quality education accessible to all.' },
]

export default function ZillearnBinaRiyaPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary/5">
        <div className="max-w-container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-neutral-100 text-primary-darker font-medium text-sm rounded-full mb-4">
              Kydon Business
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Zillearn <span className="gradient-text">Bina Riya</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Our Indonesian learning solutions division. Zillearn Bina Riya brings world-class AI-powered learning to Indonesia, serving enterprises, communities, and individuals across the archipelago.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all shadow-lg shadow-primary/25">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2 px-4 py-3.5 bg-white rounded-xl border border-neutral-200">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-neutral-700 font-medium">Indonesia Operations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Focus Areas</h2>
            <p className="text-neutral-600">Tailored solutions for the Indonesian market</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focuses?.map((focus, i) => (
              <motion.div key={focus?.title ?? `focus-${i}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-neutral-50 rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {focus?.icon && <focus.icon className="w-6 h-6 text-primary-dark" />}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{focus?.title ?? ''}</h3>
                <p className="text-neutral-600 text-sm">{focus?.description ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary-darker text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with us in Indonesia</h2>
          <p className="text-white max-w-xl mx-auto mb-8">Bring world-class AI learning solutions to your Indonesian organization</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-darker font-semibold rounded-xl hover:bg-neutral-200 hover:shadow-lg transition-all">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
