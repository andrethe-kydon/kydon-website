// Sanity Content Types

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface HeroContent {
  _id: string
  _type: 'heroSection'
  headline: string
  highlightedText: string
  subheadline: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
  stats: {
    users: string
    customers: string
    countries: string
  }
  heroImage?: SanityImage
}

export interface PillarContent {
  _id: string
  _type: 'pillar'
  title: string
  label?: string
  subtitle: string
  description: string
  icon: string
  link: string
  features: string[]
  status?: 'live' | 'coming-soon' | 'beta'
  order?: number
}

export interface TeamMember {
  _id: string
  _type: 'teamMember'
  name: string
  role: string
  bio: string
  image?: SanityImage
  order: number
}

export interface ClientLogo {
  _id: string
  _type: 'clientLogo'
  name: string
  logo?: SanityImage
  order: number
}

export interface InsightPost {
  _id: string
  _type: 'insight'
  title: string
  slug: { current: string }
  excerpt?: string
  category?: string
  publishedAt?: string
  readTime?: string
  author?: string
  image?: SanityImage
  body?: unknown[]
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  companyName: string
  tagline: string
  description: string
  contactEmail: string
  contactPhone: string
  address: string
}

// Page-specific content types
export interface PlatformPageContent {
  _id: string
  _type: 'platformPage'
  heroLabel: string
  heroHeadline: string
  heroHighlight: string
  heroDescription: string
  ctaButtonText: string
  features: Array<{
    title: string
    description: string
    visualType: string
  }>
  integrations: string[]
  ctaSectionTitle: string
  ctaSectionDescription: string
}

/*
 * Image shape produced by the projections in sanity-queries.ts. The asset
 * reference is dereferenced so `urlFor()` can build a CDN URL and so the
 * intrinsic dimensions are available -- next.config.js sets
 * `images: { unoptimized: true }`, so Next.js does no resizing of its own and
 * every image has to be sized explicitly through the Sanity CDN.
 */
export interface SanityImageAsset {
  _id: string
  url: string
  metadata?: {
    dimensions?: {
      width: number
      height: number
      aspectRatio?: number
    }
  }
}

export interface SanityImageWithAlt {
  alt?: string
  asset?: SanityImageAsset
}

/*
 * Mirrors `aiWorkforceFactoryPage` in the Studio repo
 * (kydon-sanity-studio/schemas/aiWorkforceFactoryPage.ts).
 *
 * The schema is flat with per-section name prefixes -- there are no nested
 * objects -- so these names must match it character for character. Sanity
 * silently drops keys it does not recognise, and a GROQ projection asking for
 * a field that does not exist returns null rather than erroring, so a typo
 * here surfaces as content that mysteriously never appears.
 *
 * Every field is optional: no top-level field in the schema has a required
 * validation rule, an editor can leave any of them blank, and the page falls
 * back per field to its hardcoded defaultContent.
 */
export interface AIWorkforceFactoryPageContent {
  _id: string
  _type: 'aiWorkforceFactoryPage'

  // Hero
  heroEyebrow?: string
  heroHeadline?: string
  heroDescription?: string
  heroPrimaryButtonText?: string
  heroPrimaryButtonLink?: string
  heroSecondaryButtonText?: string
  heroSecondaryButtonLink?: string
  heroIllustration?: SanityImageWithAlt

  // Stat strip. `source` is an internal citation note, never rendered.
  stats?: Array<{
    value?: string
    description?: string
    source?: string
  }>

  // Why
  whyEyebrow?: string
  whyHeading?: string
  whyIntro?: string
  whyCards?: Array<{
    title?: string
    description?: string
    icon?: string
  }>
  whyClosingLine?: string

  // Pipeline
  pipelineEyebrow?: string
  pipelineHeading?: string
  pipelineSteps?: Array<{
    number?: string
    title?: string
    description?: string
    illustration?: SanityImageWithAlt
  }>

  // National vision. The section is gated on visionApproved -- see §3 of the
  // change brief: the PM quote cannot be published without clearance.
  visionEyebrow?: string
  visionQuote?: string
  visionAttribution?: string
  visionApproved?: boolean

  // Ecosystem. The query filters partners to `approved == true`, so an entry
  // can be drafted in the Studio before brand permission arrives.
  ecosystemEyebrow?: string
  ecosystemHeading?: string
  ecosystemBody?: string
  ecosystemPartners?: Array<{
    name?: string
    logo?: SanityImageWithAlt
    url?: string
    approved?: boolean
  }>

  // Voices. Same approved filter -- an unapproved quote must not render.
  voicesEyebrow?: string
  voicesHeading?: string
  voicesQuotes?: Array<{
    quote?: string
    name?: string
    role?: string
    photo?: SanityImageWithAlt
    approved?: boolean
  }>

  // Audiences. Note the array is `audienceCards`, singular, unlike its
  // `audiencesEyebrow` / `audiencesHeading` siblings.
  audiencesEyebrow?: string
  audiencesHeading?: string
  audienceCards?: Array<{
    title?: string
    description?: string
    icon?: string
    linkLabel?: string
    linkUrl?: string
  }>

  // Final CTA
  ctaHeading?: string
  ctaPrimaryButtonText?: string
  ctaPrimaryButtonLink?: string
  ctaSecondaryButtonText?: string
  ctaSecondaryButtonLink?: string
}


export interface AILearningEnginePageContent {
  _id: string
  _type: 'aiLearningEnginePage'
  heroLabel: string
  heroHeadline: string
  heroHighlight: string
  heroDescription: string
  ctaButtonText: string
  capabilities: Array<{
    title: string
    description: string
  }>
  licensingTitle: string
  licensingDescription: string
  licensingOptions: string[]
}

export interface CompanyPageContent {
  _id: string
  _type: 'companyPage'
  heroHeadline: string
  heroHighlight: string
  heroDescription: string
  missionTitle: string
  missionDescription: string
  visionTitle: string
  visionDescription: string
  stats: Array<{
    value: string
    label: string
  }>
  teamSectionTitle: string
}

export interface ContactPageContent {
  _id: string
  _type: 'contactPage'
  heroHeadline: string
  heroHighlight: string
  heroDescription: string
  formTitle: string
  contactEmail: string
  contactPhone: string
  officeAddress: string
  hubspotPortalId?: string
  hubspotFormId?: string
  hubspotEmbedCode?: string
}

export interface SolutionPageContent {
  _id: string
  _type: 'solutionPage'
  slug: string
  heroLabel: string
  heroHeadline: string
  heroHighlight: string
  heroDescription: string
  ctaButtonText: string
  benefits: Array<{
    title: string
    description: string
  }>
  useCases: string[]
}

export interface BusinessPageContent {
  _id: string
  _type: 'businessPage'
  slug: string
  heroHeadline: string
  heroHighlight: string
  heroDescription: string
  ctaButtonText: string
  aboutTitle: string
  aboutDescription: string
  services: Array<{
    title: string
    description: string
  }>
}
