'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ClientLogo {
  name: string
  logoUrl?: string
}

interface SocialProofSectionProps {
  clients?: ClientLogo[]
}

const defaultClients: ClientLogo[] = [
  { name: 'MINDEF Singapore', logoUrl: '/images/clients/mindef-singapore.png' },
  { name: 'Ministry of Education', logoUrl: '/images/clients/moe-singapore.png' },
  { name: 'Ministry of Home Affairs', logoUrl: '/images/clients/mha-singapore.png' },
  { name: "People's Association", logoUrl: '/images/clients/peoples-association.png' },
  { name: 'Korn Ferry', logoUrl: '/images/clients/korn-ferry.png' },
  { name: 'ResMed', logoUrl: '/images/clients/resmed.png' },
  { name: 'Australian Volunteers', logoUrl: '/images/clients/australian-volunteers.png' },
  { name: 'UWC South East Asia', logoUrl: '/images/clients/uwc-sea.png' },
]

export function SocialProofSection({ clients }: SocialProofSectionProps) {
  const data = clients && clients.length > 0 ? clients : defaultClients
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 5)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const scrollAmount = el.clientWidth * 0.6
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-16 bg-white border-y border-neutral-100">
      <div className="max-w-container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-neutral-500 text-sm font-medium mb-10 uppercase tracking-wider"
        >
          Trusted by enterprises and governments
        </motion.p>

        <div className="relative group">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center transition-all duration-200 hover:bg-neutral-50 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-600" />
          </button>

          {/* Left fade */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-[5] pointer-events-none transition-opacity duration-200 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-8 md:gap-12 overflow-x-auto scrollbar-hide px-4 py-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {data?.map((client, i) => (
              <motion.div
                key={client?.name ?? `client-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex-shrink-0 flex items-center justify-center"
              >
                {client?.logoUrl ? (
                  <div className="relative h-16 w-40 md:h-20 md:w-48 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <Image
                      src={client.logoUrl}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain p-1"
                      sizes="192px"
                    />
                  </div>
                ) : (
                  <span className="text-neutral-400 font-medium text-sm md:text-base hover:text-primary transition-colors cursor-default whitespace-nowrap">
                    {client?.name ?? ''}
                  </span>
                )}
              </motion.div>
            )) ?? []}
          </div>

          {/* Right fade */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-[5] pointer-events-none transition-opacity duration-200 ${
              canScrollRight ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center transition-all duration-200 hover:bg-neutral-50 ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-neutral-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
