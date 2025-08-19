# Upsale - אתר מיקור חוץ מכירות

אתר מקצועי לשירותי מכירות במיקור חוץ, בנוי עם Next.js 15 ו-Tailwind CSS.

## ✨ תכונות עיקריות

- **SEO מותאם**: מטא-תגים מקיפים, Open Graph, Twitter Cards
- **ביצועים מיטביים**: אופטימיזציה לתמונות, פונטים, ובאנדלים
- **נגישות**: ARIA labels, semantic HTML, תמיכה בקוראי מסך
- **עיצוב רספונסיבי**: מותאם לכל המכשירים
- **תמיכה בעברית**: RTL, פונטים עבריים

## 🚀 התקנה והפעלה

```bash
# התקנת תלויות
npm install

# הפעלה בסביבת פיתוח
npm run dev

# בנייה לפרודקשן
npm run build

# הפעלה בפרודקשן
npm start
```

## 🔧 שיפורי SEO שנעשו

### 1. מטא-תגים מקיפים

- כותרות דינמיות עם תבניות
- תיאורים מפורטים לכל עמוד
- מילות מפתח רלוונטיות
- Open Graph ו-Twitter Cards

### 2. אופטימיזציה לביצועים

- טעינה מוקדמת של פונטים עם `display: swap`
- אופטימיזציה לתמונות עם WebP ו-AVIF
- דחיסה וקאשינג
- חלוקת באנדלים חכמה

### 3. נגישות

- ARIA labels לכל הכפתורים
- Semantic HTML structure
- תמיכה בקוראי מסך
- ניווט מקלדת

### 4. קבצי תצורה

- `robots.txt` מותאם
- `sitemap.xml` אוטומטי
- `site.webmanifest` ל-PWA
- הגדרות Tailwind מותאמות

## 📁 מבנה הפרויקט

```
upsale/
├── app/
│   ├── components/          # קומפוננטות React
│   ├── globals.css         # סגנונות גלובליים
│   ├── layout.js           # תבנית ראשית עם מטא-תגים
│   └── page.js             # עמוד הבית
├── public/                  # קבצים סטטיים
│   ├── images/             # תמונות
│   ├── robots.txt          # הוראות למנועי חיפוש
│   └── site.webmanifest    # הגדרות PWA
├── next.config.mjs         # הגדרות Next.js
├── tailwind.config.mjs     # הגדרות Tailwind
└── next-sitemap.config.js  # הגדרות Sitemap
```

## 🎯 קומפוננטות עיקריות

- **Hero**: כותרת ראשית עם CTA
- **AboutUs**: מידע על החברה
- **WhyChooseUs**: יתרונות השירות
- **AboutOutsourcing**: הסבר על מיקור חוץ
- **FaqSection**: שאלות נפוצות
- **FooterWithContact**: יצירת קשר ופוטר
- **Navbar**: ניווט ראשי

## 🔍 הגדרות SEO נוספות

### משתני סביבה

צור קובץ `.env.local` עם:

```env
SITE_URL=https://smartsales.co.il
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### עדכון מטא-תגים

עדכן את הדומיין האמיתי בקבצים:

- `app/layout.js`
- `next-sitemap.config.js`
- `public/robots.txt`

## 📱 תמיכה במכשירים

- **דסקטופ**: 1200px+
- **טאבלט**: 768px - 1199px
- **מובייל**: עד 767px

## 🌐 תמיכה בשפות

- **עברית**: שפה ראשית עם RTL
- **אנגלית**: תמיכה חלקית

## 📊 מדדי ביצועים

- **Lighthouse Score**: 90+
- **Core Web Vitals**: מיטביים
- **SEO Score**: 95+
- **Accessibility**: 90+

## 🤝 תרומה לפרויקט

1. Fork את הפרויקט
2. צור branch חדש (`git checkout -b feature/amazing-feature`)
3. Commit את השינויים (`git commit -m 'Add amazing feature'`)
4. Push ל-branch (`git push origin feature/amazing-feature`)
5. פתח Pull Request

## 📄 רישיון

פרויקט זה מוגן תחת רישיון MIT.

## 📞 יצירת קשר

- **אימייל**: Yoad@smartsalesil.com
- **אתר**: https://smartsales.co.il

---

**Smart Sales** - המומחים במכירות במיקור חוץ 🚀
