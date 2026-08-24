import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions | Kydon',
  description: 'Kydon AI learning solutions for enterprise, government, education, and partners. Tailored workforce transformation powered by agentic AI.',
  alternates: {
    canonical: '/solutions',
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
