# Kydon Website CMS Setup Guide

## Overview

This website is integrated with **Sanity CMS**, allowing you to edit content without touching code.

## Your Sanity Credentials

- **Project ID:** rndr2995
- **Dataset:** production
- **Sanity Studio URL:** https://www.sanity.io/manage/project/rndr2995

## Setting Up Sanity Studio

### Option 1: Use Sanity's Web Interface (Easiest)

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project (rndr2995)
3. Click on "Content" to add/edit content

### Option 2: Set Up Local Sanity Studio (More Features)

Run these commands to create a local Sanity Studio:

```bash
npm create sanity@latest -- --project rndr2995 --dataset production --template clean
cd your-studio-folder
npm run dev
```

## Content Types to Create in Sanity

### 1. Hero Section (`heroSection`)

Fields:
- `headline` (String) - Main headline text
- `highlightedText` (String) - Highlighted/colored text
- `subheadline` (Text) - Description below headline
- `primaryButtonText` (String) - e.g., "Contact Us"
- `primaryButtonLink` (String) - e.g., "/contact"
- `secondaryButtonText` (String) - e.g., "Explore Platform"
- `secondaryButtonLink` (String) - e.g., "/platform"
- `stats` (Object)
  - `users` (String) - e.g., "100K+"
  - `customers` (String) - e.g., "100+"
  - `countries` (String) - e.g., "10"

### 2. Pillars (`pillar`)

Fields:
- `title` (String) - e.g., "AI Learning Platform"
- `subtitle` (String) - e.g., "Agentic Learning OS"
- `description` (Text) - Detailed description
- `icon` (String) - Icon name (layers, graduation-cap, cpu)
- `link` (String) - Page link
- `features` (Array of Strings) - Feature list
- `order` (Number) - Display order

### 3. Team Members (`teamMember`)

Fields:
- `name` (String) - Full name
- `role` (String) - Job title
- `bio` (Text) - Biography
- `image` (Image) - Profile photo
- `order` (Number) - Display order

### 4. Client Logos (`clientLogo`)

Fields:
- `name` (String) - Company name
- `logo` (Image) - Logo image
- `order` (Number) - Display order

### 5. Insights/Blog (`insight`)

Fields:
- `title` (String) - Article title
- `slug` (Slug) - URL-friendly identifier
- `excerpt` (Text) - Short summary
- `category` (String) - e.g., "AI Trends", "Case Study"
- `publishedAt` (DateTime) - Publication date
- `image` (Image) - Featured image

### 6. Site Settings (`siteSettings`)

Fields:
- `companyName` (String) - "Kydon"
- `tagline` (String) - "The AI-Learning Company"
- `description` (Text) - SEO description
- `contactEmail` (String) - Contact email
- `contactPhone` (String) - Phone number
- `address` (Text) - Office address

## How Content Updates Work

1. **You edit content** in Sanity Studio
2. **Click "Publish"** to save changes
3. **Website automatically updates** (may take a few seconds)

## Fallback Behavior

If no content exists in Sanity for a section, the website displays default hardcoded content. Once you add content in Sanity, it will override the defaults.

## Need Help?

Return to the DeepAgent conversation to:
- Add new content types
- Modify page layouts
- Fix any issues

## Sanity Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Studio Guide](https://www.sanity.io/docs/sanity-studio)
