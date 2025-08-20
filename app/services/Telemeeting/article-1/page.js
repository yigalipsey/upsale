import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import NewNavbar from "../../../components/NewNavbar";
import FooterWithContact from "../../../components/FooterWithContact";
import Pattern from "../../../components/Pattern";

export const metadata = {
  title:
    "טלמיטינג לעסקים קטנים – תיאום פגישות בלי כאב ראש, בלי בזבוז זמן | Upsale",
  description:
    "אם אתה בעל עסק קטן, אתה בטח מכיר את זה מקרוב: יש לידים, יש עניין, יש פניות — אבל אין זמן להתקשר, להסביר, לשכנע ולתאם. טלמיטינג לעסקים קטנים הוא הפתרון המקצועי לתיאום פגישות.",
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
            טלמיטינג לעסקים קטנים
            <br />
            תיאום פגישות בלי כאב ראש, בלי בזבוז זמן
          </h1>
        </div>
      </div>

      {/* תוכן המאמר */}
      <div className="py-16 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אם אתה בעל עסק קטן, אתה בטח מכיר את זה מקרוב: יש לידים, יש עניין,
              יש פניות — אבל אין זמן להתקשר, להסביר, לשכנע ולתאם. ובינתיים,
              לקוחות פוטנציאליים מתקררים, פגישות מתפספסות, וההזדמנויות נעלמות.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              פה בדיוק נכנס הפתרון: <strong>טלמיטינג לעסקים קטנים</strong> —
              שירות תיאום פגישות מקצועי, שבו גורם חיצוני מטפל עבורך בכל השיחות,
              מסנן את הלידים הלא רלוונטיים, ומזמן את הלקוחות הנכונים לפגישה
              איתך.
            </p>
          </div>

          <div className="mb-8">
            <NextImage
              src="/images/articles/1-2.avif"
              alt="טלמיטינג לעסקים קטנים - תיאום פגישות מקצועי"
              width={800}
              height={300}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              📞 מה זה טלמיטינג?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              טלמיטינג הוא שירות שבו אנשי מקצוע יוצרים קשר עם לקוחות פוטנציאליים
              במטרה אחת: <strong>לתאם פגישה עסקית</strong>. לא למכור, לא לשכנע,
              לא לסגור — רק להביא את הלקוח הנכון לשיחה הנכונה בזמן הנכון.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              זה שלב קריטי בתהליך העסקי, והוא דורש: זמינות גבוהה, סבלנות, יכולת
              הקשבה, הבנה של השירות שלך, ומיומנות בשיחה טלפונית.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              💼 למי זה מתאים?
            </h2>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li className="text-lg text-gray-700">
                עסקים שנותנים שירותים מקצועיים (ייעוץ, פיננסים, נדל"ן, בריאות)
              </li>
              <li className="text-lg text-gray-700">
                בעלי עסקים שאין להם זמן להתקשר לכל ליד
              </li>
              <li className="text-lg text-gray-700">
                חברות שרוצות לייעל את תהליך המכירה ולהתחיל אותו מפגישה מסודרת
              </li>
              <li className="text-lg text-gray-700">
                כל מי שמבין שהזמן שלו שווה כסף — ורוצה להשקיע אותו נכון
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              🎯 היתרונות של טלמיטינג מקצועי
            </h2>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li className="text-lg text-gray-700">חיסכון בזמן</li>
              <li className="text-lg text-gray-700">
                סינון לידים לא רלוונטיים
              </li>
              <li className="text-lg text-gray-700">
                הגדלת כמות הפגישות החודשיות
              </li>
              <li className="text-lg text-gray-700">שיפור באחוזי ההמרה</li>
              <li className="text-lg text-gray-700">
                שקט ניהולי והתמקדות במה שחשוב באמת
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#001c55] p-6 my-8 rounded-r-lg">
              <p className="text-lg text-[#001c55] font-medium">
                <strong>
                  אנחנו לא מוכרים בשבילך. אנחנו לא סוגרים עסקאות. אנחנו פשוט
                  מתאמים פגישות — ואתה מגיע מוכן לדבר עם לקוח שכבר עבר סינון.
                </strong>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              🔍 איך זה עובד?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-3">📋</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  שלב 1: העברת פרטים
                </h3>
                <p className="text-sm text-gray-600">
                  אתה מעביר לנו את פרטי השירות שלך ואת קהל היעד
                </p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-3">📝</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  שלב 2: בניית תסריט
                </h3>
                <p className="text-sm text-gray-600">
                  אנחנו בונים תסריט שיחה ממוקד לתיאום פגישה בלבד
                </p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-3">📞</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  שלב 3: יצירת קשר
                </h3>
                <p className="text-sm text-gray-600">
                  אנשי הטלמיטינג שלנו יוצרים קשר עם הלידים שלך
                </p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-3">📅</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  שלב 4: תיאום פגישה
                </h3>
                <p className="text-sm text-gray-600">
                  אנחנו מתאמים פגישה ביומן שלך — ואתה פשוט מגיע
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              Upsale – תיאום פגישות שמייצר תוצאות
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אם אתה מרגיש שאתה מפספס לקוחות רק כי לא הספקת לחזור אליהם — זה
              הזמן לשנות גישה. <strong>טלמיטינג לעסק קטן</strong> מאפשר לך לקבל
              פגישות איכותיות בלי להתעסק, בלי לרדוף, ובלי לבזבז זמן.
            </p>

            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 mb-4">
                🔗 השאר פרטים ונחזור אליך לתיאום פגישה ראשונית
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
