import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Building2, CheckCircle, ExternalLink, Mail } from 'lucide-react'
import { getJobPositions, JobPosition } from '@/lib/sanity-queries'
import { notFound } from 'next/navigation'

export const revalidate = 60

const departmentLabels: Record<string, string> = {
  'engineering': 'Engineering',
  'product': 'Product',
  'design': 'Design',
  'sales': 'Sales',
  'marketing': 'Marketing',
  'operations': 'Operations',
  'hr': 'Human Resources',
  'finance': 'Finance',
  'learning': 'Learning & Development',
  'customer-success': 'Customer Success',
}

const employmentTypeLabels: Record<string, string> = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  'contract': 'Contract',
  'internship': 'Internship',
}

// Default positions (same as listing page)
const defaultPositions: JobPosition[] = [
  {
    _id: '1',
    title: 'Senior Full Stack Developer',
    department: 'engineering',
    location: 'Singapore',
    employmentType: 'full-time',
    description: 'We are looking for an experienced Full Stack Developer to join our engineering team and help build the next generation of AI-powered learning platforms.',
    responsibilities: [
      'Design and develop scalable web applications using modern frameworks',
      'Collaborate with product and design teams to deliver exceptional user experiences',
      'Mentor junior developers and contribute to team growth',
      'Contribute to technical architecture decisions and best practices',
      'Write clean, maintainable, and well-tested code',
    ],
    requirements: [
      '5+ years of experience in full stack development',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/GCP)',
      'Strong problem-solving skills and attention to detail',
      'Excellent communication and collaboration skills',
    ],
    niceToHave: [
      'Experience with AI/ML technologies',
      'Background in EdTech or learning platforms',
      'Contributions to open source projects',
    ],
    applyEmail: 'careers@kydongrp.com',
  },
  {
    _id: '2',
    title: 'AI/ML Engineer',
    department: 'engineering',
    location: 'Singapore / Remote',
    employmentType: 'full-time',
    description: 'Join our AI team to develop cutting-edge machine learning models that power personalized learning experiences.',
    responsibilities: [
      'Develop and deploy ML models for adaptive learning systems',
      'Work with large-scale educational datasets to train and validate models',
      'Optimize model performance and inference for production',
      'Collaborate with product teams to translate AI capabilities into features',
      'Stay current with latest research in ML and NLP',
    ],
    requirements: [
      '3+ years of experience in ML/AI development',
      'Strong Python skills with TensorFlow or PyTorch',
      'Experience with NLP and recommendation systems',
      'Familiarity with ML ops and model deployment',
      'MS/PhD in Computer Science or related field preferred',
    ],
    niceToHave: [
      'Experience with LLMs and generative AI',
      'Published research in relevant fields',
      'Experience in educational technology',
    ],
    applyEmail: 'careers@kydongrp.com',
  },
  {
    _id: '3',
    title: 'Learning Experience Designer',
    department: 'learning',
    location: 'Singapore',
    employmentType: 'full-time',
    description: 'Create engaging and effective learning experiences that leverage AI to deliver personalized education at scale.',
    responsibilities: [
      'Design learner-centric educational content and curricula',
      'Develop assessment strategies, rubrics, and feedback mechanisms',
      'Collaborate with subject matter experts to create accurate content',
      'Analyze learning outcomes data and iterate on designs',
      'Work with engineers to implement learning experiences in our platform',
    ],
    requirements: [
      '3+ years in instructional design or L&D',
      'Experience with e-learning authoring tools',
      'Understanding of learning science principles and adult learning theory',
      'Excellent written and verbal communication skills',
      'Portfolio demonstrating diverse learning design work',
    ],
    niceToHave: [
      'Experience with AI-powered learning tools',
      'Background in corporate training or higher education',
      'Familiarity with competency frameworks',
    ],
    applyEmail: 'careers@kydongrp.com',
  },
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const cmsPositions = await getJobPositions()
  const positions = cmsPositions.length > 0 ? cmsPositions : defaultPositions
  const position = positions.find(p => p._id === params.id)

  if (!position) {
    return {
      title: 'Position Not Found | Kydon Careers',
    }
  }

  return {
    title: `${position.title} | Kydon Careers`,
    description: position.description,
  }
}

export default async function JobDetailPage({ params }: { params: { id: string } }) {
  const cmsPositions = await getJobPositions()
  const positions = cmsPositions.length > 0 ? cmsPositions : defaultPositions
  const position = positions.find(p => p._id === params.id)

  if (!position) {
    notFound()
  }

  const applyLink = position.applyUrl || (position.applyEmail ? `mailto:${position.applyEmail}?subject=Application for ${position.title}` : '/contact')
  const isExternalLink = position.applyUrl?.startsWith('http')

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Positions
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-neutral-100 text-primary-darker text-sm font-medium rounded-full">
              {departmentLabels[position.department] || position.department}
            </span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full">
              {employmentTypeLabels[position.employmentType] || position.employmentType}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {position.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-neutral-600">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {position.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {employmentTypeLabels[position.employmentType] || position.employmentType}
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              {departmentLabels[position.department] || position.department}
            </span>
          </div>
        </div>

        {/* Apply Button - Sticky on mobile */}
        <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-10 sticky top-24 z-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-neutral-600 text-sm">Interested in this role?</p>
              <p className="font-semibold text-neutral-900">We&apos;d love to hear from you.</p>
            </div>
            <a
              href={applyLink}
              target={isExternalLink ? '_blank' : undefined}
              rel={isExternalLink ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all"
            >
              {position.applyEmail ? (
                <><Mail className="w-4 h-4" /> Apply via Email</>
              ) : isExternalLink ? (
                <><ExternalLink className="w-4 h-4" /> Apply Now</>
              ) : (
                'Apply Now'
              )}
            </a>
          </div>
        </div>

        {/* Job Description */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">About the Role</h2>
          <p className="text-neutral-600 leading-relaxed">
            {position.description}
          </p>
        </section>

        {/* Responsibilities */}
        {position.responsibilities && position.responsibilities.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Key Responsibilities</h2>
            <ul className="space-y-3">
              {position.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-600">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Requirements */}
        {position.requirements && position.requirements.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Requirements</h2>
            <ul className="space-y-3">
              {position.requirements.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-600">
                  <CheckCircle className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Nice to Have */}
        {position.niceToHave && position.niceToHave.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Nice to Have</h2>
            <ul className="space-y-3">
              {position.niceToHave.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-600">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="bg-neutral-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            Ready to Apply?
          </h2>
          <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
            Take the next step in your career and join our team. We look forward to learning more about you.
          </p>
          <a
            href={applyLink}
            target={isExternalLink ? '_blank' : undefined}
            rel={isExternalLink ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all"
          >
            {position.applyEmail ? (
              <><Mail className="w-5 h-5" /> Apply via Email</>
            ) : isExternalLink ? (
              <><ExternalLink className="w-5 h-5" /> Apply Now</>
            ) : (
              'Apply Now'
            )}
          </a>
        </section>
      </div>
    </main>
  )
}
