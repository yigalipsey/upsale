import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import NewNavbar from "../../../components/NewNavbar";
import FooterWithContact from "../../../components/FooterWithContact";
import Pattern from "../../../components/Pattern";

export const metadata = {
  title: "תיאום פגישות מקצועי – לא רק יעילות, אלא תדמית עסקית מנצחת | Upsale",
  description:
    "בתור בעל עסק, אתה בטח משקיע לא מעט במיתוג, בשיווק, באתר, בלוגו, במסרים. אבל יש נקודה אחת קריטית שרבים מפספסים — השיחה הראשונה עם הלקוח. למד איך תיאום פגישות מקצועי משפיע על התדמית העסקית שלך.",
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
            תיאום פגישות מקצועי
            <br />
            לא רק יעילות, אלא תדמית עסקית מנצחת
          </h1>
        </div>
      </div>

      {/* תוכן המאמר */}
      <div className="py-16 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              בתור בעל עסק, אתה בטח משקיע לא מעט במיתוג, בשיווק, באתר, בלוגו,
              במסרים. אבל יש נקודה אחת קריטית שרבים מפספסים — והיא לא מופיעה
              בשום באנר או מודעה. זו השיחה הראשונה עם הלקוח.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              הרגע שבו הוא מקבל טלפון, שומע את הטון, את הסדר, את הביטחון —
              ומחליט אם אתה עסק שהוא רוצה לעבוד איתו.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>תיאום פגישות לעסק</strong> הוא לא רק פעולה טכנית. זו
              הזדמנות לייצר רושם ראשוני מדויק, מקצועי, ומזמין. וזה בדיוק מה
              ש־Upsale עושה.
            </p>
          </div>

          <div className="mb-8">
            <NextImage
              src="/images/articles/telemeeting/3.avif"
              alt="תיאום פגישות מקצועי - תדמית עסקית מנצחת"
              width={800}
              height={300}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              🎯 למה זה משפיע על התדמית שלך?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              כי לקוח שמקבל שיחה מסודרת, בזמן הנכון, עם מסר ברור — מרגיש שהוא
              מדבר עם עסק רציני. הוא לא מקבל הודעה מבולבלת, לא נגרר לשיחה לא
              ברורה, ולא צריך "לרדוף" אחרי מענה.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              הוא פשוט מקבל פנייה מקצועית — וזה משנה הכול.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#001c55] p-6 my-8 rounded-r-lg">
              <p className="text-lg text-[#001c55] font-medium">
                <strong>טלמיטינג מקצועי לעסקים קטנים</strong> מייצר חוויית לקוח
                כבר מהשנייה הראשונה. וזה בדיוק מה שמבדיל אותך מהמתחרים.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              📞 איך זה נראה בפועל?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-3">💬</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  שיחה נעימה, בגובה העיניים
                </h3>
                <p className="text-sm text-gray-600">טון מקצועי וידידותי</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-3">📋</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  הצגת השירות בצורה תמציתית וברורה
                </h3>
                <p className="text-sm text-gray-600">מסר מדויק וממוקד</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-3">📅</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  תיאום פגישה ביומן שלך
                </h3>
                <p className="text-sm text-gray-600">סדר ומקצועיות</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-3">✅</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  שליחת אישור או תזכורת
                </h3>
                <p className="text-sm text-gray-600">מעקב מקצועי</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>לקוח שמגיע מוכן — ומרגיש שהוא בידיים טובות.</strong>
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              💼 למי זה מתאים?
            </h2>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li className="text-lg text-gray-700">
                עסקים שרוצים לשדר מקצוענות כבר מהשיחה הראשונה
              </li>
              <li className="text-lg text-gray-700">
                בעלי עסקים שמבינים שתדמית מתחילה בפרטים הקטנים
              </li>
              <li className="text-lg text-gray-700">
                חברות שמוכרות שירותים יוקרתיים או רגישים
              </li>
              <li className="text-lg text-gray-700">
                כל מי שרוצה לייצר חוויית לקוח איכותית — ולא רק לסגור עסקה
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              ✅ היתרונות של תיאום פגישות מקצועי
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-2xl mb-3">✨</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  רושם ראשוני חיובי
                </h3>
                <p className="text-sm text-gray-600">
                  תדמית מקצועית מהרגע הראשון
                </p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  חוויית לקוח מדויקת
                </h3>
                <p className="text-sm text-gray-600">עקביות ומקצועיות</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-2xl mb-3">🚀</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  מיצוב גבוה מול המתחרים
                </h3>
                <p className="text-sm text-gray-600">הבדלה איכותית</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-2xl mb-3">📈</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  שיפור באחוזי ההמרה
                </h3>
                <p className="text-sm text-gray-600">תוצאות מוכחות</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>שקט ניהולי והתמקדות במה שחשוב באמת</strong> — כי מישהו אחר
              מטפל בחוויית הלקוח הראשונית.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#001c55] p-6 my-8 rounded-r-lg">
              <p className="text-lg text-[#001c55] font-medium">
                "Upsale – תיאום פגישות שממצב אותך גבוה יותר"
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אנחנו לא רק מתאמים ביומן. אנחנו מייצרים חוויה. אם אתה רוצה לבדוק
              איך זה עובד אצלך — אנחנו מזמינים אותך לשיחה קצרה.
            </p>

            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 mb-4">
                🔗 השאר פרטים ונחזור אליך
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterWithContact />
    </div>
  );
};

export default Article3Page;
