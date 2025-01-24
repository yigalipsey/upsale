import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Rubik } from "next/font/google"; // ייבוא פונקציית הפונטים מגוגל

// הגדרת פונט Rubik
const rubik = Rubik({
  subsets: ["hebrew", "latin"], // תומך בעברית ולטינית
  weight: ["400", "500", "700"], // הגדרת משקלים לפי הצורך
  variable: "--font-rubik", // משתנה CSS לשימוש בפונט
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: " Smart Sales | המומחים במכירות במיקור חוץ",
  description:
    "הרחיבו את צוות המכירות שלכם עם מיקור חוץ איכותי! אנו מספקים צוותי מכירות מקצועיים עם ניהול צמוד, תסריטי שיחה מותאמים אישית וסדנאות מכירה קבועות. חיסכו זמן, כסף ומשאבים – ותנו לנו לדאוג להצלחה שלכם.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
