'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, BookOpen, Users, Brain, Sparkles, CheckCircle, Laptop, Globe } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Personalization',
    description: 'Adaptive learning paths that respond to individual student progress, preferences, and learning styles.',
  },
  {
    icon: Laptop,
    title: 'Smart Classrooms',
    description: 'Implement e-learning solutions and smart classroom technologies that enhance teaching effectiveness.',
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Foster connections between learners, educators, employers, and industry experts through our learning ecosystem.',
  },
  {
    icon: Globe,
    title: 'Scalable Platform',
    description: 'Support scalable learning experiences across diverse geographies, languages, and cultures.',
  },
]

const solutions = [
  'Learning Management Systems for educational institutions',
  'Custom eLearning content development',
  'AR/VR immersive learning experiences',
  'Gamified educational modules',
  'Student progress tracking and analytics',
  'Curriculum alignment and integration',
]

const benefits = [
  { value: '2M+', label: 'Learners in schools & workplaces' },
  { value: '15+', label: 'Years of educational experience' },
  { value: '500K+', label: 'Hours of learning designed' },
]

export default function EducationVerticalPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-900 text-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/90 text-white font-medium text-sm rounded-full mb-4">
              Education Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transforming education with{' '}
              <span className="text-primary">intelligent learning</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Kydon Learning Systems Institute provides learning solutions for educational institutions across Singapore and Asia, helping implement e-learning solutions, smart classrooms, and advanced learning management systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary-dark font-semibold rounded-xl hover:bg-neutral-200 transition-all shadow-lg"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/ai-university"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Explore AI University
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12">
            {benefits?.map((stat, i) => (
              <motion.div
                key={stat?.label ?? `stat-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-primary">{stat?.value ?? ''}</p>
                <p className="text-neutral-600">{stat?.label ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              21st Century Learning Solutions
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our learner-centric philosophy emphasizes self-driven, personalized learning paths with teachers acting as facilitators in an immersive, collaborative environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features?.map((feature, i) => (
              <motion.div
                key={feature?.title ?? `feature-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {feature?.icon && <feature.icon className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature?.title ?? ''}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{feature?.description ?? ''}</p>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* ZilLearn Ecosystem */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
                ZilLearn Ecosystem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Connected learning for the modern era
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                ZilLearn transforms traditional learning platforms by fostering connections between learners, educators, employers, and industry experts—creating an open, connected, and personalized learning space.
              </p>
              <ul className="space-y-3">
                {solutions?.map((solution, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {solution ?? ''}
                  </li>
                )) ?? []}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">K-12 Schools</p>
                      <p className="text-sm text-neutral-600">Smart classroom implementation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Higher Education</p>
                      <p className="text-sm text-neutral-600">Advanced LMS and analytics</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-dark rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Vocational Training</p>
                      <p className="text-sm text-neutral-600">Skills-based learning paths</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your educational institution?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Partner with Kydon to implement world-class learning solutions
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
