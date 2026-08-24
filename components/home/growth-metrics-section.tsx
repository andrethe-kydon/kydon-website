'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Target, Clock, Award } from 'lucide-react'

const metrics = [
  {
    icon: TrendingUp,
    value: '67%',
    label: 'Tech Revenue',
    subtext: 'of total revenue from technology products',
  },
  {
    icon: Target,
    value: '40%',
    label: 'Faster Competency',
    subtext: 'average time-to-skill improvement',
  },
  {
    icon: Clock,
    value: '3x',
    label: 'Completion Rate',
    subtext: 'increase in learning engagement',
  },
  {
    icon: Award,
    value: '12+',
    label: 'Years Experience',
    subtext: 'since founding in 2012',
  },
]

const investors = [
  'Backed by strategic investors',
  'Multiple successful acquisitions',
  'Revenue-generating business',
  'IPO-ready fundamentals',
]

export function GrowthMetricsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm rounded-full mb-4">
            Growth & Performance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Built for <span className="gradient-text">Sustainable Growth</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Proven track record of delivering measurable results for enterprises
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-neutral-200/50 text-center border border-neutral-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold text-neutral-900 mb-1">
                {metric.value}
              </div>
              <div className="font-semibold text-neutral-700 mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-neutral-500">
                {metric.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Investment Highlights
              </h3>
              <ul className="space-y-3">
                {investors.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-300">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-flex flex-col items-center md:items-end gap-2">
                <span className="text-5xl md:text-6xl font-bold text-white">
                  $30M+
                </span>
                <span className="text-neutral-400">
                  FY26 Projected Revenue
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
