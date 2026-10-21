import type { Metadata } from 'next'
import CoWorkersBody from '@/components/site/pages/CoWorkersBody'

export const metadata: Metadata = {
  title: { absolute: "Kydon AI Co-Workers: ready-built AI roles that learn from your best people | Kydon" },
  description: "Ten ready-built AI roles that take on routine work, live in 1 to 2 weeks, with a Forward Deployed Operator inside your team.",
  alternates: { canonical: "/ai-co-workers" },
  openGraph: { title: "Kydon AI Co-Workers: ready-built AI roles that learn from your best people", description: "Ten ready-built AI roles that take on routine work, live in 1 to 2 weeks, with a Forward Deployed Operator inside your team.", url: "/ai-co-workers" },
}

export default function Page() {
  return <CoWorkersBody />
}
