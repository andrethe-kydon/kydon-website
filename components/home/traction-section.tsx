'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/animated-counter'
import { Users, Building2, Globe, Cpu, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Users, value: 100, suffix: 'K+', label: 'Users' },
  { icon: Building2, value: 100, suffix: '+', label: 'Customers' },
  { icon: Globe, value: 10, suffix: '', label: 'Countries' },
]

export function TractionSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm rounded-full mb-4">
            Traction
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Accelerating towards industry leadership
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Strong foundation driving significant growth through diversified revenue streams
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats?.map((stat, i) => (
            <motion.div
              key={stat?.label ?? `stat-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm text-center card-hover"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                {stat?.icon && <stat.icon className="w-6 h-6 text-primary" />}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">
                <AnimatedCounter
                  end={stat?.value ?? 0}
                  suffix={stat?.suffix ?? ''}
                />
              </div>
              <p className="text-neutral-500 text-sm font-medium">{stat?.label ?? ''}</p>
            </motion.div>
          )) ?? []}
        </div>
      </div>
    </section>
  )
}
