import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Learning Engine - Domain-Specific LLM for Education | Kydon',
  description: "Kydon's AI Learning Engine is a domain-specific LLM trained for pedagogy, competency mapping, and behavioral insights. The intelligence core powering personalized learning at enterprise scale.",
  openGraph: {
    title: 'AI Learning Engine | Kydon',
    description: 'Domain-specific LLM for pedagogy and competency mapping. The intelligence core for personalized learning.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Learning Engine | Kydon',
    description: 'Domain-specific LLM powering personalized learning at scale.',
  },
  alternates: {
    canonical: '/ai-learning-engine',
  },
  keywords: ['AI learning engine', 'domain-specific LLM', 'pedagogy AI', 'competency mapping', 'behavioral insights', 'learning AI'],
}

export default function AILearningEngineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
