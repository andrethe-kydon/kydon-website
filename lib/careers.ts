import { getJobPositions, type JobPosition } from '@/lib/sanity-queries'

export const DEPARTMENTS: Record<string, string> = {
  engineering: 'Engineering', product: 'Product', design: 'Design', sales: 'Sales', marketing: 'Marketing',
  operations: 'Operations', hr: 'People', finance: 'Finance', learning: 'Learning', 'customer-success': 'Customer Success',
}
export const EMPLOYMENT: Record<string, string> = {
  'full-time': 'Full-time', 'part-time': 'Part-time', contract: 'Contract', internship: 'Internship',
}

export const CAREERS_EMAIL = 'contact@kydongrp.com'

/** One row in the open-roles list. */
export interface RoleRow {
  title: string
  summary: string
  department: string
  location: string
  type: string
  href: string
}

/** Shown only when Sanity has no active positions or cannot be reached. */
const FALLBACK_ROLES: RoleRow[] = [
  {
    title: 'Solutions Associate (Pre-Sales and Account Growth)',
    summary: "Learn the full sales cycle, building pipeline across enterprise and government clients with the Business Unit Lead. 1 to 2 years' experience.",
    department: 'Sales', location: 'Singapore', type: 'Full-time',
    href: `mailto:${CAREERS_EMAIL}?subject=Solutions%20Associate%20application`,
  },
]

function firstSentence(s?: string): string {
  if (!s) return ''
  const m = s.match(/^(.{40,220}?[.!?])(\s|$)/)
  return m ? m[1] : s.slice(0, 220)
}

export function applyHref(p: JobPosition): string {
  if (p.applyUrl) return p.applyUrl
  const email = p.applyEmail || CAREERS_EMAIL
  return `mailto:${email}?subject=${encodeURIComponent(`${p.title} application`)}`
}

export async function getRoleRows(): Promise<RoleRow[]> {
  const positions = await getJobPositions()
  if (!positions?.length) return FALLBACK_ROLES
  return positions.map((p) => ({
    title: p.title,
    summary: firstSentence(p.description),
    department: DEPARTMENTS[p.department] || p.department || '',
    location: p.location || '',
    type: EMPLOYMENT[p.employmentType] || p.employmentType || '',
    href: `/careers/${p._id}`,
  }))
}

export async function getPosition(id: string): Promise<JobPosition | undefined> {
  const positions = await getJobPositions()
  return positions.find((p) => p._id === id)
}
