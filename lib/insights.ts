import { sanityClient, urlFor } from '@/lib/sanity'

/** An insight article as the site's cards and lists need it. */
export interface InsightCard {
  title: string
  slug: string
  category: string
  date: string // display date, e.g. "13 May 2026"
  publishedAt?: string
  excerpt?: string
  image?: string // absolute or site-relative image URL
}

/** Photos used when an article has no cover image in Sanity. */
const FALLBACK_IMAGES = [
  '/images/site/metro-reading.jpg',
  '/images/site/photo-444a8907.jpg',
  '/images/site/photo-444a8290.jpg',
  '/images/site/server-room.jpg',
  '/images/site/photo-img-08.jpg',
  '/images/site/bridge.jpg',
]

/**
 * Used only if Sanity cannot be reached, so the page never renders empty.
 * The live list always comes from Sanity.
 */
const FALLBACK: [string, string, string][] = [
  ['how-agentic-ai-closes-the-training-to-performance-gap', 'In-Workflow Learning Agents: How Agentic AI Closes the Training-to-Performance Gap', '2026-05-13'],
  ['tribal-knowledge-is-a-liability-how-ai-turns-institutional-habits-into-organisational', 'Tribal Knowledge Is a Liability: How AI Turns Institutional Habits Into Organisational Intelligence', '2026-06-26'],
  ['the-hybrid-org-chart-designing-teams-for-a-world-of-humans-and-ai-agents', 'The Hybrid Org Chart: Designing Teams for a World of Humans and AI Agents', '2026-06-10'],
  ['from-shadow-ai-to-governed-agents-how-enterprises-are-replacing-risk-with-capability', 'From Shadow AI to Governed Agents: How Enterprises Are Replacing Risk With Capability', '2026-05-08'],
  ['enterprises-need-an-agentic-layer', "Enterprises Don't Need More AI Tools. They Need an Agentic Layer.", '2026-04-22'],
  ['the-three-outcomes-that-should-drive-every-enterprise-ai-strategy', 'The Three Outcomes That Should Drive Every Enterprise AI Strategy', '2026-05-13'],
  ['the-h2-ai-planning-conversation-how-30-minutes-now-saves-six-months-of-misalignment-later', 'The H2 AI Planning Conversation: How 30 Minutes Now Saves Six Months of Misalignment Later', '2026-06-26'],
  ['vendor-vs-partner-why-long-term-ai-enablement-relationships-deliver-compounding-enterprise-value', 'Vendor vs Partner: Why Long-Term AI Enablement Relationships Deliver Compounding Enterprise Value', '2026-06-26'],
  ['ai-stack-rationalisation-how-to-cut-redundant-tool-spend-and-invest-in-what-actually-works', 'AI Stack Rationalisation: How to Cut Redundant Tool Spend and Invest in What Actually Works', '2026-06-26'],
  ['navigating-the-ai-vendor-explosion-a-strategic-framework-for-enterprise-tool-selection', 'Navigating the AI Vendor Explosion: A Strategic Framework for Enterprise Tool Selection', '2026-06-26'],
  ['the-ai-knowledge-agent-how-to-give-every-employee-instant-access-to-your-organisation-s', "The AI Knowledge Agent: How to Give Every Employee Instant Access to Your Organisation's Collective Intelligence", '2026-06-26'],
  ['ai-workforce-mapping-the-strategic-workshop-for-hr-leaders-planning-2027', 'AI Workforce Mapping: The Strategic Workshop for HR Leaders Planning 2027', '2026-06-26'],
  ['rewriting-the-ai-narrative-how-to-move-your-workforce-from-fear-to-confidence', 'Rewriting the AI Narrative: How to Move Your Workforce From Fear to Confidence', '2026-06-26'],
  ['the-ai-champions-programme-a-4-week-blueprint-for-middle-management-transformation', 'The AI Champions Programme: A 4-Week Blueprint for Middle Management Transformation', '2026-06-26'],
  ['responsible-ai-as-strategy-how-ethical-ai-deployment-becomes-a-market-differentiator', 'Responsible AI as Strategy: How Ethical AI Deployment Becomes a Market Differentiator', '2026-06-24'],
  ['ai-role-mapping-a-practical-framework-for-workforce-redesign', 'AI Role Mapping: A Practical Framework for Workforce Redesign', '2026-06-10'],
  ['beyond-the-skills-gap-the-real-reason-your-team-isn-t-adopting-ai', "Beyond the Skills Gap: The Real Reason Your Team Isn't Adopting AI", '2026-06-03'],
  ['blueprint-enterprise-ai-training-at-scale', 'A Blueprint for Enterprise AI Training at Scale', '2026-03-25'],
]

export function formatDate(iso?: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Singapore' })
}

function fallbackCards(): InsightCard[] {
  return FALLBACK.map(([slug, title, iso], i) => ({
    slug, title, category: 'AI Trends', publishedAt: iso, date: formatDate(iso),
    image: FALLBACK_IMAGES[i % FALLBACK_IMAGES.length],
  }))
}

interface RawInsight {
  title?: string
  slug?: { current?: string }
  category?: string
  publishedAt?: string
  excerpt?: string
  image?: { asset?: { _ref?: string } }
}

function toCard(r: RawInsight, i: number): InsightCard | null {
  const slug = r.slug?.current
  if (!slug || !r.title) return null
  let image: string | undefined
  try {
    if (r.image?.asset) image = urlFor(r.image).width(960).height(540).fit('crop').url()
  } catch {
    image = undefined
  }
  return {
    slug,
    title: r.title,
    category: r.category || 'Insights',
    publishedAt: r.publishedAt,
    date: formatDate(r.publishedAt),
    excerpt: r.excerpt,
    image: image || FALLBACK_IMAGES[i % FALLBACK_IMAGES.length],
  }
}

/** All insight articles, newest first. Falls back to a fixed list if Sanity is unreachable. */
export async function getInsightCards(): Promise<InsightCard[]> {
  try {
    const raw: RawInsight[] = await sanityClient.fetch(
      `*[_type == "insight" && defined(slug.current)] | order(publishedAt desc){title, slug, category, publishedAt, excerpt, image}`
    )
    const cards = (raw || []).map(toCard).filter((c): c is InsightCard => !!c)
    return cards.length ? cards : fallbackCards()
  } catch (e) {
    console.error('Insights: Sanity unavailable, using fallback list', e)
    return fallbackCards()
  }
}

/** Look up specific articles by slug, keeping the given order; missing ones are skipped. */
export async function getInsightCardsBySlug(slugs: string[]): Promise<InsightCard[]> {
  const all = await getInsightCards()
  const picked = slugs.map((s) => all.find((c) => c.slug === s)).filter((c): c is InsightCard => !!c)
  return picked.length ? picked : all.slice(0, slugs.length)
}
