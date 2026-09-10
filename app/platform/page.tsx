'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Layers, 
  Zap, 
  Users, 
  BarChart3, 
  Settings, 
  Shield, 
  MessageSquare, 
  GraduationCap,
  Globe,
  Smartphone,
  Award,
  BookOpen,
  Brain,
  TrendingUp,
  Clock,
  Target,
  Sparkles,
  Building2,
  School,
  Bot,
  CheckCircle,
  X
} from 'lucide-react'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

// Learning paths/solutions
const learningPaths = [
  {
    icon: School,
    title: 'Academic Solutions',
    description: 'Comprehensive learning management for schools, colleges, and universities with curriculum mapping, assessment tools, and student progress tracking.',
    features: ['Curriculum Management', 'Student Analytics', 'Assessment Builder', 'Parent Portals'],
    gradient: 'from-accent-dark to-accent-darker',
    href: '/contact'
  },
  {
    icon: Building2,
    title: 'Enterprise Training',
    description: 'Scalable corporate learning solutions for workforce upskilling, compliance training, and professional development across your organization.',
    features: ['Skills Gap Analysis', 'Compliance Tracking', 'Role-based Learning', 'Performance Insights'],
    gradient: 'from-primary to-primary-dark',
    href: '/contact'
  },
  {
    icon: Bot,
    title: 'AI-Powered LMS',
    description: 'Next-generation learning management powered by autonomous AI agents that personalize pathways, automate administration, and deliver just-in-time learning.',
    features: ['Adaptive Pathways', 'AI Recommendations', 'Smart Nudges', 'Auto-reporting'],
    gradient: 'from-primary-dark to-primary-darker',
    href: '/contact'
  }
]

// Expanded features
const features = [
  {
    icon: Brain,
    title: 'AI-Powered Personalization',
    description: 'Intelligent learning paths that adapt to individual progress and learning preferences in real-time.'
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Foster teamwork with group projects, discussion forums, and peer-to-peer learning opportunities.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with SSO integration, data encryption, and compliance with global standards.'
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Global accessibility with support for multiple languages and localization features.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Learning',
    description: 'Learn anywhere, anytime with responsive design and dedicated mobile applications.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track learning progress, engagement metrics, and performance insights with detailed reporting dashboards.'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Course Library',
    description: 'Access thousands of courses across multiple disciplines with regular content updates and expert-curated materials.'
  },
  {
    icon: Award,
    title: 'Certification Management',
    description: 'Issue, track, and verify digital certificates and badges for completed courses and achievements.'
  }
]

// AI vs Traditional comparison
const comparisonData = [
  {
    category: 'Learning Management',
    traditional: 'Managing learning relies on fixed course catalogs and manual enrollment processes',
    aiPowered: 'AI autonomously manages enrollments, scheduling, and updates according to pre-set rules, freeing up staff time'
  },
  {
    category: 'Skills Management',
    traditional: 'Skills go unmanaged as there\'s no effective way to track, measure, or develop the critical skills learners need',
    aiPowered: 'AI engine continuously monitors individual performance in real-time to automatically design and adapt personalized learning experiences'
  },
  {
    category: 'Content Creation',
    traditional: 'Performance & Growth are disconnected as development plans and performance goals are based on scoped business requirements',
    aiPowered: 'AI dynamically generates tailored and suitable content to suit each learner\'s preferred style'
  },
  {
    category: 'Just-in-Time Learning',
    traditional: 'Teams must manually purchase, build, and maintain a separate wiki to house company-specific information',
    aiPowered: 'AI provides direct, conversational answers and automatically generates citations from the learning platform\'s content'
  },
  {
    category: 'Learning Analytics',
    traditional: 'Export data from LMS, upload it to a BI tool for analysis, distribute results with stakeholders',
    aiPowered: 'AI instantly generates real-time performance dashboards and answers stakeholder questions, ensuring crucial insights are immediately accessible'
  }
]

// Integrations
const integrations = ['HRIS Systems', 'SSO/SAML', 'Slack', 'Microsoft Teams', 'Workday', 'SAP', 'Salesforce', 'Custom APIs']

export default function PlatformPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
        
        <div className="max-w-container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-neutral-100 text-primary-darker font-medium text-sm rounded-full mb-4 border border-primary/30">
              Learning Success Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Complete{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                Learning Success
              </span>{' '}
              Platform
            </h1>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              AI-powered modular learning components that precisely address your needs. 
              Deploy rapidly, configure seamlessly, and transform how your organization learns.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all shadow-lg shadow-primary/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                Explore Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Core Statement */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-darker text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Is Not An Add-On. It's The Core Of Our Product.
            </h2>
            <p className="text-white max-w-2xl mx-auto text-lg">
              Elevate the team's role from simply providing content to actively driving strategic business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* See It In Action - Video Demo */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-neutral-100 text-primary-darker font-medium text-sm rounded-full mb-4">
              See It In Action
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              AI-Powered Learning Agents
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              See how our intelligent agents automate assessments, personalize learning paths, 
              and deliver instant feedback at scale—for both training and education.
            </p>
          </motion.div>

          <motion.div
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Video Container with shadow and rounded corners */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 bg-neutral-900">
              {/* Browser-like header */}
              <div className="bg-neutral-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-neutral-700 rounded-md px-3 py-1.5 text-neutral-400 text-sm text-center">
                    AI Learning Agents
                  </div>
                </div>
              </div>
              
              {/* Video Element */}
              <video
                className="w-full aspect-video"
                controls
                poster="/videos/platform-demo-poster.jpg"
                preload="metadata"
              >
                <source src="/videos/platform-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Feature highlights below video */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { icon: Zap, label: 'Smart Assessments' },
                { icon: Bot, label: 'Adaptive Learning' },
                { icon: Settings, label: 'Instant Feedback' }
              ].map((item, i) => (
                <div key={item.label} className="flex items-center justify-center gap-2 text-neutral-600">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Journey Illustration Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg bg-neutral-900"
          >
            {/* Image - full width on all devices */}
            <div className="relative">
              <Image
                src="/images/illustrations/learning_journey.jpg"
                alt="Learning journey illustration showing people progressing through skill development"
                width={2752}
                height={1536}
                className="w-full h-auto"
              />
              {/* Desktop overlay - hidden on mobile */}
              <div className="hidden md:flex absolute inset-0 items-end">
                <div className="w-full bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent p-8 lg:p-12">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                      Every Learner&apos;s Journey is Unique
                    </h3>
                    <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                      Our AI adapts to individual learning styles, pace, and goals—ensuring everyone 
                      achieves meaningful outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile text - shown below image */}
            <div className="md:hidden p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Every Learner&apos;s Journey is Unique
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Our AI adapts to individual learning styles, pace, and goals—ensuring everyone 
                achieves meaningful outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-neutral-100 text-neutral-600 font-medium text-sm rounded-full mb-4">
              Tailored Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              Whether you&apos;re an educational institution or enterprise, we have the right solution for your learning needs.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {learningPaths.map((path, i) => (
              <motion.div
                key={path.title}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className={`bg-gradient-to-r ${path.gradient} p-6 text-white`}>
                  <path.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold">{path.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {path.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {path.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-neutral-700">
                        <CheckCircle className="w-5 h-5 text-primary-dark flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={path.href}
                    className="inline-flex items-center gap-2 text-primary-dark font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-neutral-100 text-primary-darker font-medium text-sm rounded-full mb-4">
              Powerful Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Everything You Need For Modern Learning
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              Create, deliver, and manage effective learning experiences in one comprehensive platform.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-neutral-100 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI vs Traditional Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-neutral-100 text-primary-darker font-medium text-sm rounded-full mb-4">
              The AI Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Traditional vs AI-Powered Learning
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              See how AI transforms every aspect of learning management
            </p>
          </motion.div>

          <motion.div 
            className="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="grid grid-cols-3 bg-neutral-100 border-b border-neutral-200">
              <div className="p-4 md:p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-300 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-neutral-600" />
                </div>
                <span className="font-semibold text-neutral-700 hidden md:inline">Traditional Systems</span>
              </div>
              <div className="p-4 md:p-6 text-center font-bold text-neutral-900 border-x border-neutral-200 bg-white">
                Category
              </div>
              <div className="p-4 md:p-6 flex items-center justify-end gap-3">
                <span className="font-semibold text-primary-dark hidden md:inline">AI-Powered Platform</span>
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-dark" />
                </div>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisonData.map((row, i) => (
              <div 
                key={row.category}
                className={`grid grid-cols-3 ${i !== comparisonData.length - 1 ? 'border-b border-neutral-200' : ''}`}
              >
                <div className="p-4 md:p-6 text-sm text-neutral-600 bg-neutral-50/50">
                  {row.traditional}
                </div>
                <div className="p-4 md:p-6 text-center font-semibold text-neutral-900 border-x border-neutral-200 bg-white flex items-center justify-center">
                  <span className="px-3 py-1 bg-neutral-100 rounded-full text-sm">
                    {row.category}
                  </span>
                </div>
                <div className="p-4 md:p-6 text-sm text-neutral-700 bg-primary/5">
                  {row.aiPowered}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              Connect with your existing enterprise tools and workflows
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {integrations.map((integration, i) => (
              <div
                key={integration}
                className="px-6 py-3 bg-white rounded-full shadow-sm border border-neutral-200 font-medium text-neutral-700 hover:border-primary/30 hover:shadow-md transition-all"
              >
                {integration}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: '500K+', label: 'Active Learners' },
              { value: '200+', label: 'Organizations' },
              { value: '15+', label: 'Countries' },
              { value: '98%', label: 'Satisfaction Rate' }
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-container mx-auto px-6">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Modernize Your Learning Strategy?
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-8 text-lg">
              Join hundreds of organizations that have transformed their workforce development with our AI-powered platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all shadow-lg shadow-primary/25"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/businesses/kydon-learning-systems"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
