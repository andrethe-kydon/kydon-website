import type { Metadata } from 'next'
import CareersBody from '@/components/site/pages/CareersBody'
import { getRoleRows } from '@/lib/careers'

export const metadata: Metadata = {
  title: { absolute: 'Careers at Kydon | Help build the AI-ready workforce' },
  description:
    'Join Kydon and help organisations put people and AI to work together. See open roles in Singapore and across the region, or start your Forward Deployed Operator journey.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers at Kydon',
    description: 'Help build the AI-ready workforce. See open roles or become a Forward Deployed Operator.',
    url: '/careers',
  },
}

export const revalidate = 60

export default async function CareersPage() {
  const roles = await getRoleRows()
  return <CareersBody roles={roles} />
}
