import type { Metadata } from 'next'
import ContactBody from '@/components/site/pages/ContactBody'
import { getContactPageContent } from '@/lib/sanity-queries'
import { BreadcrumbSchema } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: { absolute: "Contact Kydon | Let's talk" },
  description:
    'Book a Kydon ZilLearn demo, a free AI Workforce Assessment, or talk to us about partnerships and careers. Offices in Singapore, Malaysia, Indonesia and India.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Kydon',
    description: 'Book a platform demo, a free AI Workforce Assessment, or talk to us about partnerships and careers.',
    url: '/contact',
  },
}

export const revalidate = 60

export default async function ContactPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cms: any = await getContactPageContent()
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://kydongrp.com' }, { name: 'Contact', url: 'https://kydongrp.com/contact' }]} />
      <ContactBody hubspot={{ portalId: cms?.hubspotPortalId, formId: cms?.hubspotFormId, embedCode: cms?.hubspotEmbedCode }} />
    </>
  )
}
