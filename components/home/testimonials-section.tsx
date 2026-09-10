'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  imageUrl?: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Kydon's AI-powered platform transformed how we approach workforce development. The personalized learning paths increased our completion rates by 3x.",
    author: 'Learning Director',
    role: 'Head of L&D',
    company: 'Fortune 500 Enterprise',
  },
  {
    quote: "The integration was seamless, and the ROI was evident within the first quarter. Our employees are more engaged and skilled than ever.",
    author: 'HR Executive',
    role: 'Chief People Officer',
    company: 'Global Technology Firm',
  },
  {
    quote: "We've trained over 50,000 personnel using Kydon's platform. The scale and efficiency it provides is unmatched in the industry.",
    author: 'Government Official',
    role: 'Training Director',
    company: 'Singapore Government Agency',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-neutral-100 text-primary-darker font-medium text-sm rounded-full mb-4">
            Customer Success
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            See how enterprises and governments are transforming their workforce with Kydon
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all"
            >
              <Quote className="w-10 h-10 text-primary/60 mb-4" />
              <p className="text-neutral-300 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.role}</p>
                  <p className="text-sm text-neutral-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
