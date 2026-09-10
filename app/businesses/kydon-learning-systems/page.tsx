'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Search, 
  Lightbulb, 
  GraduationCap, 
  Rocket,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  Palette,
  Monitor,
  Users,
  Settings,
  Headphones,
  BookOpen,
  Gamepad2,
  Glasses,
  Box,
  CheckCircle,
  Code,
  Layers,
  FileText,
  BarChart3,
  Target,
  UserPlus,
  Briefcase,
  ArrowUpRight
} from 'lucide-react'
import { useState } from 'react'

// Hero content - can be fetched from CMS
const heroContent = {
  backgroundImage: '/lsi-hero-bg.jpg', // CMS editable
  badge: 'Kydon Learning Systems Institute',
  headline: "Lead your organisation's learning transformation with confidence",
  subheadline: "Tap on Kydon's digital learning solutions expertise from 500,000+ hours of integrating Research, Design and Technology",
}

const mainServices = [
  { 
    icon: Search, 
    title: 'Consulting', 
    description: 'Identify your business goals, organisational and learning needs, and the success measures to address them.',
    color: 'bg-neutral-100'
  },
  { 
    icon: Lightbulb, 
    title: 'Solutions', 
    description: 'Propose learning solutions to meet the unique needs and close the performance gaps of your target learners without deviating from your branding or core message.',
    color: 'bg-neutral-100'
  },
  { 
    icon: GraduationCap, 
    title: 'Training', 
    description: 'Foster that learning culture by creating holistic training programs that are accessible and measurable against your desired business outcome.',
    color: 'bg-neutral-100'
  },
  { 
    icon: Rocket, 
    title: 'Delivery', 
    description: 'Elevate learning to the next level by delivering it quickly, serving it digitally, making it accessible, and time-efficient for learning.',
    color: 'bg-neutral-100'
  },
]

const integratedCapabilities = [
  {
    title: 'Research & Development',
    items: ['Research, Assessment and Planning', 'Evaluation and Measurement'],
    color: 'from-primary-darker to-primary-darkest',
  },
  {
    title: 'Learning Design & Consultancy',
    items: [
      'Learning Needs Analysis',
      'Learning Strategy',
      'Learning Solutions Design',
      'Learning Curriculum & Content',
      'Learning Delivery',
      'Change Management',
      'Systems Integration & Project Management'
    ],
    color: 'from-primary-darker to-primary-darkest',
  },
  {
    title: 'Learning Technologies',
    items: ['New Tech Learning Environment', 'Interactive Digital Content'],
    color: 'from-primary-darker to-primary-darkest',
  },
]

const services = [
  {
    id: 'lms',
    icon: Monitor,
    title: 'Learning Management System',
    shortDesc: 'Enterprise-grade LMS solutions for seamless learning delivery and tracking.',
    fullDesc: 'Our Learning Management System combines wealth of experience in LMS development with a modular architecture that reduces turnaround time. We have a proven track record of success with robust platforms that accommodate your business needs.',
    features: [
      'Wealth of experience in LMS development',
      'Modular LMS architecture that reduces turnaround time',
      'Proven track record of success and accomplishments',
      'Robust LMS platform for your business needs',
      'Superior post-development support',
      'LMS solutions for Education Institutions',
      'LMS solutions for Government Sector'
    ],
    color: 'from-primary-dark to-primary-darker'
  },
  {
    id: 'custom-app',
    icon: Code,
    title: 'Custom Application Development',
    shortDesc: 'Bespoke learning applications tailored to your unique requirements.',
    fullDesc: 'Leading Custom App Development in Singapore - We create best-in-class bespoke applications that seamlessly integrate with your existing systems while providing innovative learning experiences.',
    features: [
      'Custom-built applications for unique business needs',
      'Seamless integration with existing systems',
      'Scalable and maintainable codebase',
      'Mobile-responsive applications',
      'API development and integration',
      'Cloud-native application architecture'
    ],
    color: 'from-primary-dark to-primary-darker'
  },
  {
    id: 'system-integration',
    icon: Settings,
    title: 'System Integration',
    shortDesc: 'Seamless integration with your existing HR and enterprise systems.',
    fullDesc: 'Our system integration services ensure your learning platforms work harmoniously with your existing enterprise infrastructure, creating a unified ecosystem for training and development.',
    features: [
      'HR system integration (SAP, Oracle, Workday)',
      'Single Sign-On (SSO) implementation',
      'Data synchronization and migration',
      'API gateway development',
      'Legacy system modernization',
      'Enterprise architecture consulting'
    ],
    color: 'from-primary-dark to-primary-darker'
  },
  {
    id: 'content-dev',
    icon: FileText,
    title: 'Content Development',
    shortDesc: 'Interactive digital content using the Guerra Scale of Interactivity.',
    fullDesc: 'We use the Guerra Scale of Interactivity (G Scale) to create content at the right level of engagement for your learning objectives, from simple page-turners to fully immersive serious games.',
    features: [
      'Level 1: Low Interactive - Word/PDF Docs, Page turner with links',
      'Level 2: High Interactive - Motion/Animation, Multimedia',
      'Level 3: Low Interactive, High Engagement - Gamification, Branching',
      'Level 4: High Interactive, High Engagement - AR/VR/MR, Serious Games',
      'SCORM/xAPI compliant content',
      'Multi-language content development'
    ],
    color: 'from-primary-dark to-primary-darker'
  },
  {
    id: 'ar',
    icon: Glasses,
    title: 'Augmented Reality',
    shortDesc: 'Immersive AR experiences that merge physical and digital learning.',
    fullDesc: 'Augmented Reality Solutions in Education & Training - AR creates unique digital experiences that merge the best of both worlds – physical and digital. No specialized hardware required; most people use smartphones and mobile apps.',
    features: [
      'Creates unique customer experiences',
      'No specialized hardware required',
      'Enhances student comprehension and retention',
      'Interactive virtual objects in real environment',
      'Mobile-first AR experiences',
      'Marker-based and markerless AR solutions'
    ],
    color: 'from-primary-dark to-primary-darker'
  },
  {
    id: 'vr',
    icon: Box,
    title: 'Virtual Reality',
    shortDesc: 'Fully immersive VR training environments for experiential learning.',
    fullDesc: 'Virtual Reality training provides safe, repeatable, and immersive learning experiences that are perfect for high-risk scenarios, complex procedures, or situations that are difficult to replicate in real life.',
    features: [
      'Fully immersive 360° learning environments',
      'Safe training for high-risk scenarios',
      'Repeatable practice sessions',
      'Performance tracking and analytics',
      'Multi-user collaborative VR',
      'Cross-platform VR development'
    ],
    color: 'from-primary-dark to-primary-darker'
  },
  {
    id: 'gamification',
    icon: Gamepad2,
    title: 'Gamified E-Learning',
    shortDesc: 'Game-based learning that drives motivation and retention.',
    fullDesc: 'Gamified e-learning integrates game elements into digital learning, making the experience more engaging. 70% of Global 2000 companies utilize gamification in their training programs with engagement increases of up to 60%.',
    features: [
      'Up to 60% increase in employee engagement',
      '70% of Global 2000 companies use gamification',
      'Badges, leaderboards, and certificates',
      'Points and reward systems',
      'Branching scenarios and storytelling',
      'Competitive and collaborative game modes'
    ],
    color: 'from-primary-dark to-primary-darker'
  },
  {
    id: 'consultancy',
    icon: BarChart3,
    title: 'Learning Consultancy',
    shortDesc: 'Expert guidance using the Kirkpatrick Model for measurable outcomes.',
    fullDesc: 'Our team brings expertise from a variety of industries with third-party objectivity. We use the Kirkpatrick Model (Reaction, Learning, Behaviour, Results) to conduct evaluations and measure the impact of training.',
    features: [
      'Current Situation → Gap Analysis → Desired State',
      'Kirkpatrick Model evaluations',
      'Learning Needs Analysis',
      'Impact Study and ROI measurement',
      'Change management consulting',
      'Learning strategy development'
    ],
    color: 'from-primary-dark to-primary-darker'
  },
  {
    id: 'manpower',
    icon: UserPlus,
    title: 'Manpower Support',
    shortDesc: 'Staff augmentation and outsourcing for your learning projects.',
    fullDesc: 'We believe growing clients are happy clients. Whether it\'s staff augmentation or outsourcing, our talented manpower can be provided offsite or onsite. We are the largest learning solutions company in Singapore.',
    features: [
      'Instructional Designers',
      'Digital Learning Consultants',
      'Content Developers & UI/UX Designers',
      'Learning or IT Project Managers',
      'DevOps & Software Development Engineers',
      'IT Business Analysts & Support Engineers'
    ],
    color: 'from-primary-dark to-primary-darker'
  },
]

const whyTrustUs = [
  {
    title: 'Why Established Organisations Trust Us',
    content: 'We eat, sleep and breathe Digital Learning. We work with our clients to design and deliver the best digital learning strategies at the heart of all we do, from the government to educational institutions and corporates. We\'re excited when they succeed in the digital transformation.'
  },
  {
    title: 'Integrated Capabilities For Turn-Key Learning Solutions',
    content: 'Our integrated approach combines research, design, and technology to deliver complete learning solutions. From initial assessment to final deployment, we handle every aspect of your learning transformation project.'
  },
  {
    title: 'Total Systems Approach That Saves Time And Money',
    content: 'By bringing all learning services under one roof, we eliminate the inefficiencies of working with multiple vendors. Our streamlined processes reduce project timelines and costs while maintaining the highest quality standards.'
  },
  {
    title: 'Digital Content For Every Training Need',
    content: 'Whether you need compliance training, leadership development, technical skills, or soft skills programs, our content development team creates engaging digital experiences tailored to your specific requirements.'
  },
  {
    title: 'Scale With Innovative Learning Technology',
    content: 'Our learning technologies enable you to reach more learners, track progress effectively, and continuously improve your training programs. From LMS implementation to custom app development, we help you scale.'
  },
]

function AccordionItem({ item, isOpen, onClick }: { item: typeof whyTrustUs[0], isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
      >
        <span className="font-semibold text-neutral-900">{item.title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-primary-dark" /> : <ChevronDown className="w-5 h-5 text-neutral-400" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-4 text-neutral-600 leading-relaxed">{item.content}</p>
      </motion.div>
    </div>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-neutral-100 overflow-hidden"
    >
      <div className={`h-2 bg-gradient-to-r ${service.color}`} />
      <div className="p-6">
        <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
          <service.icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">{service.title}</h3>
        <p className="text-neutral-600 text-sm mb-4">{service.shortDesc}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-primary-dark font-medium text-sm hover:gap-2 transition-all"
        >
          {isExpanded ? 'Show less' : 'Learn more'}
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-neutral-100 mt-4">
            <p className="text-neutral-700 text-sm mb-4">{service.fullDesc}</p>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                  <CheckCircle className="w-4 h-4 text-primary-dark mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function KydonLearningSystems() {
  const [openAccordion, setOpenAccordion] = useState(0)

  return (
    <main className="pt-24" data-brand="klsi">
      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image - CMS Editable */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-dark/90 to-primary-darker/95 z-10" />
          {/* Placeholder gradient background - replace with CMS image */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-darker" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 z-10 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-container mx-auto px-6 relative z-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl text-white">
            <span className="inline-block px-4 py-1.5 bg-primary-darker/80 backdrop-blur-sm font-medium text-sm rounded-full mb-6 border border-primary-light/30">
              {heroContent.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {heroContent.headline.split('confidence')[0]}
              <span className="text-primary-light">confidence</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Tap on Kydon&apos;s digital learning solutions expertise from{' '}
              <span className="font-bold text-white">500,000+ hours</span> of integrating{' '}
              <span className="font-semibold">Research</span>,{' '}
              <span className="font-semibold">Design</span> and{' '}
              <span className="font-semibold">Technology</span>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all shadow-lg hover:shadow-xl"
            >
              Enquire Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Meeting All Digital Learning Needs */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Meeting All Your Digital Learning Needs Under One Roof
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              We combine professional training and industry experience in various fields – learning design, 
              digital content creation, curriculum development, learning technologies and systems integration 
              under one roof – to offer clients an integrated suite of learning services.
            </p>
          </motion.div>

          {/* Integrated Capabilities Diagram */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {integratedCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${cap.color} rounded-2xl overflow-hidden text-white h-full`}>
                  <div className="h-2 bg-primary" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-4">{cap.title}</h3>
                    <ul className="space-y-2">
                      {cap.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-white">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Integrated Capabilities Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full shadow-lg">
              <FlaskConical className="w-6 h-6" />
              <span className="font-semibold">Integrated Capabilities</span>
              <Palette className="w-6 h-6" />
              <Monitor className="w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Can Do For You */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              What We Can Do For You
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all text-center"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Services
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Comprehensive digital learning services to support your transformation journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us + Journey Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Journey Message */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark leading-tight mb-6">
                We&apos;re With You<br />
                In Your Learning<br />
                Transformation<br />
                Journey
              </h2>
              <p className="text-neutral-600 mb-6">
                From initial consultation to final deployment and beyond, our team is committed to your success.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:gap-3 transition-all"
              >
                Start your journey with us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Right: Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm"
            >
              {whyTrustUs.map((item, i) => (
                <AccordionItem
                  key={i}
                  item={item}
                  isOpen={openAccordion === i}
                  onClick={() => setOpenAccordion(openAccordion === i ? -1 : i)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-darker text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Learning Strategy?
            </h2>
            <p className="text-white max-w-xl mx-auto mb-8">
              Partner with Kydon Learning Systems Institute for world-class digital learning design and delivery
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-dark text-white font-semibold rounded-xl ring-2 ring-white hover:bg-accent-darker transition-all shadow-lg"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
