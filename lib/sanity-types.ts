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

export interface AIUniversityPageContent {
  _id: string
  _type: 'aiUniversityPage'
  heroLabel: string
  heroHeadline: string
  heroHighlight: string
  heroDescription: string
  primaryButtonText: string
  secondaryButtonText: string
  tracksSectionTitle: string
  tracksSectionDescription: string
  tracks: Array<{
    title: string
    description: string
    icon: string
    color: string
  }>
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
