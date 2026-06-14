# Technical SEO Findings — upsaleil.com

## Summary Score: 35/100

---

## Finding 1: Canonical URLs Point to Wrong Domain [CRITICAL]

Every page on `upsaleil.com` has its canonical tag pointing to `https://upsale.co.il`. Additionally, service subpages canonical to the homepage rather than their own URL.

**Evidence:**
- `https://upsaleil.com` → canonical: `https://upsale.co.il`
- `https://upsaleil.com/articles` → canonical: `https://upsale.co.il`
- `https://upsaleil.com/services/sales-outsourcing` → canonical: `https://upsale.co.il` (homepage, not service page)
- `https://upsaleil.com/services/Telemeeting` → canonical: `https://upsale.co.il` (homepage, not service page)

**Impact:** Google receives conflicting signals about which domain is canonical. Link equity is split between two domains. Crawl budget is wasted.

**Fix:** In `app/layout.js`, change the canonical base URL to `https://upsaleil.com`. Ensure each page sets self-referencing canonicals.

---

## Finding 2: Broken Service Page [CRITICAL]

`https://upsaleil.com/services/telemarketing` returns HTTP 404 (Vercel error page). The page exists in the codebase but is not deployed or is at a different path.

**Impact:** Broken internal link. Users and crawlers hitting this URL get an error. The correct page is at `/services/Telemeeting` (different casing).

**Fix:** Either deploy the page at `/services/telemarketing` or add a 301 redirect to `/services/Telemeeting`.

---

## Finding 3: /thank-you Indexed [HIGH]

`https://upsaleil.com/thank-you` returns HTTP 200, has no `noindex` meta tag, and is actively included in the sitemap. This is a post-conversion confirmation page with no SEO value.

**Impact:** Google indexes a thin, low-value page. Wastes crawl budget and could appear in search results instead of actual landing pages.

**Fix:** Add `<meta name="robots" content="noindex">` to the /thank-you page. Remove it from sitemap.

---

## Finding 4: Sitemap Quality Issues [HIGH]

**Issues identified:**
- All 16 URLs share identical `lastmod`: `2025-10-06T10:10:12.760Z` (8+ months stale)
- All URLs have identical `changefreq`: `weekly`
- All URLs have identical `priority`: `0.7`
- `/thank-you` is included
- `/services/telemarketing` is missing
- No image sitemap despite AVIF images with namespace declared

**Impact:** Stale lastmod dates reduce Google's crawl priority. Uniform priorities give no guidance on what matters most. Including /thank-you sends wrong signals.

**Fix:** Generate sitemap dynamically on build/deploy with accurate dates. Priority: 1.0 homepage, 0.8 services, 0.6-0.7 articles. Remove /thank-you.

---

## Finding 5: Missing Security Headers [MEDIUM]

| Header | Status |
|--------|--------|
| Strict-Transport-Security | ✅ max-age=63072000 |
| Content-Security-Policy | ❌ Missing |
| X-Content-Type-Options | ❌ Missing |
| X-Frame-Options | ❌ Missing |

**Fix:** Add headers in `vercel.json` or via Next.js `headers()` in `next.config.mjs`.

---

## Finding 6: Missing Hreflang Tags [MEDIUM]

No `hreflang` tags exist on any page for this Hebrew-language site.

**Fix:** Add `<link rel="alternate" hreflang="he" href="...">` and `x-default` to all pages via Next.js `metadata.alternates.languages`.
