import type { Metadata } from 'next'
import SolGovernmentBody from '@/components/site/pages/SolGovernmentBody'

export const metadata: Metadata = {
  title: { absolute: "Government solutions: workforce transformation at national scale | Kydon" },
  description: "Trusted by ministries and government agencies to deliver AI-powered learning, from defence to education and across the public service.",
  alternates: { canonical: "/solutions/government" },
  openGraph: { title: "Government solutions: workforce transformation at national scale", description: "Trusted by ministries and government agencies to deliver AI-powered learning, from defence to education and across the public service.", url: "/solutions/government" },
}

export default function Page() {
  return <SolGovernmentBody />
}
