import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import NewNavbar from "../../../components/NewNavbar";
import FooterWithContact from "../../../components/FooterWithContact";
import Pattern from "../../../components/Pattern";

export const metadata = {
  title: "איך בונים שיטת מכירה אפקטיבית בשירותי מכירות במיקור חוץ | Upsale",
  description:
    "מכירה היא לא קסם. היא שיטה — תהליך מדויק שמתחיל בהבנה עמוקה של הלקוח, ממשיך בזיהוי הצורך, ומסתיים בהחלטה. למד איך לבנות שיטת מכירה אפקטיבית עם שירותי מכירות במיקור חוץ.",
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
            איך בונים שיטת מכירה אפקטיבית
            <br />
            בשירותי מכירות במיקור חוץ
          </h1>
        </div>
      </div>

      {/* תוכן המאמר */}
      <div className="py-16 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              מכירה היא לא קסם. היא גם לא אוסף משפטים שנאמרים בטלפון. מכירה היא
              שיטה — תהליך מדויק שמתחיל בהבנה עמוקה של הלקוח, ממשיך בזיהוי
              הצורך, ומסתיים בהחלטה. כשאתה עובד עם שירותי מכירות במיקור חוץ, אתה
              לא רק מקבל מישהו ש"מדבר עם לקוחות". אתה מקבל שיטה. מערכת. תהליך
              שמייצר תוצאה.
            </p>
          </div>

          <div className="mb-8">
            <NextImage
              src="/images/articles/sales/2.avif"
              alt="שיטת מכירה אפקטיבית במיקור חוץ"
              width={800}
              height={300}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              🔍 שלב ראשון: מיפוי העסק
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              לפני שמתחילים למכור, צריך להבין מה מוכרים. זה נשמע טריוויאלי, אבל
              הרבה עסקים לא יודעים לנסח את הערך שלהם בצורה שמוכרת. אנחנו מתחילים
              ממסמך מיפוי עסקי, שבו אנחנו שואלים:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li className="text-lg text-gray-700">מה השירות המרכזי?</li>
              <li className="text-lg text-gray-700">מי קהל היעד המדויק?</li>
              <li className="text-lg text-gray-700">מה הכאב שהשירות פותר?</li>
              <li className="text-lg text-gray-700">מה מבדל אותך מהמתחרים?</li>
            </ul>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              בלי זה — אין מכירה. יש רק דיבור.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              🧩 שלב שני: בניית מסר שיווקי חד
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              איש מכירות במיקור חוץ לא מדקלם תסריט. הוא צריך להבין את המסר,
              להרגיש אותו, ולדעת להעביר אותו בצורה טבעית. לכן אנחנו בונים מסר
              שיווקי ממוקד, שמבוסס על תוצאה ולא על תכונה.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              לדוגמה: "אנחנו לא מלמדים אותך למכור — אנחנו פשוט מוכרים בשבילך."
              או "אתה לא צריך להקים צוות. אתה צריך תוצאה. אנחנו מביאים אותה."
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              המסר הזה עובר דרך כל שיחה, כל מייל, כל פנייה.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              🎯 שלב שלישי: תהליך מכירה מובנה
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              שירותי מכירה חיצוניים לעסקים קטנים חייבים לעבוד לפי תהליך. אנחנו
              בונים תהליך שכולל:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-3">📞</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  פתיחה שמייצרת הקשבה
                </h3>
                <p className="text-sm text-gray-600">יצירת עניין ראשוני</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-3">❓</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  שאלות שמזהות צורך
                </h3>
                <p className="text-sm text-gray-600">זיהוי הכאב האמיתי</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-3">💡</div>
                <h3 className="font-bold text-[#001c55] mb-2">הצגת פתרון</h3>
                <p className="text-sm text-gray-600">מדבר תוצאה</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-3">🔄</div>
                <h3 className="font-bold text-[#001c55] mb-2">
                  התמודדות עם התנגדויות
                </h3>
                <p className="text-sm text-gray-600">פתרון חששות</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              כל שלב נבדק, נמדד, ומשופר.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              📈 שלב רביעי: מדידה ובקרה
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אנחנו לא עובדים על תחושות. אנחנו עובדים על נתונים. כל שיחה מתועדת,
              כל תוצאה נמדדת, וכל תהליך נבחן מחדש.
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li className="text-lg text-gray-700">
                כמה שיחות הובילו לסגירה?
              </li>
              <li className="text-lg text-gray-700">איפה הלקוחות נתקעים?</li>
              <li className="text-lg text-gray-700">מה אפשר לשפר?</li>
            </ul>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              זה ההבדל בין "לנסות למכור" לבין למכור באמת.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              💡 לסיכום
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              שירותי מכירות במיקור חוץ הם לא רק פתרון טכני. הם שיטה. הם תהליך
              שמבוסס על הבנה עמוקה, מסר מדויק, ואנשי מכירות שיודעים להוביל לקוח
              לקבל החלטה.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אם אתה רוצה לראות איך זה עובד אצלך — אנחנו מזמינים אותך לשיחה
              קצרה. נבין יחד מה אתה מציע, מי הלקוחות שלך, ואיך אפשר לבנות לך
              שיטת מכירה שמייצרת תוצאה.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#001c55] p-6 my-8 rounded-r-lg">
              <p className="text-lg text-[#001c55] font-medium">
                "Upsale — כי מכירה היא לא פעולה. היא שיטה."
              </p>
            </div>

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

export default Article2Page;
