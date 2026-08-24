'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, TrendingUp, Globe, Users, Award } from 'lucide-react'

const differentiators = [
  {
    icon: Zap,
    title: 'Agentic AI Architecture',
    description: 'Autonomous agents that learn, adapt, and optimize learning pathways without manual intervention.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 compliant with data residency options. Trusted by government agencies and Fortune 500 companies.',
  },
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: '40% faster time-to-competency. 3x increase in learning completion rates. Measurable business impact.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Supporting 100K+ learners across 10 countries with multi-language and localization support.',
  },
  {
    icon: Users,
    title: 'Deep Industry Expertise',
    description: '12+ years of L&D experience. Team includes former leaders from Shell, Starhub, and government agencies.',
  },
  {
    icon: Award,
    title: 'Award-Winning Platform',
    description: 'Recognized leader in AI-powered learning technology with multiple industry accolades.',
  },
]

export function WhyKydonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            The <span className="gradient-text">Kydon Advantage</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            What sets us apart in the enterprise learning landscape
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-neutral-50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all border border-transparent hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
