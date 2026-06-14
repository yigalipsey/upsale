# Schema & Structured Data Findings — upsaleil.com

## Summary Score: 0/100

---

## Finding: Zero JSON-LD Structured Data [CRITICAL]

No JSON-LD structured data was found on any page of the site. The homepage and all subpages return zero `application/ld+json` script blocks.

**Impact:**
- No rich snippets in Google search results (FAQ accordions, review stars, breadcrumbs)
- No Knowledge Graph entry for the business
- AI crawlers cannot reliably extract business information for citation
- Competitors with schema markup have significant SERP visibility advantage

**Recommended Schema Implementation:**

### 1. Organization (All Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Upsale",
  "url": "https://upsaleil.com",
  "logo": "https://upsaleil.com/images/smal-logo.avif",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+972-53-335-0910",
    "contactType": "sales",
    "availableLanguage": ["Hebrew", "English"]
  },
  "email": "office@upsaleil.com"
}
```

### 2. LocalBusiness (All Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Upsale",
  "description": "שירותי מכירות במיקור חוץ לעסקים קטנים ובינוניים",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[ADD ADDRESS]",
    "addressLocality": "[ADD CITY]",
    "addressCountry": "IL"
  }
}
```
**Note:** Requires physical address to be added to the site first.

### 3. FAQ (Homepage)
The homepage has 10 FAQ items that should be marked up with `FAQPage` schema:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text]"
      }
    }
  ]
}
```
**Impact:** FAQ rich results can occupy significant SERP real estate with expandable Q&A.

### 4. Article (All 11 Article Pages)
Each article should have:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article title]",
  "author": {
    "@type": "Person",
    "name": "[Author name]"
  },
  "datePublished": "[Publication date]",
  "dateModified": "[Last modified]",
  "publisher": {
    "@type": "Organization",
    "name": "Upsale"
  }
}
```

### 5. BreadcrumbList (All Pages)
### 6. Service (Service Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service name]",
  "provider": { "@type": "Organization", "name": "Upsale" },
  "description": "[Service description]"
}
```

**Implementation:** Add JSON-LD via `<script>` tags in Next.js layout/page components, or use a centralized schema generation utility.
