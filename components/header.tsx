'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'

const navItems = [
  {
    label: 'Solutions',
    href: '#',
    dropdown: [
      { label: 'Agent OS Learning Platform', href: '/platform' },
      { label: 'AI University', href: '/ai-university' },
      { label: 'Learning Intelligence Infrastructure', href: '/ai-learning-platform' },
    ],
  },
  {
    label: 'Businesses',
    href: '#',
    dropdown: [
      { label: 'Kydon Learning Systems Institute', href: '/businesses/kydon-learning-systems' },
      { label: 'ZilLearn', href: '/businesses/zillearn' },
      { label: 'Future Edge Institute', href: 'https://www.futureedgeinstitute.com', external: true },
    ],
  },
  {
    label: 'Verticals',
    href: '#',
    dropdown: [
      { label: 'Enterprise', href: '/verticals/enterprise' },
      { label: 'Government', href: '/verticals/government' },
      { label: 'Education', href: '/verticals/education' },
      { label: 'Partners', href: '/verticals/partners' },
    ],
  },
  { label: 'Company', href: '/company' },
  { label: 'Insights', href: '/insights' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/kydon-logo.png"
              alt="Kydon - Leading Learning"
              width={140}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems?.map((item) => (
              <div
                key={item?.label ?? 'nav-item'}
                className="relative"
                onMouseEnter={() => item?.dropdown && setActiveDropdown(item?.label ?? null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item?.href ?? '#'}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-colors rounded-lg hover:bg-neutral-100"
                >
                  {item?.label ?? ''}
                  {item?.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                <AnimatePresence>
                  {item?.dropdown && activeDropdown === item?.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 py-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-200"
                    >
                      {item?.dropdown?.map((sub) =>
                        sub?.external ? (
                          <a
                            key={sub?.label ?? 'sub-item'}
                            href={sub?.href ?? '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-neutral-700 hover:text-primary hover:bg-neutral-50 transition-colors"
                          >
                            {sub?.label ?? ''}
                          </a>
                        ) : (
                          <Link
                            key={sub?.label ?? 'sub-item'}
                            href={sub?.href ?? '#'}
                            className="block px-4 py-2 text-sm text-neutral-700 hover:text-primary hover:bg-neutral-50 transition-colors"
                          >
                            {sub?.label ?? ''}
                          </Link>
                        )
                      ) ?? []}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )) ?? []}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-primary text-white font-medium text-sm rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-neutral-700"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-200"
          >
            <nav className="max-w-container mx-auto px-6 py-4 space-y-2">
              {navItems?.map((item) => (
                <div key={item?.label ?? 'mobile-nav-item'}>
                  <Link
                    href={item?.href ?? '#'}
                    className="block px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary"
                    onClick={() => !item?.dropdown && setMobileOpen(false)}
                  >
                    {item?.label ?? ''}
                  </Link>
                  {item?.dropdown?.map((sub) =>
                    sub?.external ? (
                      <a
                        key={sub?.label ?? 'mobile-sub-item'}
                        href={sub?.href ?? '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-8 py-2 text-sm text-neutral-500 hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub?.label ?? ''}
                      </a>
                    ) : (
                      <Link
                        key={sub?.label ?? 'mobile-sub-item'}
                        href={sub?.href ?? '#'}
                        className="block px-8 py-2 text-sm text-neutral-500 hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub?.label ?? ''}
                      </Link>
                    )
                  ) ?? null}
                </div>
              )) ?? []}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full px-5 py-2.5 bg-primary text-white font-medium text-sm rounded-lg text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
