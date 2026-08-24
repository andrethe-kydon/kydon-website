'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, School, BookOpen, GraduationCap, Award, Sparkles } from 'lucide-react'

const features = [
  { icon: BookOpen, title: 'Curriculum Integration', description: 'Seamlessly integrate AI learning into existing educational frameworks.' },
  { icon: GraduationCap, title: 'Student Outcomes', description: 'Track and improve student readiness for AI-era careers.' },
  { icon: Award, title: 'Credentials', description: 'Issue verified digital credentials recognized by employers.' },
  { icon: Sparkles, title: 'Personalization', description: 'Adaptive pathways for every student\'s learning journey.' },
]

export default function EducationPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-accent/5">
        <div className="max-w-container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <School className="w-7 h-7 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Education <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Prepare students for the AI economy with cutting-edge learning experiences. From K-12 to higher education, we help institutions deliver relevant, personalized AI education.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25">
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features?.map((feature, i) => (
              <motion.div key={feature?.title ?? `feature-${i}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-neutral-50 rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  {feature?.icon && <feature.icon className="w-6 h-6 text-accent" />}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature?.title ?? ''}</h3>
                <p className="text-neutral-600 text-sm">{feature?.description ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent to-accent-dark text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with leading institutions</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">Trusted by UWC South East Asia, ERC Institute, and educational organizations globally</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-semibold rounded-xl hover:bg-neutral-100 transition-all">
            Request Information <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
