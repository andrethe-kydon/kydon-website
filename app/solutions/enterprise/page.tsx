import type { Metadata } from 'next'
import SolEnterpriseBody from '@/components/site/pages/SolEnterpriseBody'

export const metadata: Metadata = {
  title: { absolute: "Enterprise solutions: performance that keeps improving across people and AI | Kydon" },
  description: "AI-powered learning and performance tied to business outcomes, for organisations putting AI agents to work at scale.",
  alternates: { canonical: "/solutions/enterprise" },
  openGraph: { title: "Enterprise solutions: performance that keeps improving across people and AI", description: "AI-powered learning and performance tied to business outcomes, for organisations putting AI agents to work at scale.", url: "/solutions/enterprise" },
}

export default function Page() {
  return <SolEnterpriseBody />
}
