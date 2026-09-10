'use client'

import { motion } from 'framer-motion'
import { Zap, Database, HelpCircle, EyeOff } from 'lucide-react'

const problems = [
  {
    icon: Zap,
    title: 'Rapid Change',
    description: 'Roles, skills and career paths are changing faster than traditional L&D cycles.',
  },
  {
    icon: Database,
    title: 'Static Systems',
    description: 'Most companies run on static catalogues, generic courses, and one-size-fits-all pathways.',
  },
  {
    icon: HelpCircle,
    title: 'Overwhelmed Learners',
    description: '"What should I learn next to stay relevant?"',
  },
  {
    icon: EyeOff,
    title: 'Blind Leaders',
    description: '"Where are we strong/weak for an AI future?"',
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
            Why Now
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            The AI Shock
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Enterprises are struggling with AI transformation due to lack of AI skills & talent
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems?.map((problem, i) => (
            <motion.div
              key={problem?.title ?? `problem-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all card-hover"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                {problem?.icon && <problem.icon className="w-6 h-6 text-primary-dark" />}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {problem?.title ?? ''}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {problem?.description ?? ''}
              </p>
            </motion.div>
          )) ?? []}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-neutral-700 font-medium max-w-3xl mx-auto"
        >
          Billions spent on learning—without a system tying skills to business outcomes.
        </motion.p>
      </div>
    </section>
  )
}
