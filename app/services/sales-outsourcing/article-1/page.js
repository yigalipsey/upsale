import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewNavbar from "../../../components/NewNavbar";
import FooterWithContact from "../../../components/FooterWithContact";
import Pattern from "../../../components/Pattern";

export const metadata = {
  title:
    "שירותי מכירות במיקור חוץ – הפתרון החכם לעסקים שרוצים למכור יותר ולהתעסק פחות | Upsale",
  description:
    "בעל עסק קטן או בינוני? שירותי מכירות במיקור חוץ הם הפתרון החכם לעסקים שרוצים למכור יותר ולהתעסק פחות. מודל גמיש, תוצאות מוכחות, ואפס כאב ראש.",
};

const Article1Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <NewNavbar />

      {/* כותרת המאמר */}
      <div className="relative text-white py-16 px-6 lg:px-24 overflow-hidden">
        <Pattern />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            שירותי מכירות במיקור חוץ
            <br />
            הפתרון החכם לעסקים שרוצים למכור יותר ולהתעסק פחות
          </h1>
        </div>
      </div>

      {/* תוכן המאמר */}
      <div className="py-16 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              בעל עסק קטן או בינוני? אתה בטח מכיר את זה מקרוב. הטלפון מצלצל,
              לקוח מתעניין, אתה עונה, מסביר, מנסה לשכנע — ובסוף היום אתה מרגיש
              שעשית הכול חוץ מלמכור באמת. המכירות הן הלב של העסק, אבל הן גם אחד
              האתגרים הכי גדולים. לא כל אחד נולד איש מכירות, ולא כל עסק יכול
              להרשות לעצמו להקים מחלקת מכירות פנימית.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ופה בדיוק נכנסים שירותי מכירות במיקור חוץ. זה לא טרנד — זו
              אסטרטגיה. עסקים שמבינים את הערך של מיקור חוץ במכירות, מצליחים
              לייצר תוצאות בלי להעמיס על עצמם תהליכים, גיוסים, הכשרות וניהול.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              למה בכלל לשקול שירותי מכירות במיקור חוץ?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              כי אתה לא אמור להיות גם מנכ"ל, גם משווק וגם איש מכירות. איש מכירות
              במיקור חוץ הוא מישהו שזה כל מה שהוא עושה — מדבר עם לקוחות, מתמודד
              עם התנגדויות, וסוגר עסקאות. הוא לא צריך שתלמד אותו את העסק שלך
              מההתחלה. הוא מקבל ממך את המידע, בונה תסריט שיחה מותאם אישית, ויוצא
              לדרך.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              וזה לא רק חיסכון בזמן — זה גם חיסכון בכסף. במקום להעסיק עובד במשרה
              מלאה, אתה יכול לרכוש בנק שעות של שירותי מכירות לפי צריכה, ולהגדיל
              את ההיקף רק כשאתה רואה תוצאות.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              איך זה עובד בפועל?
            </h2>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li className="text-lg text-gray-700">
                אתה מעביר מידע על השירות שלך, קהל היעד, והציפיות שלך
              </li>
              <li className="text-lg text-gray-700">
                אנחנו בונים תסריט שיחה שמותאם בדיוק לעסק שלך
              </li>
              <li className="text-lg text-gray-700">
                אנשי המכירות שלנו מתחילים לעבוד — שיחות, פגישות, סגירות
              </li>
              <li className="text-lg text-gray-700">
                אתה מקבל דוחות, תובנות, ותוצאות
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אנחנו לא מגיעים לבית העסק, לא מלמדים אותך איך למכור, ולא מבקשים
              ממך לנהל את התהליך. אנחנו פשוט מוכרים — ואתה רואה את ההכנסות
              גדלות.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              תיאום פגישות לעסק – בלי כאב ראש
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אחד החסמים הגדולים אצל בעלי עסקים הוא תיאום פגישות. אתה מקבל ליד,
              אבל לא תמיד יש לך זמן להתקשר, להסביר, לשכנע, ולתאם. שירותי
              טלמיטינג לעסקים קטנים הם חלק בלתי נפרד מהמוקד שלנו — ואנחנו יודעים
              איך להפוך שיחה קרה לפגישה חמה.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              מודל גמיש לפי צריכה
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אנחנו יודעים שעסק קטן צריך גמישות. לכן אנחנו מציעים שירותי מכירות
              לעסק קטן במודל של בנק שעות, שבו אתה משלם רק לפי הצורך שלך. אין
              התחייבות למשרה מלאה, אין עלויות נלוות — רק תוצאות.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אתה מתחיל בקטן, רואה תוצאות, ומגדיל את ההיקף לפי הביצועים. כך אתה
              שומר על שליטה תקציבית — ומקבל תוצאות אמיתיות.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              תוצאות שמדברות בעד עצמן
            </h2>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              לקוחות שבחרו בנו מדווחים על:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li className="text-lg text-gray-700">
                עלייה בכמות הפגישות עם לקוחות רלוונטיים
              </li>
              <li className="text-lg text-gray-700">שיפור באחוזי הסגירה</li>
              <li className="text-lg text-gray-700">תזרים מזומנים יציב יותר</li>
              <li className="text-lg text-gray-700">
                שקט נפשי וניהול ממוקד יותר
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אנחנו לא מבטיחים קסמים — אנחנו מבטיחים תהליך. תהליך שמייצר תוצאות,
              ומאפשר לך להתמקד במה שאתה באמת טוב בו: לנהל ולפתח את העסק שלך.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              רוצה לבדוק התאמה?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אם הגעת עד לכאן, כנראה שאתה מרגיש שהגיע הזמן לשנות גישה. אנחנו
              מזמינים אותך לשיחה קצרה שבה נבין יחד מה אתה מציע, מי הלקוחות שלך,
              ואיך אפשר לייצר לך יותר מכירות — בלי להעמיס עליך.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#001c55] p-6 my-8 rounded-r-lg">
              <p className="text-lg text-[#001c55] font-medium">
                "Upsale — כי הגיע הזמן למכור יותר, ולהתעסק פחות."
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 mb-4">
                🔗 השאר פרטים ונחזור אליך בהקדם.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterWithContact />
    </div>
  );
};

export default Article1Page;
