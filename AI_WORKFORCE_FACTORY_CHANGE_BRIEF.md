# AI Workforce Factory — Change Brief (v2)

**Updated:** 2 Sep 2026
**Requested by:** David Yeo
**Scope:** Replace `/ai-university` with a new "AI Workforce Factory" page at `/ai-workforce-factory`
**Source design:** `kydon-ai-workforce-factory-dev-reference.html` (452 lines)
**Repo state:** `kydon-website` `main` @ `98706c4`

---

## 1. Decisions — locked

| # | Decision | Consequence |
|---|---|---|
| **D1** | Build at **`/ai-workforce-factory`**; 308-redirect `/ai-university` → new path | Redirect goes in `next.config.js`. `middleware.ts` stays untouched. |
| **D2** | **Use main-site colours** — light theme, not the reference's dark navy | Reference CSS is substantially rewritten, not ported. See §2. Header/footer seam problem disappears. |
| **D3** | **Illustrations in Sanity** — hero + 3 pipeline images uploadable | 4 image fields with alt text. See §5. |
| **D4** | **Ecosystem partners in Sanity** — logo upload, unlimited additions | Repeatable array, not a fixed 8. See §5. |
| **D5** | **"In their words" in Sanity** — quote, name, role, photo upload | Repeatable array with per-entry publish flag. See §5. |

### Still open (small, but decide before building)

- **Fonts.** Reference asks for Manrope + IBM Plex Sans + JetBrains Mono. The site loads only Inter. Given D2 favours consistency with the main site, **recommend Inter throughout**, optionally adding JetBrains Mono for the three stat numbers only. Retrofitting typography later means touching every heading.
- **Nav placement.** `AI University` currently sits in the **Solutions** dropdown (`components/header.tsx:15`). "AI Workforce Factory" reads more like an initiative than a solution — does it stay under Solutions, move to Businesses next to FEI, or go top-level?

---

## 2. Dark → light translation

The reference's visual language is built entirely around a dark background. Mapping it rather than porting it:

| Reference | Light equivalent |
|---|---|
| `--bg` deep navy | `bg-white` |
| `--bg-alt` (alternating bands) | `bg-neutral-50` — matches the existing alternating-section pattern |
| `--glass` cards + `backdrop-filter` | `bg-white border border-neutral-100 shadow-sm hover:shadow-xl` + the existing `card-hover` class in `globals.css` |
| `--text` / `--text-dim` / `--text-faint` | `text-neutral-900` / `text-neutral-600` / `text-neutral-500` |
| `--border-soft` | `border-neutral-200` |
| `--accent` `#F15522` | **Already matches** `primary.DEFAULT` in `tailwind.config.ts` — use the token, don't hardcode the hex |
| `.aiwf-grid-bg` animated grid | **Drop.** Reads as noise on white. |
| `.aiwf-orb` blurred radial glows | **Drop.** Replace with the hero gradient already used on the current page: `bg-gradient-to-br from-neutral-50 via-white to-accent/5` |
| Eyebrow with glowing dash | Keep the dash rule, drop `box-shadow`. Or reuse the existing pill badge: `px-4 py-1.5 bg-accent/10 text-accent rounded-full` |
| Pipeline number circles with accent glow | `bg-accent text-white shadow-lg shadow-primary/25` (existing site pattern) |
| Final CTA dark band | Reuse the current page's CTA block: `bg-gradient-to-br from-accent to-primary rounded-3xl` with white text |
| PM Wong quote band | `bg-neutral-50` with an accent-tinted top border, centred |

**Net effect:** `oklch()`, `color-mix()`, and `backdrop-filter` all become unnecessary. No new Tailwind colour tokens needed — the existing `neutral` scale and `#F15522` accent cover the whole page. This is a significantly smaller job than the dark version would have been.

---

## 3. Publication blockers ⚠️ (unchanged)

None of these can ship without sign-off. The reference file flags them itself.

| Item | Status in file | Needed |
|---|---|---|
| **David Yeo quote** | `DRAFT — REWRITE IN YOUR OWN VOICE` | David's final wording |
| **Soh Wai Wah quote** (Principal & CEO, SP) | `PROPOSED — PENDING SP'S CONFIRMATION` | Written approval from Singapore Polytechnic |
| **PM Lawrence Wong quote** | `REAL QUOTE — VERIFY … BEFORE PUBLISHING` | Verify against the official Budget 2026 transcript; confirm attribution use is acceptable |
| **7 partner logos** — SP, SWDA, IMDA, SkillsFuture SG, ASME, Singapore Business Federation, AI Association Singapore | Placeholder boxes | Brand permission + logo files. Publishing these implies endorsement. |
| **Stats** — 100,000 AI-bilingual workers; 84,000 AI openings vs ~16,000 tech grads; S$1B+ to 2030 | Unsourced | Verify each against its primary source; keep a citation record |
| **Claims** — "funded up to 95% through SkillsFuture", "built together with Singapore Polytechnic", "Kydon employs graduates under a bridged Train-and-Place arrangement" | Asserted | Confirm each is contractually accurate and currently true |

The SP and PM quotes are the hard gates, and clearance is the longest lead item in the project — start it now, in parallel with the build. The `approved` boolean in §5's schema exists so the page can go live with those two entries held back rather than deleted.

---

## 4. Assets to produce

All four illustrations become Sanity uploads (D3), so the page can ship with placeholders and have real art dropped in later without a deploy.

| Asset | Spec | Notes |
|---|---|---|
| Hero illustration | 1200 × 1400px | Person + AI interface. Reference says "build in Canva". Transparent bg was for the dark theme — on white, either works. |
| Pipeline 1 — Train | ~800 × 600px | Learner at workstation with AI/data panels |
| Pipeline 2 — Deploy | ~800 × 600px | Network diagram: graduate → small-business icons |
| Pipeline 3 — Hire | ~800 × 600px | Handshake or upward graph, same style |
| Testimonial photos | 400 × 400px, square (rendered circular at 88px) | David Yeo; Soh Wai Wah pending SP approval |
| Partner logos | ~300px wide, transparent PNG or SVG | Permission-gated (§3). On white, dark-on-transparent logos work as supplied — no inversion needed. |

**Image delivery:** `next.config.js` sets `images: { unoptimized: true }`, so Next.js won't compress anything. Serve Sanity images through the existing `urlFor()` helper in `lib/sanity.ts` with explicit sizing — e.g. `urlFor(image).width(1200).format('webp').url()`. Sanity's CDN does the resizing that Next.js isn't doing. Without this the hero alone will hurt load time.

---

## 5. Sanity schema

### First: locate the Studio repo

`kydon-website` @ `origin/main` contains **no** `sanity.config.ts`, `sanity.cli.ts`, `studio/` folder, or schema files — verified 2 Sep. The app only *reads* from Sanity via GROQ. The `aiUniversityPage` type is defined in a separate Studio project (`rndr2995`, deployed at `kydon-cms.sanity.studio`). Confirm that repo's name before starting CMS work.

### New document type: `aiWorkforceFactoryPage` (singleton)

```
aiWorkforceFactoryPage
├── hero
│   ├── eyebrow            string
│   ├── headline           string
│   ├── body               text
│   ├── primaryCta         { label, url }
│   ├── secondaryCta       { label, url }
│   └── illustration       image  { hotspot: true }  + alt  string   ← D3
│
├── stats[]                          // 3 expected, array so it can flex
│   ├── value              string    // "100,000", "S$1B+"
│   └── description        text
│
├── why
│   ├── eyebrow            string
│   ├── heading            string
│   ├── intro              text
│   ├── cards[]            { icon (lucide name), title, description }
│   └── closingLine        text
│
├── pipeline
│   ├── eyebrow            string
│   ├── heading            string
│   └── steps[]                                                       ← D3
│       ├── number         string    // "01"
│       ├── title          string
│       ├── description    text
│       └── illustration   image { hotspot: true } + alt string
│
├── nationalVision
│   ├── eyebrow            string
│   ├── quote              text
│   ├── attribution        string
│   └── approved           boolean, default false                      ← §3 gate
│
├── ecosystem                                                          ← D4
│   ├── eyebrow            string
│   ├── heading            string
│   ├── body               text
│   └── partners[]         array, no max — add more over time
│       ├── name           string, required
│       ├── logo           image, required  (SVG or transparent PNG)
│       ├── url            url, optional
│       └── approved       boolean, default false   // brand permission received
│
├── voices                                                             ← D5
│   ├── eyebrow            string
│   ├── heading            string
│   └── quotes[]           array, no max
│       ├── quote          text, required
│       ├── name           string, required
│       ├── role           string    // "FOUNDER & CEO, KYDON GROUP"
│       ├── photo          image { hotspot: true } + alt string
│       └── approved       boolean, default false   // quote cleared
│
├── audiences
│   ├── eyebrow            string
│   ├── heading            string
│   └── cards[]            { icon, title, description, linkLabel, linkUrl }
│
└── finalCta
    ├── heading            string
    ├── primaryCta         { label, url }
    └── secondaryCta       { label, url }
```

### Notes on the CMS-driven arrays

- **`approved` flags.** Filter on these in the GROQ query (`partners[approved == true]`, `quotes[approved == true]`) so unapproved entries can be drafted in Sanity without appearing live. This is what lets the page launch while SP approval is still pending.
- **Partner grid layout.** The reference hardcodes a 4-column grid of 8 boxes, with the 8th being a dotted "+ more" tile. With an unbounded array, drop the "+ more" tile and let the grid reflow — `grid-cols-2 md:grid-cols-4` handles any count. Test with 3, 7, and 12 entries.
- **Ordering.** Sanity arrays are drag-to-reorder in the Studio, so no explicit `order` field is needed.
- **Preview config.** Give `partners[]` and `quotes[]` a `preview` with `title` and `media` so the Studio list shows the logo/photo and name rather than "Untitled". Small thing, but it's the difference between Nada being able to use this section and not.
- **Alt text.** Required on every image field. Six images on this page with no alt text is an accessibility problem on a page pitched at government partners.

### Migration path

1. Add the type to the Studio; deploy the Studio.
2. Populate with final approved copy and assets.
3. Point the app's GROQ query at the new type.
4. Retire `aiUniversityPage` — but **leave the document in place** until the new page is verified in production. It's the only rollback.

Keep the `defaultContent` fallback-object pattern from the current page (`app/ai-university/page.tsx:29`). It's what keeps the page rendering if Sanity is unreachable.

### Two Sanity behaviours that will look like bugs

**Drafts are invisible to the website.** An unpublished document returns nothing from the GROQ query, so `defaultContent` takes over and the page renders the hardcoded fallback — looking perfectly fine while silently ignoring everything that was typed into the Studio. The green dot beside a document name means unpublished changes. This is the same failure mode that caused the team-member confusion in Aug 2026; call it out in the handover notes for whoever edits this page.

**`useCdn: true`** (`lib/sanity.ts`) means Sanity serves cached responses. Expect up to a minute between clicking Publish and seeing the change, on top of the page's own `revalidate = 60`. Budget ~2 minutes before concluding something is broken.

**No API token required.** `rndr2995` is publicly readable and `SANITY_API_TOKEN` was intentionally removed from Vercel. Don't re-add one unless it's a fresh Viewer token created on `rndr2995` — a `wg3ga4x6` token will 401 on every read and break the site in a more confusing way than no token at all.

---

## 6. File-by-file change list

### 6.1 New page

**Create `app/ai-workforce-factory/page.tsx`.** Converting from the reference:

- Apply the §2 colour mapping. Convert inline `style="..."` to Tailwind classes.
- Convert `<a href="https://kydongrp.com/contact" target="_blank">` to `<Link href="/contact">`. The reference opens **internal** links in new tabs — wrong for on-site nav. Keep `target="_blank"` only for `futureedgeinstitute.com`.
- Use `lucide-react` icons rather than the reference's inline SVGs, for consistency with the rest of the site.
- **Strip the reference's own nav** (lines 162–179) **and footer** (lines 431–448). `app/layout.tsx` supplies both globally.
- **Bug in the source:** line 186 has a duplicate `class` attribute (`class="aiwf-wrap …"` then `class="aiwf-hero-grid"`). Browsers silently drop the second, which is why the hero's mobile breakpoint doesn't fire in the reference. Merge them during conversion.
- Keep `export const revalidate = 60` and the `ServiceSchema` / `BreadcrumbSchema` JSON-LD pattern from the existing page.

**Delete `app/ai-university/page.tsx`** once the redirect is in place.

### 6.2 Metadata — full rewrite

Every field in the current `metadata` export describes reskilling tracks and Skills Passport. Replace: `title`, `description`, `openGraph.title/description`, `twitter.title/description`, `alternates.canonical` (→ `/ai-workforce-factory`), and the whole `keywords` array. Also update `ServiceSchema` name/description/url and the `BreadcrumbSchema` items.

### 6.3 Redirect

`next.config.js` — add:

```js
async redirects() {
  return [{ source: '/ai-university', destination: '/ai-workforce-factory', permanent: true }]
}
```

Middleware has no rule for `/ai-university`, so the request passes through and this fires. **Do not touch `middleware.ts`.**

### 6.4 Internal links — 6 places

```
components/header.tsx:15                    Solutions dropdown → 'AI University'
components/footer.tsx:8                     Product column → 'AI University'
components/home/pillars-section.tsx:28,36   homepage pillar title + link
components/seo/json-ld.tsx:94               structured-data service name
app/sitemap.ts:43                           sitemap entry
```

Each carries the label "AI University" and/or the `/ai-university` href. All need the new name and path. Before merging: `grep -rn "ai-university\|AI University" --include="*.ts*" .` should return nothing but the redirect rule.

### 6.5 Types + query

- `lib/sanity-types.ts:106` — replace `AIUniversityPageContent` with `AIWorkforceFactoryPageContent` matching §5.
- `lib/sanity-queries.ts:144` — replace `getAIUniversityPageContent()` and its query `*[_type == "aiUniversityPage"][0]`. The new query needs explicit projections for the image fields and the `approved` filters — a bare `[0]` won't resolve image asset references usefully.

### 6.6 Housekeeping worth folding in

Three places still reference the dead Sanity project `wg3ga4x6`. Fix all three together:

- **`lib/sanity.ts:8`** — hardcoded fallback project ID. Change to `rndr2995`.
- **`.env.example:2`** — `NEXT_PUBLIC_SANITY_PROJECT_ID=wg3ga4x6`. Anyone setting up locally from this file gets the stale project. Change to `rndr2995`.
- **`CMS_SETUP_GUIDE.md:11`** — points at `sanity.io/manage/project/wg3ga4x6`. Update to `rndr2995`.

Also in `.env.example`: `SANITY_API_TOKEN` is listed as required, but it isn't. `rndr2995` is publicly readable and the token was deliberately removed from Vercel (the old one belonged to `wg3ga4x6` and would 401). Mark it optional or drop the line.
- **`app/globals.css:8–13`** — `--primary: #4B2E83` (purple) contradicts Tailwind's `#F15522`. Unrelated; noting only.

---

## 7. Build sequence

1. **Confirm the Studio repo name** and clone it. Longest-lead technical item.
2. **Start clearance** on the SP quote, PM quote, and 7 partner logos. Longest-lead item overall — days or weeks.
3. Settle fonts and nav placement (§1).
4. Build the page on a feature branch with `defaultContent` hardcoded, so it's reviewable before Sanity is ready.
5. Add the Studio schema; deploy the Studio; wire the GROQ query with image projections and `approved` filters.
6. Commission illustrations; upload via Sanity.
7. Update the 6 internal links, metadata, and the redirect.
8. Preview-deploy on the branch. Check: mobile breakpoints (esp. the hero grid), partner grid at 3/7/12 entries, `approved: false` entries genuinely hidden, redirect behaviour, no surviving "AI University" strings.
9. Merge to `main` → Vercel auto-deploys.
10. Post-deploy: verify `/ai-university` 308s, resubmit the sitemap, confirm the OG preview renders.

**Note on Vercel:** if any env vars change as part of this (e.g. the Sanity project ID), a manual redeploy with cache cleared is required — the change won't take effect on its own.

---

## 8. Risks

| Risk | Level | Note |
|---|---|---|
| SP or PM quote published without clearance | **Highest** | Blocks launch. Not fix-forward. |
| Studio repo can't be found / schemas don't exist | **High** | CMS editability lost until rebuilt |
| Unverified national stats | **Medium** | A wrong figure on a page aimed at government partners is costly |
| Partner grid breaks at unexpected counts | **Low** | Test 3 / 7 / 12 before merge |
| Stale `/ai-university` links | **Low** | Caught by grep |
| Page weight from unoptimised images | **Low** | Mitigated by `urlFor()` sizing (§4) |

*Resolved by D2:* the dark-page-under-light-header seam is no longer a risk.

---

## Appendix — reference file map

| Lines | Section | Action |
|---|---|---|
| 11–156 | `<style>` — CSS vars, `.aiwf-*` classes, keyframes | Mostly discard; see §2 |
| 160 | Root wrapper, sets `--accent: #F15522` | Use Tailwind token |
| 162–179 | Nav | **Strip** |
| 181–210 | Hero + illustration | → Sanity image |
| 212–228 | Stat strip (3) | → Sanity array |
| 230–263 | Why — 3 cards + closing line | → Sanity |
| 265–309 | Pipeline — Train / Deploy / Hire | → Sanity, 3 images |
| 311–322 | PM Lawrence Wong quote | → Sanity, gated |
| 324–343 | Ecosystem — 8 logo placeholders | → Sanity array, unbounded |
| 345–377 | Voices — David Yeo + Soh Wai Wah | → Sanity array, gated, with photos |
| 379–417 | Audiences — talent / SMEs / government | → Sanity |
| 419–429 | Final CTA | → Sanity |
| 431–448 | Footer | **Strip** |
