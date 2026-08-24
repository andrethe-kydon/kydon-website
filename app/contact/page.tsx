import { Metadata } from 'next'
import { getContactPageContent } from '@/lib/sanity-queries'
import ContactPageClient from './contact-page-client'
import { BreadcrumbSchema } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Contact Us - Get Started with AI Learning | Kydon',
  description: 'Get in touch with Kydon to learn how our AI-powered learning solutions can transform your workforce. Request a consultation for enterprise, government, or education solutions.',
  openGraph: {
    title: 'Contact Kydon | AI Learning Solutions',
    description: 'Transform your workforce with AI-powered learning. Request a consultation today.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Kydon | AI Learning Solutions',
    description: 'Request a consultation for AI-powered workforce transformation.',
  },
  alternates: {
    canonical: '/contact',
  },
  keywords: ['contact Kydon', 'AI learning consultation', 'enterprise training inquiry', 'workforce transformation demo'],
}

export const revalidate = 60

const defaultContent = {
  heroHeadline: "Let's build the",
  heroHighlight: 'future of learning',
  heroDescription: 'Ready to transform how your organization learns and grows? Get in touch with our team to explore how Kydon can help.',
  formTitle: 'Send us a message',
  contactEmail: 'hello@kydongrp.com',
  contactPhone: '+65 6123 4567',
  officeAddress: 'Singapore',
}

export default async function ContactPage() {
  const cmsContent = await getContactPageContent()
  const content = cmsContent || defaultContent

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://kydongrp.com' },
          { name: 'Contact', url: 'https://kydongrp.com/contact' },
        ]}
      />
      <ContactPageClient content={content} />
    </>
  )
}
