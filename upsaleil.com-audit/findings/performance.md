# Performance & Core Web Vitals Findings — upsaleil.com

## Summary Score: 65/100

---

## Strengths

| Metric | Value | Grade |
|--------|-------|-------|
| TTFB | ~150ms (Vercel edge) | ✅ Excellent |
| Static asset caching | 1 year, immutable | ✅ Excellent |
| Compression | Brotli, 81% reduction (87KB→16KB) | ✅ Excellent |
| Font loading | Self-hosted WOFF2, Hebrew-subsetted (9KB), font-display:swap | ✅ Excellent |
| CLS prevention | All images have width/height | ✅ Excellent |
| Responsive images | srcSet with sizes on all images | ✅ Good |
| Image formats | 12/15 use AVIF | ⚠️ See issues |
| Render-blocking | Only CSS (35KB), all JS async | ✅ Good |

---

## Finding 1: Mobile Hero Image is PNG [HIGH]

`hero-3.145fc0ae.png` is the mobile hero image, served as PNG at 262KB @750w. It has a 3840w raw size of 1.97 MB. An AVIF equivalent would be approximately 25KB @750w — a 90% reduction.

**LCP Impact:**
- Current mobile LCP (3G estimate): 2.0-3.5 seconds
- With AVIF, estimated mobile LCP: 0.8-1.5 seconds
- This is the single largest performance improvement available

**Fix:** Re-export hero-3 as AVIF. Replace the import in the Hero component from `.png` to `.avif`. Next.js Image optimization will handle the rest.

---

## Finding 2: Large Vendors JavaScript Bundle [MEDIUM]

The vendors chunk (`vendors-e90aab703694ea4c.js`) is 767KB. Total JavaScript payload across all chunks is approximately 942KB.

**Breakdown:**
- vendors: 767KB
- polyfills: 113KB
- main-app: ~4KB
- page-specific: 39KB + 17KB
- Total: ~942KB

While all scripts load with `async` (not render-blocking), parsing 942KB of JavaScript still impacts Time to Interactive, especially on low-end mobile devices.

**Fix:** Audit vendor dependencies. Consider:
- Dynamic imports for heavy dependencies
- Tree-shaking configuration review
- Replacing large libraries with lighter alternatives
- Code splitting by route

---

## Finding 3: Unused Google Fonts Preconnects [LOW]

Preconnect hints exist for `fonts.googleapis.com` and `fonts.gstatic.com`, but the Rubik font is self-hosted via Next.js font optimization. These preconnects open TCP+TLS connections that are never used (~100ms cost on 3G).

**Fix:** Remove the preconnect tags for Google Fonts origins.

---

## Finding 4: Lordicon External Dependency [LOW]

Three animated icon configurations load from `cdn.lordicon.com`. These are small JSON payloads served via CloudFront, but represent an additional third-party origin.

**Fix:** Verify Lordicon icons load lazily and are not in the critical rendering path. Consider self-hosting static icon SVGs instead.

---

## Estimated Core Web Vitals

| Metric | Desktop | Mobile | Target |
|--------|---------|--------|--------|
| LCP | 0.8-1.2s ✅ | 2.0-3.5s ❌ | < 2.5s |
| INP | < 100ms ✅ | < 200ms ✅ | < 200ms |
| CLS | < 0.05 ✅ | < 0.05 ✅ | < 0.1 |
| TTFB | ~150ms ✅ | ~200ms ✅ | < 800ms |

**Bottom line:** Mobile LCP is the only CWV at risk, and it's entirely fixable by converting the mobile hero image to AVIF.
