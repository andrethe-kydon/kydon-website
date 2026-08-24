import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Government Solutions - Public Sector AI Training | Kydon',
  description: 'AI-powered learning solutions for government agencies. Scalable, secure training platforms for civil service capability building and public sector workforce development.',
  openGraph: {
    title: 'Government Solutions | Kydon',
    description: 'Secure AI training platforms for government and public sector workforce development.',
    type: 'website',
  },
  alternates: {
    canonical: '/solutions/government',
  },
  keywords: ['government AI training', 'public sector development', 'civil service learning', 'government LMS'],
}

export default function GovernmentSolutionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
