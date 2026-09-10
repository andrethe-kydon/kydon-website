// CMS Content with Fallback Defaults
// This file contains default content that can be overridden by Sanity CMS

import { getHeroContent, getPillars, getTeamMembers, getClientLogos, getInsights, getSiteSettings } from './sanity-queries'
import { urlFor } from './sanity'

// Type for pillar data
export type PillarStatus = 'live' | 'coming-soon' | 'beta' | null | undefined

export interface PillarData {
  title: string
  subtitle: string
  label: string
  description?: string
  icon: string
  link: string
  status: PillarStatus
  features: string[]
}

// Default Hero Content (used when CMS has no content)
export const defaultHeroContent = {
  headline: 'The Operating System for the',
  highlightedText: 'AI-Ready Workforce',
  subheadline: 'The Agentic AI Learning stack that delivers skills and elevates performance outcomes for enterprises',
  primaryButtonText: 'Contact Us',
  primaryButtonLink: '/contact',
  secondaryButtonText: 'Explore the Intelligence Stack',
  secondaryButtonLink: '/platform',
  stats: {
    users: '100K+',
    customers: '100+',
    countries: '10',
  },
  heroImage: undefined,
}

// Default Pillars Content
export const defaultPillars: PillarData[] = [
  {
    title: 'AI Learning Platform',
    subtitle: 'Agentic Learning OS',
    label: 'Orchestration Layer',
    description: 'Our flagship platform that orchestrates personalized learning journeys using AI agents that adapt to each learner\'s pace, preferences, and performance goals.',
    icon: 'layers',
    link: '/platform',
    status: 'live',
    features: [
      'Autonomous agents orchestrate pathways & nudges',
      'Learning in the flow of work',
      'Live dashboards & administration automation',
    ],
  },
  {
    title: 'AI Workforce Factory',
    subtitle: 'Skills & Credentials',
    label: 'Delivery & Signal Layer',
    description: 'Comprehensive AI education programs designed for every role—from executives to frontline workers—ensuring organization-wide AI fluency.',
    icon: 'graduation-cap',
    link: '/ai-workforce-factory',
    status: 'coming-soon',
    features: [
      'Role-based AI tracks',
      'Credentials / Skills Passport',
      'Continuous readiness/performance signals',
    ],
  },
  {
    title: 'AI Learning Engine',
    subtitle: 'The Core',
    label: 'Intelligence Layer',
    description: 'The proprietary AI backbone that powers our solutions—available for licensing to enterprises wanting to build their own AI-powered learning ecosystems.',
    icon: 'cpu',
    link: '/ai-learning-engine',
    status: 'beta',
    features: [
      'Domain-specific learning LLM + skills graph',
      'Decision models powering agents',
      'API licensing for ecosystem',
    ],
  },
]

// Default Client Logos
export const defaultClients = [
  { name: 'MINDEF Singapore', logoUrl: '/images/clients/mindef-singapore.png' },
  { name: 'Ministry of Education', logoUrl: '/images/clients/moe-singapore.png' },
  { name: 'Ministry of Home Affairs', logoUrl: '/images/clients/mha-singapore.png' },
  { name: "People's Association", logoUrl: '/images/clients/peoples-association.png' },
  { name: 'IMDA', logoUrl: '/images/clients/imda-singapore.png' },
  { name: 'Korn Ferry', logoUrl: '/images/clients/korn-ferry.png' },
  { name: 'ResMed', logoUrl: '/images/clients/resmed.png' },
  { name: 'Ping An', logoUrl: '/images/clients/ping-an.png' },
  { name: 'Australian Volunteers', logoUrl: '/images/clients/australian-volunteers.png' },
  { name: 'UWC South East Asia', logoUrl: '/images/clients/uwc-sea.png' },
  { name: 'PAVE', logoUrl: '/images/clients/pave-singapore.png' },
]

// Map of client names to local logo paths for fallback
const clientLogoMap: Record<string, string> = {
  'MINDEF Singapore': '/images/clients/mindef-singapore.png',
  'Ministry of Education': '/images/clients/moe-singapore.png',
  'Ministry of Home Affairs': '/images/clients/mha-singapore.png',
  "People's Association": '/images/clients/peoples-association.png',
  'IMDA': '/images/clients/imda-singapore.png',
  'Korn Ferry': '/images/clients/korn-ferry.png',
  'ResMed': '/images/clients/resmed.png',
  'Ping An': '/images/clients/ping-an.png',
  'Australian Volunteers': '/images/clients/australian-volunteers.png',
  'UWC South East Asia': '/images/clients/uwc-sea.png',
  'PAVE': '/images/clients/pave-singapore.png',
}

// Default Team Members
export const defaultTeamMembers: Array<{ name: string; role: string; bio: string; imageUrl?: string; order: number }> = [
  {
    name: 'Leadership Team',
    role: 'Executive',
    bio: 'Experienced leaders driving AI-powered learning transformation across enterprises and governments.',
    order: 1,
  },
]

// Default Site Settings
export const defaultSiteSettings = {
  companyName: 'Kydon',
  tagline: 'The AI-Learning Company',
  description: 'The Operating System for the AI-Ready Workforce',
  contactEmail: 'contact@kydongrp.com',
  contactPhone: '',
  address: 'Singapore',
}

// Fetch functions with fallback
export async function getHeroContentWithFallback() {
  const cmsContent = await getHeroContent()
  if (cmsContent) {
    return {
      ...cmsContent,
      heroImage: cmsContent.heroImage ? urlFor(cmsContent.heroImage).width(800).height(800).url() : undefined,
    }
  }
  return defaultHeroContent
}

export async function getPillarsWithFallback(): Promise<PillarData[]> {
  const cmsPillars = await getPillars()
  if (cmsPillars && cmsPillars.length > 0) {
    // Map CMS pillars but ensure status is included
    return cmsPillars.map(pillar => {
      // Get default status based on title if not provided by CMS
      let status: PillarStatus = pillar.status || 'live'
      if (!pillar.status) {
        if (pillar.title === 'AI Workforce Factory') status = 'coming-soon'
        else if (pillar.title === 'AI Learning Engine') status = 'beta'
        else status = 'live'
      }
      return {
        title: pillar.title,
        subtitle: pillar.subtitle,
        label: pillar.label || pillar.subtitle,
        description: pillar.description,
        icon: pillar.icon,
        link: pillar.link,
        features: pillar.features || [],
        status,
      }
    })
  }
  return defaultPillars
}

export async function getClientLogosWithFallback() {
  const cmsClients = await getClientLogos()
  if (cmsClients && cmsClients.length > 0) {
    return cmsClients.map(client => ({
      name: client.name,
      logoUrl: client.logo
        ? urlFor(client.logo).width(200).url()
        : clientLogoMap[client.name] || undefined,
    }))
  }
  return defaultClients
}

export async function getTeamMembersWithFallback() {
  const cmsTeam = await getTeamMembers()
  if (cmsTeam && cmsTeam.length > 0) {
    return cmsTeam.map(member => ({
      name: member.name,
      role: member.role,
      bio: member.bio,
      imageUrl: member.image ? urlFor(member.image).width(400).height(400).url() : undefined,
      order: member.order,
    }))
  }
  return defaultTeamMembers
}

export async function getInsightsWithFallback(limit?: number) {
  const cmsInsights = await getInsights(limit)
  if (cmsInsights && cmsInsights.length > 0) {
    return cmsInsights.map(insight => ({
      title: insight.title,
      slug: insight.slug?.current,
      excerpt: insight.excerpt,
      category: insight.category,
      publishedAt: insight.publishedAt,
      imageUrl: insight.image ? urlFor(insight.image).width(600).height(400).url() : undefined,
    }))
  }
  return []
}

export async function getSiteSettingsWithFallback() {
  const cmsSettings = await getSiteSettings()
  if (cmsSettings) {
    return cmsSettings
  }
  return defaultSiteSettings
}
