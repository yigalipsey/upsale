# Visual & Images SEO Findings — upsaleil.com

## Summary Score: 70/100

---

## Strengths

| Check | Result |
|-------|--------|
| Alt text coverage | 100% — all images have descriptive Hebrew alt text |
| Modern formats | 12/15 images use AVIF |
| Responsive images | srcSet + sizes on all images via Next.js Image |
| Preload hints | Hero images preloaded with fetchPriority="high" |
| Logo optimization | smal-logo.avif (~2KB), upsale-logo-withname.avif (~5KB) |
| CLS prevention | All images have explicit width and height |

---

## Finding 1: Mobile Hero is PNG [HIGH]

Same issue as detailed in performance findings. `hero-3.145fc0ae.png` is the only PNG among 15 site images. At 750w resolution (common mobile viewport), it's 262KB vs an estimated 25KB AVIF — a 10.5x difference.

This is both an image format and a performance issue. The desktop hero (`hero.2c3d63b4.avif`) is already AVIF — the mobile variant was likely overlooked.

**Fix:** Convert hero-3 to AVIF. Update the component import.

---

## Finding 2: Article Images Could Be Better Compressed [LOW]

Two article hero images (`articles/sales/1.avif` at 68KB and `articles/sales/3.avif` at 65KB, both @1200w) are larger than necessary for article card thumbnails.

**Fix:** Apply stronger AVIF compression (quality 65-70 instead of default) or reduce max resolution to 828w for article card contexts.

---

## Finding 3: Preload Markup Has Excessive srcSet Entries [LOW]

Hero image preloads include srcSet entries up to 3840w for images displayed at 200px (mobile) or 475px (desktop). The browser correctly selects the right size, but the preload markup is verbose.

This is a Next.js default behavior and doesn't cause extra downloads, so it's purely cosmetic.

---

## Image Inventory

| Image | Format | Raw Size | Notes |
|-------|--------|----------|-------|
| hero.avif (desktop) | AVIF | 51KB | ✅ Good |
| hero-3.png (mobile) | PNG | 1.97MB | ❌ Convert to AVIF |
| smal-logo.avif | AVIF | ~2KB | ✅ Excellent |
| upsale-logo-withname.avif | AVIF | ~5KB | ✅ Excellent |
| aboutus.avif | AVIF | 24KB | ✅ Good |
| itronot/2.avif | AVIF | 11KB | ✅ Good |
| itronot/3.avif | AVIF | 39KB | ✅ Good |
| itronot/4.avif | AVIF | 13KB | ✅ Good |
| articles/sales/1.avif | AVIF | 68KB | ⚠️ Could compress |
| articles/sales/2.avif | AVIF | 36KB | ✅ Good |
| articles/sales/3.avif | AVIF | 65KB | ⚠️ Could compress |
| 344.svg | SVG | Small | ✅ Good |
