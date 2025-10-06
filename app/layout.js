import "./globals.css";
import { Rubik } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://upsale.co.il"),
  title: {
    default: "Upsale | המומחים במכירות במיקור חוץ",
    template: "%s | Upsale",
  },
  description:
    "Upsale - שירותי מכירה חכמים לעסקים קטנים. הגדלת מכירות, תהליכים מותאמים אישית, ודוחות מדידים.",
  keywords: [
    "מיקור חוץ מכירות",
    "צוות מכירות חיצוני",
    "שירותי מכירות",
    "ניהול מכירות",
    "תסריטי שיחה",
    "סדנאות מכירה",
    "הרחבת עסק",
    "מכירות מקצועיות",
  ],
  authors: [{ name: "Upsale Team" }],
  creator: "Upsale",
  publisher: "Upsale",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://upsale.co.il",
    siteName: "Upsale",
    title: "Upsale | המומחים במכירות במיקור חוץ",
    description:
      "הרחיבו את צוות המכירות שלכם עם מיקור חוץ איכותי! אנו מספקים צוותי מכירות מקצועיים עם ניהול צמוד, תסריטי שיחה מותאמים אישית וסדנאות מכירה קבועות.",
    images: [
      {
        url: "/images/hero.avif",
        width: 1200,
        height: 630,
        alt: "Upsale - מיקור חוץ מכירות",
      },
      {
        url: "/images/smal-logo.avif",
        width: 120,
        height: 40,
        alt: "Upsale Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upsale | המומחים במכירות במיקור חוץ",
    description: "הרחיבו את צוות המכירות שלכם עם מיקור חוץ איכותי!",
    images: ["/images/hero.avif", "/images/smal-logo.avif"],
    creator: "@upsale",
  },
  alternates: {
    canonical: "https://upsale.co.il",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/smal-logo.avif", sizes: "32x32", type: "image/avif" },
      { url: "/images/smal-logo.avif", sizes: "16x16", type: "image/avif" },
    ],
    shortcut: "/images/smal-logo.avif",
    apple: "/images/smal-logo.avif",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#092274" />
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preload" href="/images/hero.avif" as="image" />
        <link rel="preload" href="/images/hero-3.png" as="image" />
      </head>
      <body className={`antialiased ${rubik.className}`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
