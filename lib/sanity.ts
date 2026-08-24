import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

// Public Sanity project defaults. These are NOT secrets (they are shipped to the
// browser anyway), so we fall back to them to guarantee a valid configuration.
// Newer versions of @sanity/client throw at import time if projectId is empty,
// which would crash the entire build if the env var were missing on the host.
const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wg3ga4x6'
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for faster responses
  token: process.env.SANITY_API_TOKEN, // Only needed for authenticated requests
})

// Non-CDN client for data that must always be fresh (e.g., tracking settings)
export const sanityClientNoCdn = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false, // Always fetch fresh data from the API
  token: process.env.SANITY_API_TOKEN,
})

// Image URL builder using named export
const builder = createImageUrlBuilder({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

// Helper to check if Sanity is configured
export function isSanityConfigured() {
  return !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
         process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== ''
}
