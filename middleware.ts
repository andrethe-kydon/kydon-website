import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Map old WordPress URLs to new site pages
// This recovers SEO authority from old indexed pages
const redirectMap: Record<string, string> = {
  // === NOT FOUND (404) - Old WordPress pages ===
  '/jobs/': '/careers',
  '/jobs': '/careers',
  '/jobs-opening/': '/careers',
  '/jobs-opening': '/careers',
  '/connect-with-us/': '/contact',
  '/connect-with-us': '/contact',
  '/about/': '/company',
  '/about': '/company',
  '/news/': '/insights',
  '/news': '/insights',
  '/zillearn/': '/businesses/zillearn',
  '/zillearn': '/businesses/zillearn',
  '/zillearnhome/': '/businesses/zillearn',
  '/zillearnhome': '/businesses/zillearn',
  '/products-new/': '/platform',
  '/products-new': '/platform',
  '/privacy-policy-2/': '/privacy-policy',
  '/privacy-policy-2': '/privacy-policy',
  '/culture/': '/company',
  '/culture': '/company',
  '/author/vendor/': '/insights',
  '/author/vendor': '/insights',
  '/author/haunan/': '/insights',
  '/author/haunan': '/insights',

  // === CRAWLED NOT INDEXED - Old date archive / tag pages ===
  '/tag/biography/feed/': '/company',
  '/tag/biography/feed': '/company',
  '/tag/e-learning/': '/insights',
  '/tag/e-learning': '/insights',
  '/tag/elearning/': '/insights',
  '/tag/elearning': '/insights',
  '/tag/klsi/': '/businesses/kydon-learning-systems',
  '/tag/klsi': '/businesses/kydon-learning-systems',

  // === Old WordPress category/archive pages ===
  '/category/news/page/3/': '/insights',
  '/category/news/page/3': '/insights',
}

// Patterns for old WordPress blog posts (date-based URLs)
// These all redirect to /insights
const blogPatterns = [
  /^\/\d{4}\/\d{2}\/\d{2}\//, // /2023/08/11/article-slug/
  /^\/\d{4}\/\d{2}\/$/,         // /2017/11/
  /^\/\d{4}\/\d{2}$/,           // /2017/11
  /^\/blog-/,                   // /blog-from-ai-pilot-to-performance...
]

// Old WordPress job listing patterns
const jobPatterns = [
  /^\/jobs\//,  // /jobs/senior-front-end-developer-sg/
]

// Old news patterns
const newsPatterns = [
  /^\/news\//,  // /news/article-slug/
]

// Security headers applied to all responses
const securityHeaders: Record<string, string> = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'X-DNS-Prefetch-Control': 'on',
}

function applySecurityHeaders(response: NextResponse): NextResponse {
  for (const [key, value] of Object.entries(securityHeaders)) {
    response.headers.set(key, value)
  }
  return response
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = request.headers.get('host') || ''

  // Canonical www redirect: redirect non-www to www (only for kydongrp.com)
  if (host === 'kydongrp.com') {
    const url = request.nextUrl.clone()
    url.host = 'www.kydongrp.com'
    url.protocol = 'https'
    const response = NextResponse.redirect(url, 301)
    return applySecurityHeaders(response)
  }

  // Check exact redirect map first
  const exactRedirect = redirectMap[pathname] || redirectMap[pathname + '/']
  if (exactRedirect) {
    const url = request.nextUrl.clone()
    url.pathname = exactRedirect
    const response = NextResponse.redirect(url, 301)
    return applySecurityHeaders(response)
  }

  // Check blog post patterns (old WordPress date-based URLs)
  for (const pattern of blogPatterns) {
    if (pattern.test(pathname)) {
      const url = request.nextUrl.clone()
      url.pathname = '/insights'
      const response = NextResponse.redirect(url, 301)
      return applySecurityHeaders(response)
    }
  }

  // Check old job listing patterns
  for (const pattern of jobPatterns) {
    if (pattern.test(pathname)) {
      const url = request.nextUrl.clone()
      url.pathname = '/careers'
      const response = NextResponse.redirect(url, 301)
      return applySecurityHeaders(response)
    }
  }

  // Check old news patterns
  for (const pattern of newsPatterns) {
    if (pattern.test(pathname)) {
      const url = request.nextUrl.clone()
      url.pathname = '/insights'
      const response = NextResponse.redirect(url, 301)
      return applySecurityHeaders(response)
    }
  }

  const response = NextResponse.next()
  return applySecurityHeaders(response)
}

// Only run middleware on paths that could be old WordPress URLs
// Exclude API routes, static files, and Next.js internals
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, favicon.svg
     * - images, videos, public assets
     */
    '/((?!api|_next/static|_next/image|favicon\\.ico|favicon\\.svg|images|videos|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm|pdf|css|js|woff|woff2|ttf|eot)).*)',
  ],
}
