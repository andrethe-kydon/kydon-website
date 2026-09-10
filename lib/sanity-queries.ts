import { sanityClient, sanityClientNoCdn, isSanityConfigured } from './sanity'
import type { 
  HeroContent, 
  PillarContent, 
  TeamMember, 
  ClientLogo, 
  InsightPost,
  SiteSettings,
  PlatformPageContent,
  AIWorkforceFactoryPageContent,
  AILearningEnginePageContent,
  CompanyPageContent,
  ContactPageContent,
  SolutionPageContent,
  BusinessPageContent
} from './sanity-types'

// Fetch hero section content
export async function getHeroContent(): Promise<HeroContent | null> {
  if (!isSanityConfigured()) return null
  
  try {
    const query = `*[_type == "heroSection"][0]`
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching hero content:', error)
    return null
  }
}

// Fetch pillars (AI Platform, AI Workforce Factory, AI Learning Engine)
export async function getPillars(): Promise<PillarContent[]> {
  if (!isSanityConfigured()) return []
  
  try {
    const query = `*[_type == "pillar"] | order(order asc)`
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching pillars:', error)
    return []
  }
}

// Fetch team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  if (!isSanityConfigured()) return []
  
  try {
    const query = `*[_type == "teamMember"] | order(order asc)`
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

// Fetch client logos
export async function getClientLogos(): Promise<ClientLogo[]> {
  if (!isSanityConfigured()) return []
  
  try {
    const query = `*[_type == "clientLogo"] | order(order asc)`
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching client logos:', error)
    return []
  }
}

// Fetch insights/blog posts
export async function getInsights(limit?: number): Promise<InsightPost[]> {
  if (!isSanityConfigured()) return []
  
  try {
    const limitClause = limit ? `[0...${limit}]` : ''
    const query = `*[_type == "insight"] | order(publishedAt desc)${limitClause}`
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching insights:', error)
    return []
  }
}

// Fetch site settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!isSanityConfigured()) return null
  
  try {
    const query = `*[_type == "siteSettings"][0]`
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

// Tracking & Analytics settings
export interface TrackingSettings {
  gtmEnabled?: boolean
  gtmId?: string
  gaEnabled?: boolean
  gaMeasurementId?: string
  fbPixelEnabled?: boolean
  fbPixelId?: string
  customHeadScripts?: string
  customBodyScripts?: string
}

export async function getTrackingSettings(): Promise<TrackingSettings | null> {
  if (!isSanityConfigured()) return null

  try {
    const query = `*[_type == "trackingSettings"][0]{
      gtmEnabled,
      gtmId,
      gaEnabled,
      gaMeasurementId,
      fbPixelEnabled,
      fbPixelId,
      customHeadScripts,
      customBodyScripts
    }`
    // Use non-CDN client to always get the latest tracking settings
    return await sanityClientNoCdn.fetch(query)
  } catch (error) {
    console.error('Error fetching tracking settings:', error)
    return null
  }
}

// Page-specific queries
export async function getPlatformPageContent(): Promise<PlatformPageContent | null> {
  if (!isSanityConfigured()) return null
  
  try {
    const query = `*[_type == "platformPage"][0]`
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching platform page:', error)
    return null
  }
}

/*
 * A bare `*[_type == "..."][0]` returns image fields as unresolved asset
 * references, which urlFor() cannot size and which carry no alt text, so this
 * query projects explicitly.
 *
 * Two of the arrays are filtered on `approved == true`. That is a publication
 * gate, not a display preference: partner logos need written brand permission
 * (showing one implies endorsement) and an attributed quote needs the person's
 * sign-off. Filtering here means an editor can draft either in the Studio
 * without it appearing live. Do not remove these filters.
 */
const AI_WORKFORCE_FACTORY_QUERY = `*[_type == "aiWorkforceFactoryPage"][0]{
  _id,
  _type,
  heroEyebrow,
  heroHeadline,
  heroDescription,
  heroPrimaryButtonText,
  heroPrimaryButtonLink,
  heroSecondaryButtonText,
  heroSecondaryButtonLink,
  heroIllustration{
    alt,
    asset->{_id, url, metadata{dimensions}}
  },
  stats[]{value, description, source},
  whyEyebrow,
  whyHeading,
  whyIntro,
  whyCards[]{title, description, icon},
  whyClosingLine,
  pipelineEyebrow,
  pipelineHeading,
  pipelineSteps[]{
    number,
    title,
    description,
    illustration{
      alt,
      asset->{_id, url, metadata{dimensions}}
    }
  },
  visionEyebrow,
  visionQuote,
  visionAttribution,
  visionApproved,
  ecosystemEyebrow,
  ecosystemHeading,
  ecosystemBody,
  "ecosystemPartners": ecosystemPartners[approved == true]{
    name,
    url,
    approved,
    logo{
      alt,
      asset->{_id, url, metadata{dimensions}}
    }
  },
  voicesEyebrow,
  voicesHeading,
  "voicesQuotes": voicesQuotes[approved == true]{
    quote,
    name,
    role,
    approved,
    photo{
      alt,
      asset->{_id, url, metadata{dimensions}}
    }
  },
  audiencesEyebrow,
  audiencesHeading,
  audienceCards[]{title, description, icon, linkLabel, linkUrl},
  ctaHeading,
  ctaPrimaryButtonText,
  ctaPrimaryButtonLink,
  ctaSecondaryButtonText,
  ctaSecondaryButtonLink
}`

export async function getAIWorkforceFactoryPageContent(): Promise<AIWorkforceFactoryPageContent | null> {
  if (!isSanityConfigured()) return null

  try {
    return await sanityClient.fetch(AI_WORKFORCE_FACTORY_QUERY)
  } catch (error) {
    console.error('Error fetching AI workforce factory page:', error)
    return null
  }
}


export async function getAILearningEnginePageContent(): Promise<AILearningEnginePageContent | null> {
  if (!isSanityConfigured()) return null
  
  try {
    const query = `*[_type == "aiLearningEnginePage"][0]`
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching AI learning engine page:', error)
    return null
  }
}

export async function getCompanyPageContent(): Promise<CompanyPageContent | null> {
  if (!isSanityConfigured()) return null
  
  try {
    const query = `*[_type == "companyPage"][0]`
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching company page:', error)
    return null
  }
}

export async function getContactPageContent(): Promise<ContactPageContent | null> {
  if (!isSanityConfigured()) return null
  
  try {
    const query = `*[_type == "contactPage"][0]`
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching contact page:', error)
    return null
  }
}

export async function getSolutionPageContent(slug: string): Promise<SolutionPageContent | null> {
  if (!isSanityConfigured()) return null
  
  try {
    const query = `*[_type == "solutionPage" && slug == $slug][0]`
    return await sanityClient.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching solution page:', error)
    return null
  }
}

export async function getBusinessPageContent(slug: string): Promise<BusinessPageContent | null> {
  if (!isSanityConfigured()) return null
  
  try {
    const query = `*[_type == "businessPage" && slug == $slug][0]`
    return await sanityClient.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching business page:', error)
    return null
  }
}

// Fetch active job positions
export async function getJobPositions(): Promise<JobPosition[]> {
  if (!isSanityConfigured()) return []
  
  try {
    const query = `*[_type == "jobPosition" && isActive == true] | order(order asc, publishedAt desc) {
      _id,
      title,
      department,
      location,
      employmentType,
      description,
      responsibilities,
      requirements,
      niceToHave,
      applyUrl,
      applyEmail,
      publishedAt
    }`
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching job positions:', error)
    return []
  }
}

export interface JobPosition {
  _id: string
  title: string
  department: string
  location: string
  employmentType: string
  description: string
  responsibilities?: string[]
  requirements?: string[]
  niceToHave?: string[]
  applyUrl?: string
  applyEmail?: string
  publishedAt?: string
}
