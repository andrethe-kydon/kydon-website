import Link from 'next/link'
import Image from 'next/image'
import { Layers, GraduationCap, Cpu, Building2, Landmark, School, Users } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Platform', href: '/platform', icon: Layers },
    { label: 'AI University', href: '/ai-university', icon: GraduationCap },
    { label: 'AI Learning Engine', href: '/ai-learning-engine', icon: Cpu },
  ],
  solutions: [
    { label: 'Enterprise', href: '/solutions/enterprise', icon: Building2 },
    { label: 'Government', href: '/solutions/government', icon: Landmark },
    { label: 'Education', href: '/solutions/education', icon: School },
    { label: 'Partners', href: '/solutions/partners', icon: Users },
  ],
  company: [
    { label: 'Leadership', href: '/company' },
    { label: 'Careers', href: '/careers' },
    { label: 'News & Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/kydon-logo.png"
                alt="Kydon - Leading Learning"
                width={120}
                height={52}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              The Operating System for the AI-Ready Workforce. Building the future of learning.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              {footerLinks?.product?.map((link) => (
                <li key={link?.label ?? 'footer-product'}>
                  <Link
                    href={link?.href ?? '#'}
                    className="text-neutral-400 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    {link?.icon && <link.icon className="w-4 h-4" />}
                    {link?.label ?? ''}
                  </Link>
                </li>
              )) ?? []}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks?.solutions?.map((link) => (
                <li key={link?.label ?? 'footer-solutions'}>
                  <Link
                    href={link?.href ?? '#'}
                    className="text-neutral-400 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    {link?.icon && <link.icon className="w-4 h-4" />}
                    {link?.label ?? ''}
                  </Link>
                </li>
              )) ?? []}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks?.company?.map((link) => (
                <li key={link?.label ?? 'footer-company'}>
                  <Link
                    href={link?.href ?? '#'}
                    className="text-neutral-400 hover:text-accent transition-colors text-sm"
                  >
                    {link?.label ?? ''}
                  </Link>
                </li>
              )) ?? []}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © 2026 Kydon Holdings Pte Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link 
              href="/privacy-policy" 
              className="text-neutral-500 hover:text-accent transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <span className="text-neutral-500 text-sm">Singapore • Global</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
