import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, DollarSign, Headphones, Code2, Settings, Crown, BookOpen, Award, BadgeCheck, Clock } from 'lucide-react'
import { getAIUniversityPageContent } from '@/lib/sanity-queries'
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'AI University - Role-Based AI Training & Reskilling | Kydon',
  description: 'Kydon AI University offers role-based AI reskilling tracks for the AI economy. Specialized learning paths with verified credentials and Skills Passport integration for professionals and organizations.',
  openGraph: {
    title: 'AI University | Kydon',
    description: 'Role-based AI reskilling tracks with verified credentials. Upskill your workforce for the AI economy.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI University | Kydon',
    description: 'Role-based AI reskilling for the AI economy.',
  },
  alternates: {
    canonical: '/ai-university',
  },
  keywords: ['AI university', 'AI reskilling', 'AI training programs', 'role-based learning', 'AI credentials', 'skills passport', 'professional AI training'],
}

export const revalidate = 60

const defaultContent = {
  heroLabel: 'Delivery & Signal Layer',
  heroHeadline: 'Role-based reskilling for the',
  heroHighlight: 'AI economy',
  heroDescription: 'Tracks that generate verified capability signals. Reimagine what people learn with dynamic, role-based programs that help them transition, reskill, and thrive.',
  primaryButtonText: 'Talk to Us',
  secondaryButtonText: 'Explore Tracks',
  tracksSectionTitle: 'AI Tracks for Every Role',
  tracksSectionDescription: 'Specialized learning paths designed for specific job functions and career aspirations',
  tracks: [
    { icon: 'dollar-sign', title: 'AI for Sales', description: 'Revenue generation in the AI era', color: 'from-green-500 to-emerald-600' },
    { icon: 'headphones', title: 'AI for CX', description: 'Customer experience transformation', color: 'from-blue-500 to-cyan-600' },
    { icon: 'code', title: 'AI for Developers', description: 'Building with AI-native tools', color: 'from-purple-500 to-violet-600' },
    { icon: 'settings', title: 'AI for Operations', description: 'Efficiency and automation', color: 'from-orange-500 to-amber-600' },
    { icon: 'crown', title: 'AI for Leaders', description: 'Strategic AI decision-making', color: 'from-primary to-primary-dark' },
    { icon: 'book', title: 'AI for Teachers', description: 'Transforming education delivery', color: 'from-pink-500 to-rose-600' },
  ],
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'dollar-sign': DollarSign,
  'headphones': Headphones,
  'code': Code2,
  'settings': Settings,
  'crown': Crown,
  'book': BookOpen,
}

export default async function AIUniversityPage() {
  const cmsContent = await getAIUniversityPageContent()
  const content = cmsContent || defaultContent

  return (
    <>
      <ServiceSchema
        name="Kydon AI University"
        description="Role-based AI reskilling tracks for the AI economy with verified credentials and Skills Passport."
        url="https://kydongrp.com/ai-university"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://kydongrp.com' },
          { name: 'AI University', url: 'https://kydongrp.com/ai-university' },
        ]}
      />
      <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-accent/5">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-medium text-sm rounded-full">
                {content.heroLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 text-amber-700 font-semibold text-sm rounded-full border border-amber-200">
                <Clock className="w-4 h-4" />
                Coming Soon
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {content.heroHeadline}{' '}
              <span className="gradient-text">{content.heroHighlight}</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              {content.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
              >
                {content.primaryButtonText}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#tracks"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary font-semibold rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all"
              >
                {content.secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="max-w-container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 text-amber-800">
            <Clock className="w-5 h-5" />
            <p className="font-medium">
              AI University is currently under development. Contact us to learn more about our upcoming role-based AI training programs.
            </p>
          </div>
        </div>
      </section>

      {/* AI University Illustration */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-lg bg-neutral-900">
            {/* Image - full width on all devices */}
            <div className="relative">
              <Image
                src="/images/illustrations/ai_university.jpg"
                alt="Professionals engaging with AI-powered learning and certification programs"
                width={2752}
                height={1536}
                className="w-full h-auto"
              />
              {/* Desktop overlay - hidden on mobile */}
              <div className="hidden md:flex absolute inset-0 items-end">
                <div className="w-full bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent p-8 lg:p-12">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                      Upskill for the AI-Powered Future
                    </h3>
                    <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                      Role-based training programs that prepare your workforce for the demands of the AI economy—with verified credentials they can carry throughout their careers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile text - shown below image */}
            <div className="md:hidden p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Upskill for the AI-Powered Future
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Role-based training programs that prepare your workforce for the demands of the AI economy—with verified credentials they can carry throughout their careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Grid */}
      <section id="tracks" className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {content.tracksSectionTitle}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              {content.tracksSectionDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.tracks?.map((track, i) => {
              const IconComponent = iconMap[track?.icon || 'dollar-sign'] || DollarSign
              return (
                <div
                  key={track?.title ?? `track-${i}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all card-hover border border-neutral-100"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${track?.color ?? 'from-primary to-primary-dark'} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {track?.title ?? ''}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {track?.description ?? ''}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    View track
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            }) ?? []}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Skills Passport & Credentials
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Every completed track generates verified credentials that employees can showcase internally or externally. Build a comprehensive skills passport that travels with your career.
              </p>
              <ul className="space-y-3">
                {['Blockchain-verified certificates', 'Skills taxonomy alignment', 'LinkedIn integration', 'Portfolio builder']?.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-700">
                    <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">AI Fluency Certificate</h4>
                    <p className="text-sm text-neutral-500">Kydon AI University</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Completion</span>
                    <span className="font-medium text-neutral-900">100%</span>
                  </div>
                  <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent w-full rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Skills verified</span>
                    <span className="font-medium text-primary">12 competencies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="bg-gradient-to-br from-accent to-primary rounded-3xl p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to upskill your workforce?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Join leading organizations building AI-ready teams with Kydon AI University
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-neutral-100 transition-all"
            >
              {content.primaryButtonText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
