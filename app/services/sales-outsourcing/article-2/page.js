import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewNavbar from "../../../components/NewNavbar";
import FooterWithContact from "../../../components/FooterWithContact";
import Pattern from "../../../components/Pattern";

export const metadata = {
  title: "הפתרון לעסקים קטנים: גמישות, תוצאות, אפס התעסקות | Upsale",
  description:
    "עסק קטן לא צריך להחזיק מחלקת מכירות מלאה. אנחנו מציעים מודל גמיש שבו אתה רוכש בנק שעות של איש מכירות לפי הצורך שלך. מתחילים עם חצי משרה ובונים יחד את ההיקף לפי הביצועים.",
};

const Article2Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <NewNavbar />

      {/* כותרת המאמר */}
      <div className="relative text-white py-16 px-6 lg:px-24 overflow-hidden">
        <Pattern />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            הפתרון לעסקים קטנים: גמישות, תוצאות, אפס התעסקות
          </h1>
        </div>
      </div>

      {/* תוכן המאמר */}
      <div className="py-16 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/images/articles/2-1.avif"
              alt="מודל גמיש מכירות לעסקים קטנים"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              עסק קטן לא צריך להחזיק מחלקת מכירות מלאה. ב־Upsale אנחנו מציעים
              מודל גמיש שבו אתה רוכש בנק שעות של איש מכירות לפי הצורך שלך. זה
              אומר:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li className="text-lg text-gray-700">אין התחייבות למשרה מלאה</li>
              <li className="text-lg text-gray-700">
                אין עלויות נלוות כמו שכר, ביטוח, הכשרות
              </li>
              <li className="text-lg text-gray-700">
                כן יש תוצאות: יותר פגישות, יותר עסקאות, יותר הכנסות
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אנחנו מתחילים עם חצי משרה, ובונים יחד איתך את ההיקף לפי הביצועים.
              כך אתה שומר על שליטה תקציבית — ומקבל תוצאות אמיתיות.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              למה זה משתלם?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              במקום לנסות "ללמוד תוך כדי תנועה", אתה מקבל מישהו שזה כל מה שהוא
              עושה — מדבר עם לקוחות, מתמודד עם התנגדויות, וסוגר עסקאות.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              איך זה עובד?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-3">1️⃣</div>
                <h3 className="font-bold text-[#001c55] mb-2">התחלה קטנה</h3>
                <p className="text-sm text-gray-600">מתחילים עם חצי משרה</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-3">2️⃣</div>
                <h3 className="font-bold text-[#001c55] mb-2">בנייה הדרגתית</h3>
                <p className="text-sm text-gray-600">
                  בונים יחד את ההיקף לפי הביצועים
                </p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-3">3️⃣</div>
                <h3 className="font-bold text-[#001c55] mb-2">תוצאות מוכחות</h3>
                <p className="text-sm text-gray-600">
                  עלייה של 25% במכירות תוך 3 חודשים
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#001c55] p-6 my-8 rounded-r-lg">
              <p className="text-lg text-[#001c55] font-medium">
                "מודל הגמישות שלנו מאפשר לך לשלוט בתקציב ולקבל תוצאות אמיתיות
                בלי התחייבות ארוכת טווח"
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterWithContact />
    </div>
  );
};

export default Article2Page;
