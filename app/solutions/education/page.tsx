import type { Metadata } from 'next'
import SolEducationBody from '@/components/site/pages/SolEducationBody'

export const metadata: Metadata = {
  title: { absolute: "Education solutions: preparing learners for the AI economy | Kydon" },
  description: "Help students and staff thrive with AI, from schools to higher education and training providers.",
  alternates: { canonical: "/solutions/education" },
  openGraph: { title: "Education solutions: preparing learners for the AI economy", description: "Help students and staff thrive with AI, from schools to higher education and training providers.", url: "/solutions/education" },
}

export default function Page() {
  return <SolEducationBody />
}
