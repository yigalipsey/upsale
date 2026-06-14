# SEO Action Plan: upsaleil.com

**Generated:** 2026-06-14
**Health Score:** 34/100

---

## Phase 1: Critical Fixes (Week 1)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 1 | **Fix canonical URLs** — Change root layout canonical from `upsale.co.il` to `upsaleil.com`. Set self-referencing canonicals on all subpages. | 30 min | ⭐⭐⭐⭐⭐ |
| 2 | **Fix "Upsale | Upsale" double branding** — Remove duplicate brand suffix in page metadata. Pattern: `Page Title | Upsale` not `Page Title | Upsale | Upsale`. | 30 min | ⭐⭐⭐⭐ |
| 3 | **Add meta descriptions to all pages** — Unique 150-160 char descriptions per page. Fix in `generateMetadata` exports. | 2 hours | ⭐⭐⭐⭐ |
| 4 | **Restore or redirect /services/telemarketing** — Either create the page or 301-redirect to `/services/Telemeeting`. | 15 min | ⭐⭐⭐ |
| 5 | **Convert mobile hero to AVIF** — Replace `hero-3.png` (2MB raw, 262KB @750w) with AVIF (est. 25KB @750w). | 15 min | ⭐⭐⭐ |
| 6 | **Add noindex to /thank-you** and remove from sitemap. | 15 min | ⭐⭐⭐ |
| 7 | **Fix duplicate title on /articles** — Change from homepage title to "מאמרים מקצועיים | Upsale" or similar unique title. | 5 min | ⭐⭐⭐ |

## Phase 2: High-Impact Improvements (Weeks 2-3)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 8 | **Rebuild sitemap** — Dynamic generation with accurate lastmod, differentiated priorities (1.0 homepage, 0.8 services, 0.6-0.7 articles), remove /thank-you, add missing pages. | 4 hours | ⭐⭐⭐⭐ |
| 9 | **Create dedicated About page** (`/about`) — Include founder names, team credentials, company history, physical business address, and contact information. | 4 hours | ⭐⭐⭐⭐ |
| 10 | **Add JSON-LD structured data** — Organization schema on all pages, FAQ schema on FAQ section, Article schema on articles, BreadcrumbList, and LocalBusiness schema. | 6 hours | ⭐⭐⭐⭐ |
| 11 | **Fix heading structure** — Homepage: merge into 1 H1. Service pages: add more H2s for proper content hierarchy. | 2 hours | ⭐⭐⭐ |
| 12 | **Add proper OG tags per page** — Each page should have its own title, description, and image for social sharing. | 2 hours | ⭐⭐⭐ |
| 13 | **Fix navigation** — Replace button elements with proper `<a href>` links or implement proper subpage navigation that works from all pages. | 3 hours | ⭐⭐⭐ |
| 14 | **Replace Google Site Verification placeholder** — Change `your-google-verification-code` to real token. | 5 min | ⭐⭐ |

## Phase 3: Content & Authority (Month 2)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 15 | **Expand thin content pages** — Add 300+ words to `/services/sales-outsourcing`, `/services/Telemeeting`, and all article-1/2/3 subpages. | 8 hours | ⭐⭐⭐⭐ |
| 16 | **Add client testimonials/case studies** — Substantiate "40+ businesses" and "25% increase" claims with named examples. | 6 hours | ⭐⭐⭐⭐ |
| 17 | **Add author credentials to articles** — Named authors with bios, LinkedIn links, qualifications. | 3 hours | ⭐⭐⭐ |
| 18 | **Add physical business address** — Required for Israeli commercial sites and LocalBusiness schema. | 30 min | ⭐⭐⭐ |
| 19 | **Add hreflang tags** — `he-IL` on all pages, `x-default` fallback. | 1 hour | ⭐⭐ |
| 20 | **Fix article URL slugs** — Replace `/services/*/article-1` etc. with descriptive Hebrew slugs. | 3 hours | ⭐⭐ |
| 21 | **Add security headers** — Content-Security-Policy, X-Content-Type-Options, X-Frame-Options in vercel.json. | 2 hours | ⭐⭐ |

## Phase 4: Monitoring & Iteration (Ongoing)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 22 | **Set up Google Search Console** — Verify with real token, monitor indexation, clicks, CTR. | 1 hour | ⭐⭐⭐ |
| 23 | **Reduce vendors JS bundle** — Audit 767KB vendors chunk for tree-shaking opportunities, lazy load heavy dependencies. | Ongoing | ⭐⭐ |
| 24 | **Create llms.txt** — AI crawler accessibility file at root. | 1 hour | ⭐⭐ |
| 25 | **Remove unused Google Fonts preconnects** — Rubik is self-hosted; preconnects waste connections. | 5 min | ⭐ |
| 26 | **Set up regular sitemap regeneration** — Ensure lastmod dates stay accurate on each deploy. | 2 hours | ⭐⭐ |
| 27 | **Monitor Core Web Vitals** — Track LCP, INP, CLS via CrUX/GA4 once GSC is connected. | Ongoing | ⭐⭐ |
| 28 | **Set up content review cadence** — Quarterly review of thin pages, duplicate content, and E-E-A-T signals. | Ongoing | ⭐⭐ |

---

## Effort Summary

| Phase | Timeframe | Est. Hours | Key Wins |
|-------|-----------|------------|----------|
| Phase 1: Critical Fixes | Week 1 | ~4 hours | Canonicals, meta descriptions, titles, broken pages |
| Phase 2: High-Impact | Weeks 2-3 | ~23 hours | Sitemap, About page, schema, navigation, OG tags |
| Phase 3: Content & Authority | Month 2 | ~25 hours | Thin content, testimonials, authors, URLs |
| Phase 4: Monitoring | Ongoing | ~7 hours + ongoing | Analytics, performance, maintenance |
| **Total** | | **~59 hours** | |
