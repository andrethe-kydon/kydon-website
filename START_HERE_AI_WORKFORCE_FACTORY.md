# AI Workforce Factory — START HERE (v2)

**Written:** 10 Sep 2026
**Supersedes:** v1 (2 Sep). The order of work has changed — read "Why the order changed" below.

---

## The task

Replace `kydongrp.com/ai-university` with a new "AI Workforce Factory" page at `/ai-workforce-factory`, built from David's design reference, with illustrations, partner logos and testimonials editable in Sanity.

**Now sequenced behind the brand alignment work.**

---

## Why the order changed

`BRAND_ALIGNMENT_CHANGE_BRIEF.md` (Agnes, 10 Sep) §7 states it directly: merge brand alignment to `main` first, then rebase the Workforce Factory branch onto it. The reverse means resolving colour conflicts inside a branch that can't ship.

In practice this has already happened: the brand work ran ahead on `feature/brand-alignment` and is essentially complete (see Phase 1). So the page gets built on top of finished brand tokens and the confirmed fonts, rather than against the old off-brand `#F15522` and Inter.

**Start at Phase 2.** Phase 1 is retained below as a record of what's done and what Agnes still owes.

---

## What's already done ✅

| | |
|---|---|
| Live page analysed | `app/ai-university/page.tsx`, 280 lines |
| Design reference read | 452-line HTML, all sections mapped |
| Design decisions | D1–D5 settled with David |
| Sanity Studio source | **Found** at `~/kydon-sanity-studio`, project `rndr2995` |
| Studio backed up | Private repo `kydon-sanity-studio`, commit `b3d31e4` |
| Schema written | `aiWorkforceFactoryPage.ts`, now in `~/kydon-sanity-studio/schemas/` (not yet wired) |
| Briefs in repo root | Workforce Factory brief, brand alignment brief, this file |

---

## Decisions locked

| # | Decision |
|---|---|
| **D1** | Build at **`/ai-workforce-factory`**. Redirect from `/ai-university` via `next.config.js`, **not** `middleware.ts`. |
| **D2** | **Light theme**, main-site colours — not the reference's dark navy. |
| **D3** | Hero + 3 pipeline illustrations uploadable in Sanity. |
| **D4** | Ecosystem partners: logo upload, unlimited, add over time. |
| **D5** | Testimonials: quote + name + role + photo upload. |
| **D6** | **This page is Kydon Group → orange primary.** No `data-brand="klsi"` wrapper; default `:root` tokens apply. |
| **D7** | **Fonts are settled** — Agnes confirmed **Montserrat** for body, **League Spartan** for headings and subheadings, both self-hosted via `next/font/google`. The page inherits them; add no font families. |
| **—** | Build now, **don't merge the page** until clearances land. |

---

## ⚠️ Two rules

**1. Don't merge the page branch to `main`.** Every merge auto-deploys to kydongrp.com, and the page will contain David's draft quote, an unconfirmed SP quote and an uncleared PM Wong quote. Working on the branch is completely safe.

**2. Decide this before merging the brand work.** §3 of Agnes's brief marks the colour values *provisional, awaiting her confirmation*. Merging to `main` deploys them to production. Either get her sign-off first, or keep brand work on `feature/brand-alignment` and branch the page off **that** instead of `main`. Don't push unconfirmed brand colours live by accident.

---

# PHASE 1 — Brand tokens ✅ essentially done

Already committed on `feature/brand-alignment` (pushed to origin), latest `185ad37`:

- Colour retokenisation — brand CSS variables, rebuilt neutral scale, dead purple removed
- KLSI blue scoping, uniform card bodies, brand band, CTA ring
- Two accessibility passes — CTA fills, white-panel buttons, hover states
- Contrast sweep — small-text primary uses, panel gradients, badge and icon tints, footer hover
- **Font swap** — Montserrat body, League Spartan headings

`BRAND_ALIGNMENT_CHANGE_BRIEF.md` in the repo root is **stale**: it still says font work is blocked on the Futura licence. Agnes has since confirmed Montserrat and League Spartan, both Google Fonts, no licence needed. Worth annotating the brief so nobody reads it and reverts course.

## What's left

**Agnes still owes the colour sign-off** — five derived shades per brand, plus the finding that brand orange and blue can't sit directly against each other (1.61:1) without a white or grey edge. That list is final and ready to send.

Also outstanding from the brand brief, none of it blocking this page: SVG logos for both brands, the 40° trapezium and triangle vectors, and the guide inconsistencies raised with Agnes.

## Before starting Phase 2

Confirm nothing is uncommitted and the branch is where you left it:

```bash
cd ~/kydon-website
git status --short
git log --oneline -1
```

Should be clean at `185ad37` (or later, if you've pushed more since).

---

# PHASE 2 — Build the page

## 2.1 Branch off the brand work

If brand alignment merged to `main`:

```bash
git checkout main && git pull origin main
git checkout -b feature/ai-workforce-factory
```

If it's still on its own branch:

```bash
git checkout feature/brand-alignment
git checkout -b feature/ai-workforce-factory
```

## 2.2 Prompt for Claude Code

> Read `AI_WORKFORCE_FACTORY_CHANGE_BRIEF.md` and `kydon-ai-workforce-factory-dev-reference.html` in the repo root before doing anything. Also read section 3 of `BRAND_ALIGNMENT_CHANGE_BRIEF.md` for the colour usage rules.
>
> Create `app/ai-workforce-factory/page.tsx`. Convert the reference HTML to a Next.js page using our light theme — apply the dark-to-light colour mapping in section 2 of the Workforce Factory brief and the conversion notes in section 6.1.
>
> Use a hardcoded `defaultContent` object for all copy, following the pattern in `app/ai-university/page.tsx`. Do not touch Sanity, `lib/sanity-queries.ts` or `lib/sanity-types.ts` yet.
>
> Colour rules — these override the reference design:
> - This is a Kydon Group page, so orange primary. No `data-brand` wrapper.
> - Use the `primary` / `accent` / `neutral` tokens. Never hardcode a hex.
> - **The reference uses small uppercase orange text for every section eyebrow. Brand orange fails contrast at that size.** Use the derived link orange `#D14400` via a token, or `neutral-600`. This applies to all eight eyebrows.
> - No white text on an orange fill at normal size — large or bold only.
> - Body copy `neutral-600`, headings `neutral-900`.
>
> Typography — the site now uses Montserrat for body and League Spartan for headings, both already loaded. Do not add or import any font family.
> - Use semantic `h1`–`h4` tags for all headings. A global rule in `globals.css` applies League Spartan to those automatically.
> - If any `div` or `span` carries heading-scale text (`text-2xl` and above), give it the existing `font-display` utility class, or it will render in Montserrat.
> - League Spartan has a larger x-height and tighter tracking than the reference assumed, so headings will render bigger and denser at the same size class. Montserrat is wider than Inter, so body copy takes more horizontal space and cards may gain a line.
> - **Flag anything that overflows or wraps awkwardly rather than silently stepping down size classes.** I want to see the list before any retuning.
>
> Also: strip the reference's own nav and footer, use `lucide-react` icons rather than the inline SVGs, use `next/link` for internal links and `<a target="_blank">` only for futureedgeinstitute.com, and fix the duplicate `class` attribute on line 186 of the reference.
>
> Do not modify `middleware.ts`. Do not delete or change `app/ai-university/page.tsx`. Do not change the header, footer or sitemap yet.

## 2.3 Check

Open `http://localhost:3000/ai-workforce-factory`.

- Does it read as part of the Kydon site?
- Narrow the window — do the three-across grids stack?
- Are the eyebrow labels legible, not pale orange on white?
- Do the buttons have readable labels on their orange fills?
- Does the white header sit comfortably above the hero?

```bash
git add -A && git commit -m "Add AI Workforce Factory page with hardcoded content"
```

## 2.4 Metadata, redirect, internal links

> Now do sections 6.2, 6.3 and 6.4 of the Workforce Factory brief: rewrite the page metadata and JSON-LD, add the `/ai-university` → `/ai-workforce-factory` redirect in `next.config.js`, and update all six internal references in 6.4. Leave `app/ai-university/page.tsx` in place. Do not modify `middleware.ts`.

Verify:

```bash
grep -rn "ai-university\|AI University" --include="*.ts*" . | grep -v node_modules
```

Should return only the redirect rule.

---

# PHASE 3 — Sanity

Only once the page looks right. Work in `~/kydon-sanity-studio`.

```bash
cd ~/kydon-sanity-studio
git checkout -b add-workforce-factory-schema
cat schemas/index.ts
```

**Paste `index.ts` into a chat with me** — I'll give you the two lines to add. The schema file is already in `schemas/`.

Then check locally:

```bash
npx sanity dev          # http://localhost:3333
```

Look for "AI Workforce Factory Page" in the sidebar. Confirm the group tabs render and the partner/testimonial arrays have working image upload.

**Before deploying, check the version:**

```bash
grep -n '"sanity"' package.json
```

Deployed Studio is **3.99.0**. If local matches, deploy is safe. If not, tell me first — you'd be pushing a Studio upgrade alongside the schema change.

```bash
npx sanity deploy       # overwrites kydon-cms.sanity.studio
git add -A && git commit -m "Add aiWorkforceFactoryPage schema" && git push -u origin add-workforce-factory-schema
```

## Then wire the site

Back in `~/kydon-website`:

> Do section 6.5 of the Workforce Factory brief: replace the types in `lib/sanity-types.ts` and the query in `lib/sanity-queries.ts` for the new `aiWorkforceFactoryPage` type. The GROQ query needs explicit projections for the image fields and must filter partners and testimonials on `approved == true`. Keep the `defaultContent` fallback as it is.
>
> Also section 6.6: the dead `wg3ga4x6` project ID appears in `lib/sanity.ts` line 8, `.env.example` line 2 and `CMS_SETUP_GUIDE.md` line 11 — all three should be `rndr2995`.

---

# PHASE 4 — Test, then stop

In `kydon-cms.sanity.studio`, create the AI Workforce Factory Page document, fill it in, **click Publish**.

Test:

- Toggle a testimonial's "Cleared for publication" **off** → should disappear
- Add a partner without ticking "Permission received" → should not appear
- Add/remove partners to see the grid at 3, 7 and 12 — odd counts can leave gaps
- Upload an illustration and check it renders at sensible size

**Then stop.** Merging waits for David.

## When clearances land

```bash
cd ~/kydon-website
rm app/ai-university/page.tsx
git add -A && git commit -m "Remove superseded AI University page"
git checkout main && git merge feature/ai-workforce-factory && git push origin main
```

Vercel deploys automatically. Verify the redirect, check the OG preview, resubmit the sitemap.

---

# Things that look like bugs but aren't

**Drafts are invisible to the website.** Saved-but-unpublished means the query returns nothing and the page silently falls back to `defaultContent` — looking fine while ignoring your edits. A green dot beside a document name means unpublished changes. This caused the team-member confusion in August.

**Publishing takes up to a minute.** `useCdn: true` plus `revalidate = 60`. Budget two minutes.

**No Sanity API token needed.** `rndr2995` is publicly readable; the old token belonged to the dead project and was removed from Vercel deliberately.

**Vercel env var changes need a manual redeploy** with build cache unticked.

---

# Open questions

| Question | Notes |
|---|---|
| **Is `factory.kydongrp.com` live?** | An April project in `~/Downloads/kydon-ai-workforce-factory-latest.zip` is a separate standalone landing page for "AI Workforce Factory & OPC Launchpad", built for that subdomain with a HubSpot waitlist form. If deployed, two pages share the name and will compete in search. Decide: replace, link, or distinct audiences? |
| **Salvage the FAQ?** | That zip has `components/FAQ.tsx`, ~6.5KB of written FAQ copy absent from David's reference. Code isn't portable (CSS Modules) but copy is. Its `Hero.tsx` `stats` array may hold the sourcing for the three national figures. |
| **Nav placement** | Page currently sits in the Solutions dropdown. Stay, or move under Businesses next to FEI? Not needed until 2.4. |
| **Agnes: colour sign-off** | Five derived shades per brand, plus the orange-on-blue 1.61:1 finding. Blocks merging brand work to `main` — see rule 2. List is final and ready to send. |
| **Agnes: assets** | SVG logos both brands (standard + reverse white), 40° trapezium and triangle vectors. `/public` holds only `kydon-logo.png` and `kydon-logo-light.png`. |
| ~~Agnes: Futura licence~~ | **Resolved** — Montserrat and League Spartan confirmed, both Google Fonts. |

---

# Outstanding with David (not blocking the build)

| Item |
|---|
| Soh Wai Wah quote — SP written approval |
| PM Lawrence Wong quote — verify transcript, clear use |
| 7 partner logos — brand permission + files |
| 3 national stats — verify against primary sources |
| Claims: "95% SkillsFuture funded", "built with SP", "bridged Train-and-Place" |
| Illustrations: hero + 3 pipeline (Canva) |

The `approved` toggles exist so the page can be finished and reviewed while these are in flight.

---

# Reference

| | |
|---|---|
| Website repo | `github.com/andrethe-kydon/kydon-website` → `~/kydon-website` |
| Studio repo | `github.com/andrethe-kydon/kydon-sanity-studio` (private) → `~/kydon-sanity-studio` |
| Sanity project | `rndr2995`, dataset `production` |
| Studio | `kydon-cms.sanity.studio` (v3.99.0) |
| Sanity manage | `sanity.io/manage/project/rndr2995` |
| Dead project — ignore | `wg3ga4x6` |
| Production branch | `main` — auto-deploys to kydongrp.com |
| Branches | `feature/brand-alignment`, then `feature/ai-workforce-factory` |
| Brand orange | `#FE5000` (Pantone 021 C) · links/small text `#D14400` |
| Brand blue | `#00A3E0` (Pantone 2995 C) · links/small text `#0078A8` |
| Local | Mac, Node v26.5.0, Yarn 1.22.22 |

**Never modify `middleware.ts`** — 48+ legacy WordPress redirects and www canonicalisation.

`prisma/`, `lib/db.ts`, NextAuth, AWS and Azure are unused boilerplate. Ignore.
