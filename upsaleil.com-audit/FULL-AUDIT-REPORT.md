# Full SEO Audit Report: upsaleil.com

**Date:** 2026-06-14
**Auditor:** Claude SEO Audit (via AgriciDaniel/seo-audit v2.2.0)
**Site:** https://upsaleil.com
**Business Type:** B2B Sales Outsourcing / Lead Generation Agency (Israeli SMB Market)
**Language:** Hebrew (RTL)

---

## Executive Summary

### SEO Health Score: 34/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 35 | 7.7 |
| Content Quality | 23% | 40 | 9.2 |
| On-Page SEO | 20% | 25 | 5.0 |
| Schema / Structured Data | 10% | 0 | 0.0 |
| Performance (CWV) | 10% | 65 | 6.5 |
| AI Search Readiness | 10% | 20 | 2.0 |
| Images | 5% | 70 | 3.5 |
| **Total** | **100%** | | **33.9** |

### Top 5 Critical Issues

1. **Canonical URLs point to wrong domain** — Every page canonicals to `upsale.co.il` instead of `upsaleil.com`, actively harming SEO equity
2. **No meta descriptions on any page** — Major missed opportunity for click-through rates
3. **No structured data / schema markup** — Zero JSON-LD on any page (no Organization, LocalBusiness, Article, FAQ, or BreadcrumbList)
4. **No dedicated About page** — `/about` returns 404, no founder names, team credentials, or physical address
5. **/services/telemarketing returns 404** — Broken service page link in the codebase

### Top 5 Quick Wins

1. Fix canonical URLs to point to `upsaleil.com` (single change in root layout)
2. Add meta descriptions to all pages
3. Convert mobile hero image from PNG to AVIF (~90% size reduction)
4. Add noindex to `/thank-you` and remove from sitemap
5. Fix duplicate title on `/articles` page (shares homepage title)

---

## 1. Technical SEO (35/100)

### Crawlability

| Check | Status | Notes |
|-------|--------|-------|
| robots.txt | ✅ | Allows all, disallows /admin/* and /api/* |
| Sitemap accessible | ✅ | 16 URLs at /sitemap.xml |
| HTTP→HTTPS redirect | ✅ | 308 Permanent Redirect |
| Broken pages | ❌ | `/services/telemarketing` returns 404 |
| Missing standalone pages | ❌ | `/about`, `/services`, `/faq`, `/contact` all 404 |

### Sitemap Quality Issues

| Issue | Severity |
|-------|----------|
| All 16 URLs have identical lastmod (2025-10-06) — over 8 months stale | High |
| All priorities set to 0.7 — no differentiation | High |
| /thank-you included but should not be indexed | High |
| Missing /services/telemarketing (when fixed) | Medium |
| No image sitemap despite AVIF images | Low |
| Article-1/2/3 generic URL slugs instead of descriptive | Low |

### Security Headers

| Header | Status |
|--------|--------|
| HSTS | ✅ max-age=63072000 (2 years) |
| Content-Security-Policy | ❌ Missing |
| X-Content-Type-Options | ❌ Missing |
| X-Frame-Options | ❌ Missing |

### Canonical Tags
**CRITICAL:** Every page's canonical points to `https://upsale.co.il` instead of the live domain `https://upsaleil.com`. Additionally, service subpages canonical to the homepage, not their own URLs. This means Google sees conflicting signals about which domain and which URLs to index.

### JavaScript Rendering
Site is Next.js. Verify SSR/SSG is properly configured so crawlers receive full HTML content, not empty shells.

---

## 2. Content Quality (40/100)

### E-E-A-T Assessment

| Signal | Status | Severity |
|--------|--------|----------|
| Dedicated About page | ❌ 404 Not Found | High |
| Author credentials | ❌ "Upsale Team" only | High |
| Physical address | ❌ Not listed | High |
| Phone number | ⚠️ WhatsApp only | Medium |
| Client testimonials/case studies | ❌ None | High |
| "40+ businesses" claim unsubstantiated | ❌ No evidence | High |
| Contact form | ✅ Present | Pass |
| SSL/HTTPS | ✅ Working | Pass |

### Thin Content Pages

| Page | Word Count | Severity |
|------|-----------|----------|
| `/services/Telemeeting/article-1` | ~180-220 | Critical |
| `/services/sales-outsourcing/article-1` | ~450-500 | Medium |
| `/services/sales-outsourcing` | ~400-500 | Medium |
| `/services/Telemeeting` | ~400-500 | Medium |
| `/articles/sales-outsourcing-benefits` | ~500-600 | Low |

### Duplicate Content Issues

- `/` and `/articles` share identical title tag
- Service pages have nearly identical meta descriptions
- Feature box content copied verbatim across both service pages
- "Upsale | Upsale" double branding in title tags on 4 of 5 main pages

---

## 3. On-Page SEO (25/100)

### Title Tags

| Page | Title | Length | Verdict |
|------|-------|--------|---------|
| Homepage | `Upsale | המומחים במכירות במיקור חוץ` | 58 | ✅ Good |
| /articles | `Upsale | המומחים במכירות במיקור חוץ` | 58 | ❌ Duplicate with homepage |
| /articles/sales-outsourcing-benefits | `שירותי מכירות במיקור חוץ – למה זה עדיף בשבילך \| Upsale \| Upsale` | 101 | ❌ Too long, double branding |
| /services/sales-outsourcing | `שירותי מכירות במיקור חוץ \| Upsale \| Upsale` | 63 | ⚠️ Slightly over 60, double branding |
| /services/Telemeeting | `שירותי מכירות בטלפון במיקור חוץ \| Upsale \| Upsale` | 76 | ❌ Over 60, double branding |

### Meta Descriptions
**No page has a meta description tag that Google will display in full.** All are either missing, too long (200+ chars), or duplicated across pages.

### Heading Structure
- Homepage has 3 H1s (should have exactly 1)
- Service pages have minimal H2 structure (only 2 H2s each)
- H3s are misused as main content headers on service pages

### Open Graph Tags
Service pages and article subpages inherit homepage OG tags — social sharing will display generic homepage content instead of page-specific information.

### Navigation Issues
Nav buttons use `<button>` elements with JavaScript scroll instead of proper `<a href>` links. Users on subpages cannot navigate to sections that only exist on the homepage.

---

## 4. Schema & Structured Data (0/100)

**No JSON-LD structured data was found on any page.**

Missing opportunities:
- **Organization** schema (with logo, contact, social profiles)
- **LocalBusiness** schema (with address, phone, geo coordinates)
- **FAQ** schema (10 FAQ items on homepage are unmarked)
- **Article** schema (5 articles + 6 service articles = 11 article pages)
- **BreadcrumbList** schema
- **Service** schema on service pages

---

## 5. Performance / Core Web Vitals (65/100)

### Strengths
- TTFB: ~150ms (excellent, Vercel edge)
- Static asset caching: 1 year with immutable
- Compression: Brotli, 81% reduction (87KB → 16KB)
- Font loading: Self-hosted Hebrew-subsetted WOFF2 (9KB), font-display:swap
- CLS prevention: All images have explicit width/height

### Issues

| Issue | Severity |
|-------|----------|
| Mobile hero image is PNG (2MB raw, 262KB @750w) vs potential 25KB AVIF | High |
| Vendors JS chunk: 767KB (large for content site) | Medium |
| Total JS payload: ~942KB | Medium |
| Unused Google Fonts preconnects (Rubik is self-hosted) | Low |
| Lordicon external dependency (3 JSON icon files) | Low |

### Estimated CWV
- **LCP Desktop**: 0.8-1.2s ✅
- **LCP Mobile (3G)**: 2.0-3.5s ❌ (PNG hero is bottleneck)
- **INP**: Good ✅
- **CLS**: < 0.05 ✅

---

## 6. Images (70/100)

### Strengths
- 100% alt text coverage on all pages (descriptive Hebrew text)
- 12 of 15 images use AVIF format
- Responsive srcSet on all images
- Proper preload hints on hero images

### Issues
- Mobile hero image uses PNG instead of AVIF (8-12x size difference)
- Two article images at 65-68KB could be compressed further
- Preload markup includes unnecessary ultra-wide entries (up to 3840w for a 200px image)

---

## 7. AI Search Readiness (20/100)

| Signal | Status |
|--------|--------|
| llms.txt | ❌ Not present |
| Structured data | ❌ None (essential for AI citation) |
| FAQ markup | ❌ 10 FAQ items have no schema |
| Brand mention signals | ⚠️ No Google Business Profile, no review platforms linked |
| Content citability | ⚠️ Claims lack citations, no author credentials |
| Hebrew AI readiness | ⚠️ Hebrew content is underrepresented in AI training data |

---

## Artifact Index

| File | Description |
|------|-------------|
| `FULL-AUDIT-REPORT.md` | This comprehensive report |
| `ACTION-PLAN.md` | Prioritized remediation plan |
| `audit-data.json` | Structured data envelope |
| `findings/technical.md` | Technical SEO findings |
| `findings/content.md` | Content quality findings |
| `findings/schema.md` | Schema & structured data findings |
| `findings/performance.md` | Performance & CWV findings |
| `findings/visual.md` | Visual & images findings |
