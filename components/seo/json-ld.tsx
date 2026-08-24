'use client'

import Script from 'next/script'

interface OrganizationSchemaProps {
  name?: string
  url?: string
  logo?: string
  description?: string
  sameAs?: string[]
}

export function OrganizationSchema({
  name = 'Kydon Group',
  url = 'https://www.kydongrp.com',
  logo = 'https://www.kydongrp.com/favicon.svg',
  description = 'Kydon is the AI-Learning Company, providing agentic AI infrastructure for enterprise workforce transformation. Founded in 2012 in Singapore, Kydon delivers data intelligence and personalized learning solutions across Southeast Asia and Australia.',
  sameAs = [
    'https://www.linkedin.com/company/kydon-group/',
  ],
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.kydongrp.com/#organization',
    name,
    alternateName: ['Kydon', 'Kydon Group Pte Ltd'],
    url,
    logo: {
      '@type': 'ImageObject',
      url: logo,
      width: 512,
      height: 512,
    },
    image: 'https://www.kydongrp.com/og-image.png',
    description,
    sameAs,
    foundingDate: '2012',
    foundingLocation: {
      '@type': 'Place',
      name: 'Singapore',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 50,
      maxValue: 200,
    },
    areaServed: [
      { '@type': 'Country', name: 'Singapore' },
      { '@type': 'Country', name: 'Malaysia' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'GeoShape', name: 'Southeast Asia' },
      { '@type': 'GeoShape', name: 'Asia-Pacific' },
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Corporate Training',
      'Workforce Development',
      'E-Learning',
      'Learning Management Systems',
      'Adaptive Learning',
      'Data Intelligence',
      'Enterprise AI',
      'AI Governance',
      'Agentic AI',
      'Skills Assessment',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Enterprise AI Learning Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Agent OS Learning Platform',
            description: 'AI-powered learning management platform with intelligent agents for personalized training.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Learning Engine',
            description: 'Core intelligence layer for personalized learning recommendations and adaptive content delivery.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI University',
            description: 'Role-based AI training and reskilling programs for enterprise professionals.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Learning Intelligence Infrastructure',
            description: 'Data-driven insights for training effectiveness and workforce capability mapping.',
          },
        },
      ],
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'hello@kydongrp.com',
        url: 'https://www.kydongrp.com/contact',
        availableLanguage: ['English'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SG',
      addressLocality: 'Singapore',
    },
    subOrganization: [
      {
        '@type': 'Organization',
        '@id': 'https://www.kydongrp.com/#zillearn',
        name: 'ZilLearn Pte Ltd',
        url: 'https://zillearn.com',
        description: 'Digital learning solutions and LMS platforms subsidiary of Kydon Group.',
        parentOrganization: {
          '@id': 'https://www.kydongrp.com/#organization',
        },
      },
      {
        '@type': 'Organization',
        name: 'Kydon Learning Systems International (KLSI)',
        url: 'https://www.kydongrp.com/businesses/kydon-learning-systems',
        description: 'Full-service learning solutions including consulting, custom LMS, content development, AR/VR, and system integration.',
        parentOrganization: {
          '@id': 'https://www.kydongrp.com/#organization',
        },
      },
      {
        '@type': 'Organization',
        name: 'ZilLearn Bina Riya Sdn Bhd',
        url: 'https://www.kydongrp.com/businesses/zillearn-bina-riya',
        description: 'Malaysia-based learning and workforce development solutions.',
        parentOrganization: {
          '@id': 'https://www.kydongrp.com/#organization',
        },
      },
    ],
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

// LocalBusiness schema for physical office locations
export function LocalBusinessSchema() {
  const locations = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://www.kydongrp.com/#office-singapore',
      name: 'Kydon Group - Singapore Headquarters',
      image: 'https://www.kydongrp.com/og-image.png',
      url: 'https://www.kydongrp.com',
      email: 'hello@kydongrp.com',
      description: 'Kydon Group headquarters in Singapore. Enterprise AI learning and workforce transformation solutions.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Singapore',
        addressCountry: 'SG',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 1.3521,
        longitude: 103.8198,
      },
      parentOrganization: {
        '@id': 'https://www.kydongrp.com/#organization',
      },
      areaServed: [
        { '@type': 'Country', name: 'Singapore' },
        { '@type': 'GeoShape', name: 'Southeast Asia' },
      ],
      priceRange: '$$$$',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://www.kydongrp.com/#office-sydney',
      name: 'Kydon Group - Sydney Office',
      image: 'https://www.kydongrp.com/og-image.png',
      url: 'https://www.kydongrp.com',
      email: 'hello@kydongrp.com',
      description: 'Kydon Group operations in Sydney, Australia. Enterprise AI learning solutions for the Australian market.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sydney',
        addressRegion: 'NSW',
        addressCountry: 'AU',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -33.8688,
        longitude: 151.2093,
      },
      parentOrganization: {
        '@id': 'https://www.kydongrp.com/#organization',
      },
      areaServed: [
        { '@type': 'State', name: 'New South Wales' },
        { '@type': 'Country', name: 'Australia' },
      ],
      priceRange: '$$$$',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://www.kydongrp.com/#office-melbourne',
      name: 'Kydon Group - Melbourne Office',
      image: 'https://www.kydongrp.com/og-image.png',
      url: 'https://www.kydongrp.com',
      email: 'hello@kydongrp.com',
      description: 'Kydon Group operations in Melbourne, Australia. Enterprise AI learning solutions for the Australian market.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Melbourne',
        addressRegion: 'VIC',
        addressCountry: 'AU',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -37.8136,
        longitude: 144.9631,
      },
      parentOrganization: {
        '@id': 'https://www.kydongrp.com/#organization',
      },
      areaServed: [
        { '@type': 'State', name: 'Victoria' },
        { '@type': 'Country', name: 'Australia' },
      ],
      priceRange: '$$$$',
    },
  ]

  return (
    <>
      {locations.map((location, index) => (
        <Script
          key={index}
          id={`local-business-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(location) }}
          strategy="afterInteractive"
        />
      ))}
    </>
  )
}

interface WebSiteSchemaProps {
  name?: string
  url?: string
}

export function WebSiteSchema({
  name = 'Kydon',
  url = 'https://www.kydongrp.com',
}: WebSiteSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.kydongrp.com/#website',
    name,
    url,
    description: 'The AI-Learning Company. Enterprise data intelligence and workforce transformation solutions across Southeast Asia and Australia.',
    publisher: {
      '@id': 'https://www.kydongrp.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.kydongrp.com/insights?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en',
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  imageUrl?: string
  publishedAt?: string
  modifiedAt?: string
  authorName?: string
}

export function ArticleSchema({
  title,
  description,
  url,
  imageUrl,
  publishedAt,
  modifiedAt,
  authorName = 'Kydon',
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image: imageUrl,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      '@type': 'Organization',
      name: authorName,
    },
    publisher: {
      '@id': 'https://www.kydongrp.com/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  provider?: string
}

export function ServiceSchema({
  name,
  description,
  url,
  provider = 'Kydon',
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@id': 'https://www.kydongrp.com/#organization',
    },
    areaServed: [
      { '@type': 'GeoShape', name: 'Southeast Asia' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'Singapore' },
    ],
    serviceType: 'AI-Powered Learning Solutions',
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Enterprise',
    },
  }

  return (
    <Script
      id={`service-schema-${name.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

interface SoftwareApplicationSchemaProps {
  name: string
  description: string
  url: string
  applicationCategory?: string
}

export function SoftwareApplicationSchema({
  name,
  description,
  url,
  applicationCategory = 'EducationalApplication',
}: SoftwareApplicationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Contact for enterprise pricing',
    },
    publisher: {
      '@id': 'https://www.kydongrp.com/#organization',
    },
    featureList: [
      'Adaptive Learning Paths',
      'AI-Powered Recommendations',
      'Real-Time Analytics',
      'Enterprise Integration',
      'Multi-language Support',
    ],
  }

  return (
    <Script
      id={`software-schema-${name.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

interface FAQSchemaProps {
  questions: Array<{ question: string; answer: string }>
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}
