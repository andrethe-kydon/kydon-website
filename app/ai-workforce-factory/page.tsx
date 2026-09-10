import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Building2,
  CircleSlash,
  Image as ImageIcon,
  Landmark,
  MessageSquare,
  Quote,
  User,
  Users,
} from 'lucide-react'
import { getAIWorkforceFactoryPageContent } from '@/lib/sanity-queries'
import { urlFor } from '@/lib/sanity'
import type { SanityImageWithAlt } from '@/lib/sanity-types'
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'AI Workforce Factory - Train, Deploy, Hire AI Operators | Kydon',
  description:
    "Kydon's AI Workforce Factory trains everyday professionals into AI operators, places them inside real companies doing real AI work, and gives Singapore's SMEs access to AI capability they could not otherwise afford. Training delivered through Future Edge Institute.",
  openGraph: {
    title: 'AI Workforce Factory | Kydon',
    description:
      "Training, proof of work, and placement in a single pipeline — building the workforce Singapore's AI economy actually needs.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workforce Factory | Kydon',
    description: "Building the workforce Singapore's AI economy actually needs.",
  },
  alternates: {
    canonical: '/ai-workforce-factory',
  },
  keywords: [
    'AI Workforce Factory',
    'AI operators',
    'AI workforce Singapore',
    'AI bilingual workers',
    'SkillsFuture AI training',
    'train and place',
    'AI talent pipeline',
    'SME AI capability',
    'Future Edge Institute',
    'National AI Impact Programme',
  ],
}

export const revalidate = 60

const FEI_URL = 'https://www.futureedgeinstitute.com/'

const defaultContent = {
  hero: {
    eyebrow: 'Kydon Group · A National AI Workforce Initiative',
    headline: "Building the workforce Singapore's AI economy actually needs.",
    body: 'The AI Workforce Factory trains everyday professionals into AI operators, places them inside real companies doing real AI work, and gives SMEs access to capability they could never otherwise afford. Training is delivered through Future Edge Institute (FEI), Kydon’s dedicated training institute.',
    primaryCta: { label: 'Explore the training programme', url: FEI_URL },
    secondaryCta: { label: 'Partner with us', url: '/contact' },
    illustration: {
      description:
        'Hero visual — a person and an AI interface working together (holographic panels, data streams, a confident forward-facing pose). Build in Canva.',
      dimensions: 'Suggested: 1200 × 1400px',
    },
  },
  stats: [
    {
      value: '100,000',
      description:
        'workers Singapore aims to make “AI Bilingual” under the National AI Impact Programme — pairing domain expertise with real AI capability. That’s exactly the profile this Factory produces.',
    },
    {
      value: '84,000',
      description:
        'AI-related job openings in Singapore last year — against roughly 16,000 tech graduates a year to fill them. The gap is the opportunity.',
    },
    {
      value: 'S$1B+',
      description:
        'committed by the Singapore government to AI research and talent development through 2030 — this is national infrastructure, not a side bet.',
    },
  ],
  why: {
    eyebrow: 'Why we built this',
    heading: "There's no shortage of AI. There's a shortage of people who can run it.",
    intro:
      'Every company can buy the same AI tools. Almost none of them have enough people who can actually operate those tools inside a real business — and most training stops well short of that bar.',
    cards: [
      {
        icon: 'message-square',
        title: 'AI talk, not AI operators',
        description:
          'Most courses build familiarity. Businesses need people who can build and run AI systems end to end.',
      },
      {
        icon: 'circle-slash',
        title: 'SMEs priced out',
        description:
          'Enterprise-grade AI capability sits out of reach for most small and mid-sized companies.',
      },
      {
        icon: 'building-2',
        title: 'No bridge to real work',
        description:
          "A certificate doesn't prove capability. Employers want to see people deliver, not just attend.",
      },
    ],
    closingLine:
      'The AI Workforce Factory exists to close all three gaps at once — training, proof of work, and placement, in a single pipeline.',
  },
  pipeline: {
    eyebrow: "What we're building",
    heading: 'One pipeline: train, deploy, hire.',
    steps: [
      {
        number: '01',
        title: 'Train',
        description:
          'Working professionals — no coding background required — train under a curriculum funded up to 95% through SkillsFuture, so cost is never what decides who gets in. Delivered by Future Edge Institute (FEI), built together with Singapore Polytechnic.',
        illustration: { description: 'A learner at a workstation with layered AI/data interface panels.' },
      },
      {
        number: '02',
        title: 'Deploy',
        description:
          'Kydon employs graduates under a bridged Train-and-Place arrangement and places them inside SMEs and tech solution companies to run real AI projects.',
        illustration: { description: 'A network diagram connecting a graduate figure to several small-business icons.' },
      },
      {
        number: '03',
        title: 'Hire',
        description:
          'Companies that see the work firsthand can hire the graduate directly, or keep access to a trained AI operator at a fraction of consulting cost.',
        illustration: { description: 'A handshake or upward-trending graph motif, rendered in the same futuristic style.' },
      },
    ],
  },
  nationalVision: {
    eyebrow: 'A national ambition',
    quote:
      'We will exploit AI to grow the economy, and we will ensure that growth translates into good jobs and better wages.',
    attribution: 'Prime Minister Lawrence Wong · Budget 2026 debate wrap-up speech, 26 Feb 2026',
    clearanceNote: 'Real quote — verify against the official transcript and clear use before publishing.',
  },
  ecosystem: {
    eyebrow: "Built with Singapore's ecosystem",
    heading: "Not something we're doing alone.",
    body:
      'The AI Workforce Factory is being built in partnership with Singapore Polytechnic, and developed alongside government and industry bodies — because a workforce shift this size takes more than one company.',
    partners: [
      { name: 'Singapore Polytechnic' },
      { name: 'SWDA' },
      { name: 'IMDA' },
      { name: 'SkillsFuture Singapore' },
      { name: 'ASME' },
      { name: 'Singapore Business Federation' },
      { name: 'AI Association Singapore' },
    ],
    clearanceNote:
      'Logo placeholders. Brand permission and logo files required before publishing — showing a logo implies endorsement.',
  },
  voices: {
    eyebrow: 'In their words',
    heading: 'Why the people building this believe in it.',
    quotes: [
      {
        quote:
          "We didn't build the AI Workforce Factory to talk about AI. We built it because Singapore doesn't have enough people who can actually run it — and because a lot of capable people are being left out of that conversation. This is our way of closing that gap, at scale, with a real job on the other side of it.",
        name: 'David Yeo',
        role: 'Founder & CEO, Kydon Group',
        clearanceNote: 'Draft — rewrite in your own voice.',
      },
      {
        quote:
          'AI is only as useful as the people who can operate it inside a real business. Partnering with Kydon on the AI Workforce Factory lets us extend that principle beyond our own students — into a pipeline that trains, tests, and places AI-ready talent directly where Singapore’s economy needs it most.',
        name: 'Soh Wai Wah',
        role: 'Principal & CEO, Singapore Polytechnic',
        clearanceNote: "Proposed — pending Singapore Polytechnic's confirmation.",
      },
    ],
  },
  audiences: {
    eyebrow: "Who it's for",
    heading: 'Three groups, one factory.',
    cards: [
      {
        icon: 'users',
        title: 'For talent',
        description:
          'Reskill into an AI career. Bring your existing expertise — marketing, finance, operations, whatever it is — and add real AI capability on top of it. No coding background required.',
        linkLabel: 'See the training programme',
        linkUrl: FEI_URL,
      },
      {
        icon: 'building',
        title: 'For SMEs & enterprises',
        description:
          'Get AI capability you can actually afford. Work with a trained AI operator on a real project, or hire proven talent directly — without the cost of a full AI team or a top-tier consultancy.',
        linkLabel: 'Talk to us about your business',
        linkUrl: '/contact',
      },
      {
        icon: 'landmark',
        title: 'For government & ecosystem partners',
        description:
          "Help build this at national scale. We're working with polytechnics, statutory boards, and industry associations to make this a repeatable model for Singapore's AI workforce goals.",
        linkLabel: 'Explore a partnership',
        linkUrl: '/contact',
      },
    ],
  },
  finalCta: {
    heading: "The factory is open. Let's put it to work.",
    primaryCta: { label: 'Explore training at FEI', url: FEI_URL },
    secondaryCta: { label: 'Talk to us', url: '/contact' },
  },
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'message-square': MessageSquare,
  'circle-slash': CircleSlash,
  'building-2': Building2,
  'users': Users,
  'building': Building2,
  'landmark': Landmark,
}

// Small uppercase section label. Brand orange at full strength fails contrast
// at this size, so the pill uses the darkened link orange on a neutral tint --
// the same pattern the rest of the site settled on.
function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block px-4 py-1.5 bg-neutral-100 text-primary-darker font-semibold text-xs tracking-[0.16em] uppercase rounded-full ${className}`}
    >
      {children}
    </span>
  )
}

// The reference ships dashed placeholder boxes for art that does not exist yet.
// Kept as placeholders so the page is reviewable before the illustrations land.
function IllustrationPlaceholder({
  description,
  dimensions,
  className = '',
}: {
  description: string
  dimensions?: string
  className?: string
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2.5 text-center rounded-2xl border-[1.5px] border-dashed border-primary/40 bg-gradient-to-br from-primary/5 via-white to-neutral-50 p-7 ${className}`}
    >
      <ImageIcon className="w-8 h-8 text-primary-dark" aria-hidden="true" />
      <span className="text-xs font-semibold tracking-[0.1em] uppercase text-primary-darker">
        Illustration placeholder
      </span>
      <p className="text-sm text-neutral-600 max-w-xs">{description}</p>
      {dimensions ? <p className="text-xs italic text-neutral-500">{dimensions}</p> : null}
    </div>
  )
}

// Publication gates from the change brief, surfaced on the page itself so a
// reviewer cannot miss them. Amber is a status colour, outside the brand palette.
function ClearanceNote({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 ${className}`}
    >
      {children}
    </p>
  )
}

// next.config.js sets `images: { unoptimized: true }`, so Next.js resizes
// nothing -- every Sanity image has to be sized through the Sanity CDN via
// urlFor(). Height comes from the asset's own metadata so the box never
// reflows; fallbackHeight covers an asset whose metadata is missing.
// `format` is skipped for partner logos: they may be SVG, and the CDN does not
// transcode SVG, so forcing webp would silently do nothing.
function CmsImage({
  image,
  width,
  fallbackHeight,
  alt,
  className,
  transcode = true,
}: {
  image: SanityImageWithAlt
  width: number
  fallbackHeight: number
  alt: string
  className?: string
  transcode?: boolean
}) {
  const dims = image.asset?.metadata?.dimensions
  const height =
    dims?.width && dims?.height ? Math.round((dims.height / dims.width) * width) : fallbackHeight
  const builder = urlFor(image).width(width)
  return (
    <Image
      src={(transcode ? builder.format('webp') : builder).url()}
      alt={image.alt ?? alt}
      width={width}
      height={height}
      className={className}
    />
  )
}

function withAsset(image?: SanityImageWithAlt): SanityImageWithAlt | null {
  return image?.asset?._id ? image : null
}

function nonEmpty<T>(arr?: T[] | null): T[] | null {
  return Array.isArray(arr) && arr.length > 0 ? arr : null
}

// Blank strings in the Studio should not blank the page.
function text(value: string | undefined | null, fallback: string): string {
  const trimmed = typeof value === 'string' ? value.trim() : ''
  return trimmed.length > 0 ? trimmed : fallback
}

export default async function AIWorkforceFactoryPage() {
  const cms = await getAIWorkforceFactoryPageContent()
  const d = defaultContent

  // With no published document the page renders the hardcoded fallback, which
  // still carries the visible clearance notes marking it as pre-approval
  // review content. Once a document exists, the Studio governs -- including
  // the approved gates, which is why the gated arrays never fall back.
  const isFallback = !cms

  const content = {
    hero: {
      eyebrow: text(cms?.heroEyebrow, d.hero.eyebrow),
      headline: text(cms?.heroHeadline, d.hero.headline),
      body: text(cms?.heroDescription, d.hero.body),
      primaryCta: {
        label: text(cms?.heroPrimaryButtonText, d.hero.primaryCta.label),
        url: text(cms?.heroPrimaryButtonLink, d.hero.primaryCta.url),
      },
      secondaryCta: {
        label: text(cms?.heroSecondaryButtonText, d.hero.secondaryCta.label),
        url: text(cms?.heroSecondaryButtonLink, d.hero.secondaryCta.url),
      },
      placeholder: d.hero.illustration,
      image: withAsset(cms?.heroIllustration),
    },
    stats:
      nonEmpty(cms?.stats)?.map((s, i) => ({
        value: text(s.value, d.stats[i]?.value ?? ''),
        description: text(s.description, d.stats[i]?.description ?? ''),
      })) ?? d.stats,
    why: {
      eyebrow: text(cms?.whyEyebrow, d.why.eyebrow),
      heading: text(cms?.whyHeading, d.why.heading),
      intro: text(cms?.whyIntro, d.why.intro),
      cards:
        nonEmpty(cms?.whyCards)?.map((c, i) => ({
          icon: text(c.icon, d.why.cards[i]?.icon ?? 'message-square'),
          title: text(c.title, ''),
          description: text(c.description, ''),
        })) ?? d.why.cards,
      closingLine: text(cms?.whyClosingLine, d.why.closingLine),
    },
    pipeline: {
      eyebrow: text(cms?.pipelineEyebrow, d.pipeline.eyebrow),
      heading: text(cms?.pipelineHeading, d.pipeline.heading),
      steps:
        nonEmpty(cms?.pipelineSteps)?.map((s, i) => ({
          number: text(s.number, d.pipeline.steps[i]?.number ?? ''),
          title: text(s.title, ''),
          description: text(s.description, ''),
          placeholder: d.pipeline.steps[i]?.illustration.description ?? '',
          image: withAsset(s.illustration),
        })) ??
        d.pipeline.steps.map((s) => ({
          number: s.number,
          title: s.title,
          description: s.description,
          placeholder: s.illustration.description,
          image: null as SanityImageWithAlt | null,
        })),
    },
    nationalVision: {
      eyebrow: text(cms?.visionEyebrow, d.nationalVision.eyebrow),
      quote: text(cms?.visionQuote, d.nationalVision.quote),
      attribution: text(cms?.visionAttribution, d.nationalVision.attribution),
    },
    ecosystem: {
      eyebrow: text(cms?.ecosystemEyebrow, d.ecosystem.eyebrow),
      heading: text(cms?.ecosystemHeading, d.ecosystem.heading),
      body: text(cms?.ecosystemBody, d.ecosystem.body),
      // Gated: the query already filtered to approved == true, so an empty
      // result means nothing is cleared yet. Never fall back here -- that
      // would put an unpermissioned partner on the page.
      partners: cms
        ? (cms.ecosystemPartners ?? []).map((partner) => ({
            name: partner.name ?? '',
            logo: withAsset(partner.logo),
            url: partner.url,
          }))
        : d.ecosystem.partners.map((partner) => ({
            name: partner.name,
            logo: null as SanityImageWithAlt | null,
            url: undefined as string | undefined,
          })),
      clearanceNote: d.ecosystem.clearanceNote,
    },
    voices: {
      eyebrow: text(cms?.voicesEyebrow, d.voices.eyebrow),
      heading: text(cms?.voicesHeading, d.voices.heading),
      // Gated in the same way: an unapproved quote must not render.
      quotes: cms
        ? (cms.voicesQuotes ?? []).map((entry) => ({
            quote: entry.quote ?? '',
            name: entry.name ?? '',
            role: entry.role ?? '',
            photo: withAsset(entry.photo),
            clearanceNote: '',
          }))
        : d.voices.quotes.map((entry) => ({
            quote: entry.quote,
            name: entry.name,
            role: entry.role,
            photo: null as SanityImageWithAlt | null,
            clearanceNote: entry.clearanceNote,
          })),
    },
    audiences: {
      eyebrow: text(cms?.audiencesEyebrow, d.audiences.eyebrow),
      heading: text(cms?.audiencesHeading, d.audiences.heading),
      cards:
        nonEmpty(cms?.audienceCards)?.map((c, i) => ({
          icon: text(c.icon, d.audiences.cards[i]?.icon ?? 'users'),
          title: text(c.title, ''),
          description: text(c.description, ''),
          linkLabel: text(c.linkLabel, ''),
          linkUrl: text(c.linkUrl, '/contact'),
        })) ?? d.audiences.cards,
    },
    finalCta: {
      heading: text(cms?.ctaHeading, d.finalCta.heading),
      primaryCta: {
        label: text(cms?.ctaPrimaryButtonText, d.finalCta.primaryCta.label),
        url: text(cms?.ctaPrimaryButtonLink, d.finalCta.primaryCta.url),
      },
      secondaryCta: {
        label: text(cms?.ctaSecondaryButtonText, d.finalCta.secondaryCta.label),
        url: text(cms?.ctaSecondaryButtonLink, d.finalCta.secondaryCta.url),
      },
    },
  }

  // The PM quote is a hard publication gate, and it fails closed: the section
  // renders only on an explicit visionApproved === true from the Studio. No
  // published document, an unreachable Sanity, or an unset flag all mean the
  // quote stays off the page -- an unverified attribution to the Prime
  // Minister is not something the defaultContent fallback should ever put up.
  const showVision = cms?.visionApproved === true

  return (
    <>
      <ServiceSchema
        name="Kydon AI Workforce Factory"
        description="A train, deploy and hire pipeline that turns working professionals into AI operators and places them inside Singapore's SMEs and tech solution companies."
        url="https://kydongrp.com/ai-workforce-factory"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://kydongrp.com' },
          { name: 'AI Workforce Factory', url: 'https://kydongrp.com/ai-workforce-factory' },
        ]}
      />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary/5">
          <div className="max-w-container mx-auto px-6">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
              <div>
                <Eyebrow>{content.hero.eyebrow}</Eyebrow>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-5 mb-6 leading-tight">
                  {content.hero.headline}
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-9 leading-relaxed">
                  {content.hero.body}
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <a
                    href={content.hero.primaryCta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-darker transition-all shadow-lg shadow-primary/25"
                  >
                    {content.hero.primaryCta.label}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <Link
                    href={content.hero.secondaryCta.url}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary-dark font-semibold rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all"
                  >
                    {content.hero.secondaryCta.label}
                  </Link>
                </div>
              </div>
              {content.hero.image ? (
                <CmsImage
                  image={content.hero.image}
                  width={1200}
                  fallbackHeight={1400}
                  alt={content.hero.headline}
                  className="w-full h-auto rounded-2xl"
                />
              ) : (
                <IllustrationPlaceholder
                  description={content.hero.placeholder.description}
                  dimensions={content.hero.placeholder.dimensions}
                  className="min-h-[380px]"
                />
              )}
            </div>
          </div>
        </section>

        {/* Stat strip */}
        <section className="py-16 bg-white">
          <div className="max-w-container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {content.stats.map((stat, i) => (
                <div
                  key={stat?.value ?? `stat-${i}`}
                  className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-xl transition-all card-hover"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-3">
                    {stat?.value ?? ''}
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {stat?.description ?? ''}
                  </p>
                </div>
              ))}
            </div>
            {isFallback ? (
              <ClearanceNote className="mt-6">
                Figures unsourced in the design reference — verify each against its primary source
                and keep a citation record before publishing.
              </ClearanceNote>
            ) : null}
          </div>
        </section>

        {/* Why */}
        <section id="why" className="py-20 bg-neutral-50">
          <div className="max-w-container mx-auto px-6">
            <Eyebrow>{content.why.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 max-w-3xl mt-5 mb-5 leading-tight">
              {content.why.heading}
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl leading-relaxed">{content.why.intro}</p>

            <div className="grid md:grid-cols-3 gap-6 mt-11">
              {content.why.cards.map((card, i) => {
                const IconComponent = iconMap[card?.icon ?? 'message-square'] ?? MessageSquare
                return (
                  <div
                    key={card?.title ?? `why-${i}`}
                    className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-xl transition-all card-hover"
                  >
                    <IconComponent className="w-6 h-6 text-primary-dark mb-4" />
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{card?.title ?? ''}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {card?.description ?? ''}
                    </p>
                  </div>
                )
              })}
            </div>

            <p className="text-base md:text-lg font-medium text-neutral-900 max-w-3xl mt-10 leading-relaxed">
              {content.why.closingLine}
            </p>
          </div>
        </section>

        {/* Pipeline */}
        <section id="pipeline" className="py-20 bg-white">
          <div className="max-w-container mx-auto px-6">
            <Eyebrow>{content.pipeline.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 max-w-2xl mt-5">
              {content.pipeline.heading}
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {content.pipeline.steps.map((step, i) => (
                <div key={step?.number ?? `step-${i}`} className="flex flex-col">
                  <div className="font-display w-11 h-11 rounded-full bg-primary-dark text-white flex items-center justify-center font-bold shadow-lg shadow-primary/25">
                    {step?.number ?? ''}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mt-4 mb-2">
                    {step?.title ?? ''}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed flex-grow">
                    {step?.description ?? ''}
                  </p>
                  {step?.image ? (
                    <CmsImage
                      image={step.image}
                      width={800}
                      fallbackHeight={600}
                      alt={step?.title ?? ''}
                      className="w-full h-auto rounded-2xl mt-5"
                    />
                  ) : (
                    <IllustrationPlaceholder
                      description={step?.placeholder ?? ''}
                      className="mt-5 min-h-[150px]"
                    />
                  )}
                </div>
              ))}
            </div>

            {isFallback ? (
              <ClearanceNote className="mt-8">
                Claims to confirm as contractually accurate and currently true: “funded up to 95%
                through SkillsFuture”, “built together with Singapore Polytechnic”, and the bridged
                Train-and-Place employment arrangement.
              </ClearanceNote>
            ) : null}
          </div>
        </section>

        {/* National vision - hidden until visionApproved is set in the Studio */}
        {showVision ? (
        <section className="py-20 bg-neutral-50 border-t-2 border-primary/30">
          <div className="max-w-container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Eyebrow>{content.nationalVision.eyebrow}</Eyebrow>
              <Quote className="w-10 h-10 text-primary mx-auto mt-6" aria-hidden="true" />
              <blockquote className="text-xl md:text-2xl italic text-neutral-700 mt-5 leading-relaxed">
                &ldquo;{content.nationalVision.quote}&rdquo;
              </blockquote>
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-600 mt-6">
                &mdash; {content.nationalVision.attribution}
              </p>
            </div>
          </div>
        </section>
        ) : null}

        {/* Ecosystem */}
        <section id="ecosystem" className="py-20 bg-white">
          <div className="max-w-container mx-auto px-6">
            <Eyebrow>{content.ecosystem.eyebrow}</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 max-w-2xl mt-5 mb-4">
              {content.ecosystem.heading}
            </h2>
            <p className="text-base text-neutral-600 max-w-3xl leading-relaxed">
              {content.ecosystem.body}
            </p>

            {content.ecosystem.partners.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {content.ecosystem.partners.map((partner, i) => (
                  <div
                    key={partner?.name ?? `partner-${i}`}
                    className={`h-[84px] px-4 py-2 flex flex-col items-center justify-center gap-1 text-center rounded-xl ${
                      partner.logo
                        ? 'border border-neutral-100 bg-white shadow-sm'
                        : 'border-[1.5px] border-dashed border-neutral-300 bg-neutral-50'
                    }`}
                  >
                    {partner.logo ? (
                      <CmsImage
                        image={partner.logo}
                        width={300}
                        fallbackHeight={100}
                        alt={partner?.name ?? ''}
                        className="max-h-[60px] w-auto object-contain"
                        transcode={false}
                      />
                    ) : (
                      <>
                        <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-neutral-500">
                          Logo
                        </span>
                        <span className="text-sm font-semibold text-neutral-700 leading-snug">
                          {partner?.name ?? ''}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ) : null}

            {isFallback ? (
              <ClearanceNote className="mt-6">{content.ecosystem.clearanceNote}</ClearanceNote>
            ) : null}
          </div>
        </section>

        {/* Voices - only approved quotes reach this array */}
        {content.voices.quotes.length > 0 ? (
        <section id="voices" className="py-20 bg-neutral-50">
          <div className="max-w-container mx-auto px-6">
            <Eyebrow>{content.voices.eyebrow}</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 max-w-2xl mt-5">
              {content.voices.heading}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {content.voices.quotes.map((entry, i) => (
                <div
                  key={entry?.name ?? `voice-${i}`}
                  className="bg-white rounded-2xl p-7 border border-neutral-100 shadow-sm hover:shadow-xl transition-all card-hover flex flex-col sm:flex-row gap-5 items-start"
                >
                  {entry?.photo ? (
                    <CmsImage
                      image={entry.photo}
                      width={176}
                      fallbackHeight={176}
                      alt={entry?.name ?? ''}
                      className="w-[88px] h-[88px] flex-shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-[88px] h-[88px] flex-shrink-0 rounded-full border-[1.5px] border-dashed border-neutral-300 bg-neutral-50 flex items-center justify-center">
                      <User className="w-8 h-8 text-neutral-400" aria-hidden="true" />
                    </div>
                  )}
                  <div>
                    <blockquote className="text-[15px] italic text-neutral-600 leading-relaxed">
                      &ldquo;{entry?.quote ?? ''}&rdquo;
                    </blockquote>
                    <p className="text-sm font-bold text-neutral-900 mt-4">{entry?.name ?? ''}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600 mt-1">
                      {entry?.role ?? ''}
                    </p>
                    {entry?.clearanceNote ? (
                      <ClearanceNote className="mt-3">{entry.clearanceNote}</ClearanceNote>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        ) : null}

        {/* Audiences */}
        <section id="audiences" className="py-20 bg-white">
          <div className="max-w-container mx-auto px-6">
            <Eyebrow>{content.audiences.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 max-w-2xl mt-5">
              {content.audiences.heading}
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-11">
              {content.audiences.cards.map((card, i) => {
                const IconComponent = iconMap[card?.icon ?? 'users'] ?? Users
                const isExternal = card?.linkUrl?.startsWith('http')
                return (
                  <div
                    key={card?.title ?? `audience-${i}`}
                    className="bg-white rounded-2xl p-7 border border-neutral-100 shadow-sm hover:shadow-xl transition-all card-hover flex flex-col"
                  >
                    <IconComponent className="w-7 h-7 text-primary-dark" />
                    <h3 className="text-lg font-bold text-neutral-900 mt-4 mb-2">
                      {card?.title ?? ''}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed flex-grow">
                      {card?.description ?? ''}
                    </p>
                    {isExternal ? (
                      <a
                        href={card.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-dark font-semibold text-sm mt-5 hover:gap-3 transition-all"
                      >
                        {card?.linkLabel ?? ''}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        href={card?.linkUrl ?? '/contact'}
                        className="inline-flex items-center gap-2 text-primary-dark font-semibold text-sm mt-5 hover:gap-3 transition-all"
                      >
                        {card?.linkLabel ?? ''}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-container mx-auto px-6">
            <div className="bg-gradient-to-br from-primary to-primary-darker rounded-3xl p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white max-w-lg leading-tight text-balance">
                {content.finalCta.heading}
              </h2>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href={content.finalCta.primaryCta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-darker font-semibold rounded-xl hover:bg-neutral-200 hover:shadow-lg transition-all whitespace-nowrap"
                >
                  {content.finalCta.primaryCta.label}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href={content.finalCta.secondaryCta.url}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border-2 border-white/60 hover:bg-white/20 transition-all whitespace-nowrap"
                >
                  {content.finalCta.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
