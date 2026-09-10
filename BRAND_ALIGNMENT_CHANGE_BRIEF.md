# Brand Alignment Change Brief

**Repo:** `kydon-website` (Next.js 14 / TypeScript / Tailwind)
**Requested by:** Agnes (brand)
**Owner:** Andre
**Status:** colour work ready to start; font work blocked on Agnes

---

## 1. What this is

Agnes has asked for the site to be aligned to the two Kydon brand guides:

- **Kydon Group** (CI manual, updated May 2020) — orange primary, blue accent
- **Kydon Learning Systems Institute (KLSI)** — blue primary, orange accent

Both guides specify **Futura Book / Futura Bold** as the primary typeface and **Tahoma** as secondary. Both are print documents: they contain Pantone and CMYK values only, with no RGB or hex anywhere.

The site is currently on **Inter**, with an orange (`#F15522`) that is not the brand orange, plus leftover purple from the original project boilerplate.

---

## 2. Confirmed decisions

| # | Decision | Decided by |
|---|---|---|
| 1 | Kydon Group pages use **orange** primary. The KLSI section switches to **blue** primary when you navigate into it. The two brands stay visually separate. | Andre |
| 2 | Pantone/CMYK values are converted to **RGB** for web use. | Andre |
| 3 | Brand orange and blue fail accessible-contrast thresholds for small text, so **body and small text use dark grey**, and links use darkened brand variants. | Andre (pending Agnes confirmation of the exact variants) |
| 4 | The guide's 45% / 30% / 10% colour proportions are **print coverage guidance** and are applied in spirit, not literally. | Andre |

### Still open (blocking the font work only)

- **Futura licence.** Futura is commercial with no free web licence. Options put to Agnes: buy a Monotype web licence; use Futura PT via Adobe Fonts if there's an existing Creative Cloud subscription; or use **Jost**, a free open-source Futura revival (SIL OFL, on Google Fonts, self-hostable via `next/font`). Agnes wrote "Futura equivalent", which suggests a lookalike is acceptable.
- **Body typeface.** The guide names Tahoma, which is a Microsoft system font and not appropriate for web. Futura itself reads poorly at body sizes (low x-height, wide letterforms). Proposal to Agnes: geometric face for headings, higher-x-height face for body.
- **Guide inconsistencies raised with Agnes:** greys are specified two ways that don't agree (Pantone 429/420 alongside flat K percentages that are different colours); the proportions tables cite Pantone 431 and 427, which appear nowhere on the palette pages. The KLSI proportions table also appears to be an unedited copy of the group one.
- **Assets requested:** logos as SVG (both brands, standard and reverse-white); the 40° trapezium and triangle graphic elements as vectors. `/public` currently holds only `kydon-logo.png` and `kydon-logo-light.png`.

**Do not start the font swap until the licence question is answered.** The colour work does not depend on it and can proceed now.

---

## 3. Colour values

Converted from the guides. Awaiting Agnes's confirmation, so treat as provisional.

### Brand colours

| Guide name | RGB | Hex | Contrast on white |
|---|---|---|---|
| Pantone Orange 021 C | 254, 80, 0 | `#FE5000` | ~3.2:1 |
| Pantone Blue 2995 C | 0, 163, 224 | `#00A3E0` | ~2.9:1 |
| Pantone Dark Grey 424 C | 109, 110, 113 | `#6D6E71` | ~5.1:1 |
| Pantone Mid Grey 429 C | 162, 170, 173 | `#A2AAAD` | ~2.4:1 |
| Pantone Light Grey 420 C | 199, 201, 199 | `#C7C9C7` | ~1.7:1 |

### Derived text variants

Not in either guide. Derived as the shallowest darkening that clears 4.5:1 on white, so they still read as the brand colours.

| Use | RGB | Hex | Contrast on white |
|---|---|---|---|
| Orange, links and small text | 209, 68, 0 | `#D14400` | ~4.6:1 |
| Blue, links and small text | 0, 120, 168 | `#0078A8` | ~4.9:1 |

### Usage rules

- Orange and blue at full strength: large headings (≥24px, or ≥19px bold), button and panel fills, graphic elements, the angled vector shapes.
- **Never** brand orange or blue as body copy, captions, labels, or small link text on white.
- **Never** white text on an orange or blue fill at normal size. Large or bold only.
- Body copy: `neutral-600` (Dark Grey 424). Headings: `neutral-900`.
- Mid Grey 429 and Light Grey 420 are for borders, dividers, and disabled states. Not for text.
- Semantic status colours (error red, success green) are **out of scope**. Neither guide covers them; leave them alone.

---

## 4. Token architecture

The site already routes most colour through `primary` / `accent` / `neutral` tokens, with roughly 700 utility-class references across 111 `.tsx` files. Retokenising centrally is what makes this tractable. Two moves preserve nearly all existing class usage.

### 4a. Brand scoping via CSS variables

Define `primary` in Tailwind as a CSS variable rather than a fixed hex:

```
primary: 'rgb(var(--brand-primary) / <alpha-value>)'
```

Set the group default in `:root`, then override inside a KLSI wrapper:

```css
:root            { --brand-primary: 254 80 0;  --brand-accent: 0 163 224; }
[data-brand="klsi"] { --brand-primary: 0 163 224; --brand-accent: 254 80 0; }
```

Apply `data-brand="klsi"` on the layout wrapping `/businesses/kydon-learning-systems`. Every existing `text-primary` and `bg-primary` then flips automatically inside that section, and orange cannot leak into KLSI or vice versa. This also gives a clean hook for future sub-brands.

**Note:** `primary` and `accent` are currently defined as the *same* colour (`#F15522`), which makes the distinction meaningless. The restructure fixes that: primary is the brand's own colour, accent is the other brand's colour used sparingly, per both guides.

### 4b. Rebuild the neutral scale on brand greys

Keep the existing key names so no page files need touching, but anchor the values on the guide's three greys. The current usage pattern happens to line up well: `text-neutral-600` (141 uses) lands on Dark Grey 424, which passes contrast for body text, and `text-neutral-900` (124 uses) stays a near-black for headings.

| Key | Hex | Source |
|---|---|---|
| 50 | `#FAFAFA` | near-white, unchanged |
| 100 | `#F2F3F3` | derived |
| 200 | `#E4E5E5` | derived |
| 300 | `#C7C9C7` | **Light Grey 420** |
| 400 | `#A2AAAD` | **Mid Grey 429** |
| 500 | `#85898B` | derived |
| 600 | `#6D6E71` | **Dark Grey 424** |
| 700 | `#575859` | derived |
| 800 | `#3D3E3F` | derived |
| 900 | `#262728` | derived |

---

## 5. Work plan

Do these in order. Steps 1–3 give the largest visible improvement for the least risk.

1. **Branch.** `git checkout main && git pull && git checkout -b feature/brand-alignment`
2. **Retokenise `tailwind.config.ts`** — brand CSS variables, rebuilt neutral scale, remove the meaningless `primary`/`accent` duplication.
3. **Clean `app/globals.css`** — delete the dead purple variables, fix `.gradient-text` and `.card-hover`, remove the redundant Inter `@import` (the font is already loaded via `next/font` in `layout.tsx`; loading it twice is wasteful).
4. **Update `themeColor`** in `app/layout.tsx` — currently `#F15522`, should be the brand orange.
5. **KLSI scoping** — add the `data-brand="klsi"` wrapper, then rewrite that page's colours (see §6; it's the heaviest file).
6. **Hand-edit the off-brand page files** (§6).
7. **Run `yarn dev`** and walk every page in §6 plus the homepage. Check both light backgrounds and the coloured panels.
8. **Contrast check** the orange and blue surfaces before committing.
9. **Font swap** — only once Agnes has answered.

---

## 6. File inventory

### Central files

| File | Change |
|---|---|
| `tailwind.config.ts` | Brand tokens, neutral scale |
| `app/globals.css` | Dead purple vars, `.gradient-text`, `.card-hover`, duplicate font import |
| `app/layout.tsx` | `themeColor`, and later the font import |

### Stale purple — visible on the live site

`.gradient-text` blends `#4B2E83` (purple) into `#FF6B35` (a third, non-brand orange). `.card-hover` casts a purple shadow. Both are leftovers from the original boilerplate and appear nowhere in either brand guide. Used across **15 files including the homepage hero**:

```
app/businesses/zillearn-bina-riya/page.tsx
app/solutions/enterprise/page.tsx
app/solutions/education/page.tsx
app/solutions/government/page.tsx
app/solutions/partners/page.tsx
app/company/company-page-client.tsx
app/insights/insights-client.tsx
components/home/hero-section.tsx
components/home/problem-section.tsx
components/home/transform-section.tsx
components/home/growth-metrics-section.tsx
components/home/pillars-section.tsx
components/home/why-kydon-section.tsx
components/home/traction-section.tsx
app/ai-university/page.tsx          ← skip, being retired
```

Fixing the two class definitions in `globals.css` resolves all 15 at once. No page edits needed.

### Off-brand palette classes — need hand editing

These bypass the tokens entirely and use raw Tailwind palette colours.

| File | Notes |
|---|---|
| `app/businesses/kydon-learning-systems/page.tsx` | **Heaviest by far.** ~38 distinct off-brand classes across purple, cyan, amber, emerald, indigo, pink, rose, teal, violet, green, blue, orange, red. Being the KLSI page, it should end up predominantly blue with orange used sparingly. Effectively a repaint. |
| `app/platform/page.tsx` | purple, blue, green, red, yellow, orange gradients |
| `app/ai-learning-engine/page.tsx` | purple fills and borders, plus status colours |
| `app/ai-learning-platform/page.tsx` | purple badge (`bg-purple-100` / `border-purple-200` / `text-purple-700`) |
| `components/home/pillars-section.tsx` | purple and amber badges |
| `app/verticals/partners/page.tsx` | green/red/yellow only — check whether these are status indicators; if so, leave |
| `app/careers/[id]/page.tsx` | single `text-green-500`, likely a status tick; leave if so |
| `components/ui/toast.tsx` | reds are destructive-variant styling. **Leave alone**, out of scope |
| `app/ai-university/page.tsx` | **Skip.** Being replaced by `/ai-workforce-factory` |

---

## 7. Guardrails

- **Never modify `middleware.ts`.** It holds 48+ legacy WordPress redirects and www canonicalisation.
- **Do not touch `app/ai-university/page.tsx`.** It's being retired by the AI Workforce Factory work.
- **Do not merge into `feature/ai-workforce-factory`.** That branch is held pending David Yeo's third-party clearances. Merge brand alignment to `main` first, then rebase the feature branch onto it. Doing it the other way round means resolving colour conflicts inside a branch that can't ship yet.
- Merging to `main` triggers an automatic Vercel deploy to kydongrp.com. Review on a preview deploy first.
- `prisma/`, `lib/db.ts`, NextAuth, AWS and Azure dependencies are unused boilerplate. Ignore them.
- The nav (`components/header.tsx`) is hardcoded rather than CMS-driven. Known limitation, not in scope here.

---

## 8. Loose end worth checking

`text-accent-foreground` is used 25 times, but `accent.foreground` is defined in neither `tailwind.config.ts` nor `globals.css`. The class is inert, so that text is inheriting whatever colour is in scope rather than the intended one. Likely affects button labels sitting on orange fills, which is exactly where the contrast risk is. Worth resolving as part of step 2.
