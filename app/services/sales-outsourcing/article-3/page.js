import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import NewNavbar from "../../../components/NewNavbar";
import FooterWithContact from "../../../components/FooterWithContact";
import Pattern from "../../../components/Pattern";

export const metadata = {
  title: "איך בוחרים את איש המכירות הנכון לעסק שלך | Upsale",
  description:
    "גיוס איש מכירות לעסק קטן הוא לא רק עניין של ניסיון — אלא של התאמה. הפרמטרים שחשוב לבדוק: יכולת הקשבה, הבנה עמוקה של השירות שלך, גישה אנושית ויצירתיות בהתמודדות עם התנגדויות.",
};

const Article3Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <NewNavbar />

      {/* כותרת המאמר */}
      <div className="relative text-white py-16 px-6 lg:px-24 overflow-hidden">
        <Pattern />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            איך בוחרים את איש המכירות הנכון לעסק שלך
          </h1>
        </div>
      </div>

      {/* תוכן המאמר */}
      <div className="py-16 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <NextImage
              src="/images/articles/sales/3.avif"
              alt="בחירת איש מכירות לעסק קטן"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              גיוס איש מכירות לעסק קטן הוא לא רק עניין של ניסיון — אלא של התאמה.
              הפרמטרים שחשוב לבדוק:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li className="text-lg text-gray-700">
                יכולת הקשבה והבנת צרכי הלקוח
              </li>
              <li className="text-lg text-gray-700">
                הבנה עמוקה של השירות או המוצר שלך
              </li>
              <li className="text-lg text-gray-700">
                גישה אנושית ויצירתיות בהתמודדות עם התנגדויות
              </li>
              <li className="text-lg text-gray-700">
                ניסיון בתחום הספציפי שלך
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              למה התאמה חשובה יותר מניסיון?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              איש מכירות עם 20 שנות ניסיון בתחום אחר לא בהכרח יבין את העסק שלך
              כמו מישהו עם 5 שנים בתחום שלך. ההתאמה היא המפתח להצלחה.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              איך אנחנו בוחרים את איש המכירות הנכון?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-[#001c55] mb-3 text-lg">
                  שלב 1: הבנת העסק
                </h3>
                <p className="text-gray-700">
                  אנחנו לומדים לעומק את העסק שלך, השירותים, הלקוחות והאתגרים
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-[#001c55] mb-3 text-lg">
                  שלב 2: התאמת המועמד
                </h3>
                <p className="text-gray-700">
                  בוחרים מועמד עם ניסיון רלוונטי ותכונות מתאימות
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-[#001c55] mb-3 text-lg">
                  שלב 3: הדרכה והכשרה
                </h3>
                <p className="text-gray-700">
                  המועמד מקבל הדרכה מקיפה על העסק והשירותים שלך
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-[#001c55] mb-3 text-lg">
                  שלב 4: ליווי ומעקב
                </h3>
                <p className="text-gray-700">
                  אנחנו מלווים את התהליך ומבטיחים תוצאות
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              מה הופך איש מכירות לטוב?
            </h2>

            <div className="bg-blue-50 border-l-4 border-[#001c55] p-6 my-8 rounded-r-lg">
              <p className="text-lg text-[#001c55] font-medium mb-4">
                "איש מכירות טוב לא רק מוכר — הוא פותר בעיות ומביא ערך אמיתי
                ללקוח"
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-700">מקשיב יותר מאשר מדבר</li>
                <li className="text-gray-700">
                  מבין את הצרכים האמיתיים של הלקוח
                </li>
                <li className="text-gray-700">מציע פתרונות מותאמים אישית</li>
                <li className="text-gray-700">בונה אמון וקשר ארוך טווח</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <FooterWithContact />
    </div>
  );
};

export default Article3Page;
