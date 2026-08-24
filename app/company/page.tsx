import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getCompanyPageContent, getTeamMembers } from '@/lib/sanity-queries'
import { getTeamMembersWithFallback } from '@/lib/cms-content'
import CompanyPageClient from './company-page-client'
import { BreadcrumbSchema } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'About Kydon - AI Learning Company Founded in Singapore | Kydon',
  description: 'Learn about Kydon Group - founded in 2012 in Singapore, we are transforming how people learn, work, and thrive in the AI era. Meet our leadership team, discover our mission, and see how we serve enterprises and governments across Asia-Pacific.',
  openGraph: {
    title: 'About Kydon | The AI-Learning Company',
    description: 'Founded in 2012 in Singapore. Transforming workforce learning with AI across Asia-Pacific.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Kydon | The AI-Learning Company',
    description: 'Founded in 2012. Transforming how people learn with AI.',
  },
  alternates: {
    canonical: '/company',
  },
  keywords: ['about Kydon', 'Kydon Group', 'AI learning company Singapore', 'workforce transformation', 'David Yeo', 'leadership team', 'company history'],
}

// Default leadership team data (fallback)
const defaultLeaders: Array<{ name: string; role: string; bio: string; imageUrl?: string; order: number }> = [
  { name: 'David Yeo', role: 'Group CEO', bio: 'Entrepreneur with 2x exits. Board Member of National Institute of Adult Learning, and Singapore Civil Service College.', order: 1 },
  { name: 'Agnes Chai', role: 'Chief Corporate Officer', bio: 'Co-founded the company in 2012, Ex Director of Monetary Authority of Singapore.', order: 2 },
  { name: 'Dennis Chia', role: 'Consultant CFO', bio: 'Current CFO of CelcomDigi, Ex CFO of Starhub.', order: 3 },
  { name: 'Janice Cheng', role: 'Chief Commercial Officer', bio: 'Ex Snr Director Business Development ST Engineering.', order: 4 },
  { name: 'Shivanu Shukla', role: 'Chief Strategy Officer', bio: 'Ex CEO Teamie, Customer Experience expert, and consultant.', order: 5 },
  { name: 'Craig Johnson', role: 'Chief AI University', bio: 'CEO UnConstrainED and Ex Head of L&D Roundglass.', order: 6 },
  { name: 'Jeevan Gnanam', role: 'Chief AI Officer', bio: 'Serial technologist and entrepreneur, Concurrent CEO of Veracity.', order: 7 },
  { name: 'Segar Jeyasingh', role: 'Chief Revenue Officer', bio: 'Concurrent CEO of Leaderonomics and eQwip.', order: 8 },
  { name: 'Jane Low', role: 'Chief Learning Officer', bio: 'Ex Global Learning Advisor, Shell.', order: 9 },
]

// Default company page content
const defaultCompanyContent = {
  heroHeadline: 'Driving innovation at the intersection of',
  heroHighlight: 'AI and human potential',
  heroDescription: 'Founded in 2012, Kydon is transforming how people learn, work, and thrive in the AI era. Our mission is to build the AI that powers learning for the real world.',
  missionTitle: 'Our Mission',
  missionDescription: 'Build the intelligence infrastructure that powers learning, skills, and work in the real world. Enable individuals and organisations to acquire the right skills, apply them effectively, and achieve meaningful outcomes. At scale.',
  visionTitle: 'Our Vision',
  visionDescription: 'To become the global backbone for learning-to-livelihood intelligence. We connect learning, skills, and jobs through an AI-driven infrastructure that powers governments, enterprises, and institutions worldwide.',
  teamSectionTitle: 'Meet Our Leadership Team',
}

export const revalidate = 60

export default async function CompanyPage() {
  // Fetch CMS content
  const [cmsCompanyContent, cmsTeamMembers] = await Promise.all([
    getCompanyPageContent(),
    getTeamMembersWithFallback(),
  ])
  
  // Merge CMS content with defaults
  const companyContent = cmsCompanyContent ? {
    ...defaultCompanyContent,
    ...cmsCompanyContent,
  } : defaultCompanyContent
  
  // Use CMS team members if available, otherwise use defaults
  const leaders = cmsTeamMembers && cmsTeamMembers.length > 0 
    ? cmsTeamMembers.map(m => ({ name: m.name, role: m.role, bio: m.bio, imageUrl: m.imageUrl, order: m.order }))
    : defaultLeaders
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://kydongrp.com' },
          { name: 'Company', url: 'https://kydongrp.com/company' },
        ]}
      />
      <CompanyPageClient 
        companyContent={companyContent}
        leaders={leaders}
      />
    </>
  )
}
