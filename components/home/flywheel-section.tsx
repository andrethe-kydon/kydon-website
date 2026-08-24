'use client'

import { motion } from 'framer-motion'
import { RefreshCw, Users, LineChart, Compass, TrendingUp } from 'lucide-react'

const steps = [
  { icon: Users, label: 'More Users', color: 'bg-primary' },
  { icon: LineChart, label: 'Better Signals', color: 'bg-primary-light' },
  { icon: Compass, label: 'Smarter Paths', color: 'bg-accent' },
  { icon: TrendingUp, label: 'Stronger Outcomes', color: 'bg-accent-dark' },
]

export function FlywheelSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The compounding data advantage
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our virtuous cycle creates powerful network effects and a defensible moat
          </p>
        </motion.div>

        <div className="relative max-w-xl mx-auto">
          {/* Center icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center z-10 shadow-2xl"
          >
            <RefreshCw className="w-10 h-10 text-primary" />
          </motion.div>

          {/* Flywheel ring */}
          <div className="relative aspect-square">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="40"
                strokeDasharray="10 5"
              />
            </svg>

            {/* Steps positioned around the circle */}
            {steps?.map((step, i) => {
              const angle = (i * 90 - 45) * (Math.PI / 180)
              const radius = 150
              const x = 200 + Math.cos(angle) * radius
              const y = 200 + Math.sin(angle) * radius

              return (
                <motion.div
                  key={step?.label ?? `step-${i}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${(x / 400) * 100}%`, top: `${(y / 400) * 100}%` }}
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 ${step?.color ?? 'bg-primary'} rounded-xl flex items-center justify-center shadow-lg`}>
                      {step?.icon && <step.icon className="w-7 h-7 text-white" />}
                    </div>
                    <span className="mt-2 text-sm font-medium text-white/90 whitespace-nowrap">
                      {step?.label ?? ''}
                    </span>
                  </div>
                </motion.div>
              )
            }) ?? []}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-white/80 font-medium"
        >
          More users → Better data → Smarter paths → More effective learning → More users
        </motion.p>
      </div>
    </section>
  )
}
