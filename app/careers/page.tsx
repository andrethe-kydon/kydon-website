import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Briefcase, Clock, Building2, Users, Sparkles } from 'lucide-react'
import { getJobPositions, JobPosition } from '@/lib/sanity-queries'

export const metadata: Metadata = {
  title: 'Careers - Join the AI Learning Revolution | Kydon',
  description: 'Join Kydon and help build the future of AI-powered learning. Explore open positions in engineering, product, design, sales, and more at Singapore\'s leading AI learning company.',
  openGraph: {
    title: 'Careers at Kydon | Join the AI Learning Revolution',
    description: 'Build the future of AI-powered learning. Explore open positions at Kydon.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Kydon',
    description: 'Join the AI learning revolution. Explore open positions.',
  },
  alternates: {
    canonical: '/careers',
  },
  keywords: ['Kydon careers', 'AI jobs Singapore', 'edtech careers', 'learning technology jobs', 'AI company jobs'],
}

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

// Default positions to show when CMS has no data
const defaultPositions: JobPosition[] = [
  {
    _id: '1',
    title: 'Senior Full Stack Developer',
    department: 'engineering',
    location: 'Singapore',
    employmentType: 'full-time',
    description: 'We are looking for an experienced Full Stack Developer to join our engineering team and help build the next generation of AI-powered learning platforms.',
    responsibilities: [
      'Design and develop scalable web applications',
      'Collaborate with product and design teams',
      'Mentor junior developers',
      'Contribute to technical architecture decisions',
    ],
    requirements: [
      '5+ years of experience in full stack development',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/GCP)',
      'Strong problem-solving skills',
    ],
  },
  {
    _id: '2',
    title: 'AI/ML Engineer',
    department: 'engineering',
    location: 'Singapore / Remote',
    employmentType: 'full-time',
    description: 'Join our AI team to develop cutting-edge machine learning models that power personalized learning experiences.',
    responsibilities: [
      'Develop and deploy ML models for adaptive learning',
      'Work with large-scale educational datasets',
      'Optimize model performance and inference',
      'Collaborate with product teams on AI features',
    ],
    requirements: [
      '3+ years of experience in ML/AI',
      'Strong Python skills with TensorFlow/PyTorch',
      'Experience with NLP and recommendation systems',
      'MS/PhD in Computer Science or related field preferred',
    ],
  },
  {
    _id: '3',
    title: 'Learning Experience Designer',
    department: 'learning',
    location: 'Singapore',
    employmentType: 'full-time',
    description: 'Create engaging and effective learning experiences that leverage AI to deliver personalized education at scale.',
    responsibilities: [
      'Design learner-centric educational content',
      'Develop assessment strategies and rubrics',
      'Collaborate with subject matter experts',
      'Analyze learning outcomes and iterate',
    ],
    requirements: [
      '3+ years in instructional design or L&D',
      'Experience with e-learning authoring tools',
      'Understanding of learning science principles',
      'Excellent communication skills',
    ],
  },
]

export default async function CareersPage() {
  const cmsPositions = await getJobPositions()
  const positions = cmsPositions.length > 0 ? cmsPositions : defaultPositions

  // Group positions by department
  const positionsByDepartment = positions.reduce((acc, position) => {
    const dept = position.department || 'other'
    if (!acc[dept]) acc[dept] = []
    acc[dept].push(position)
    return acc
  }, {} as Record<string, JobPosition[]>)

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-neutral-900 text-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white font-medium text-sm rounded-full mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Build the Future of{' '}
              <span className="text-white/90">AI-Powered Learning</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              We&apos;re on a mission to transform how the world learns. Join a team of innovators, 
              educators, and technologists working to make learning more intelligent and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-12">
            Why Join Kydon?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Meaningful Impact</h3>
              <p className="text-neutral-600">
                Your work directly impacts how millions of people learn and grow in their careers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Collaborative Culture</h3>
              <p className="text-neutral-600">
                Work alongside talented individuals from diverse backgrounds who share your passion.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Growth Opportunities</h3>
              <p className="text-neutral-600">
                Continuous learning is in our DNA. We invest in your professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Open Positions
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals to join our team. 
              Explore our current openings below.
            </p>
          </div>

          {positions.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-neutral-200">
              <Briefcase className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                No Open Positions Right Now
              </h3>
              <p className="text-neutral-500 mb-6">
                We don&apos;t have any openings at the moment, but we&apos;re always interested in hearing from talented individuals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-10">
              {Object.entries(positionsByDepartment).map(([department, deptPositions]) => (
                <div key={department}>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    {departmentLabels[department] || department}
                    <span className="text-sm font-normal text-neutral-500">
                      ({deptPositions.length} {deptPositions.length === 1 ? 'position' : 'positions'})
                    </span>
                  </h3>
                  <div className="space-y-4">
                    {deptPositions.map((position) => (
                      <div
                        key={position._id}
                        className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-all"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-bold text-neutral-900 mb-2">
                              {position.title}
                            </h4>
                            <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {position.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {employmentTypeLabels[position.employmentType] || position.employmentType}
                              </span>
                            </div>
                            <p className="text-neutral-600 mt-3 line-clamp-2">
                              {position.description}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <Link
                              href={`/careers/${position._id}`}
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all text-sm"
                            >
                              View Details
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-10 md:p-16 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don&apos;t See the Right Role?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              We&apos;re always looking for exceptional talent. Send us your resume and 
              let us know how you can contribute to our mission.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
