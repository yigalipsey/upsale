import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import NewNavbar from "../../../components/NewNavbar";
import FooterWithContact from "../../../components/FooterWithContact";
import Pattern from "../../../components/Pattern";

export const metadata = {
  title:
    "תיאום פגישות ללקוחות קרים – כשגם שיחה לא צפויה יכולה להפוך להזדמנות עסקית | Upsale",
  description:
    "רוב בעלי העסקים יודעים לתאם פגישה עם לקוח שכבר השאיר פרטים. אבל מה קורה כשאין ליד חם? למד איך שירותי טלמיטינג ללקוחות קרים יכולים לפתוח דלתות חדשות לעסק שלך.",
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
            תיאום פגישות ללקוחות קרים
            <br />
            כשגם שיחה לא צפויה יכולה להפוך להזדמנות עסקית
          </h1>
        </div>
      </div>

      {/* תוכן המאמר */}
      <div className="py-16 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              רוב בעלי העסקים יודעים לתאם פגישה עם לקוח שכבר השאיר פרטים, כבר
              התעניין, כבר "חם". אבל מה קורה כשאין ליד חם? מה קורה כשאין פניות
              חדשות? מה קורה כשהעסק שלך צריך לגדול אבל אין מאיפה?
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              הנה התשובה שכמעט אף אחד לא רוצה לשמוע:{" "}
              <strong>לקוחות קרים</strong>. כן, אותם אנשים שלא שמעו עליך, שלא
              השאירו פרטים, שלא התעניינו — הם יכולים להיות המקור הכי טוב לידים
              חדשים לעסק שלך.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אבל איך מגיעים אליהם? איך פותחים שיחה? איך הופכים שיחה לא צפויה
              להזדמנות עסקית? הנה המדריך המלא ל
              <strong>תיאום פגישות ללקוחות קרים</strong>.
            </p>
          </div>

          <div className="mb-8">
            <NextImage
              src="/images/articles/telemeeting/2.avif"
              alt="תיאום פגישות ללקוחות קרים - הזדמנויות עסקיות חדשות"
              width={800}
              height={300}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              🧊 מה זה בדיוק "לקוחות קרים"?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              לקוחות קרים הם אנשים או עסקים שלא יצרו איתך קשר מעולם, לא השאירו
              פרטים, ולא הביעו עניין בשירותים שלך. הם "קרים" כי אין להם שום
              חיבור או היכרות איתך או עם העסק שלך.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#001c55] p-6 my-8 rounded-r-lg">
              <p className="text-lg text-[#001c55] font-medium">
                <strong>האמת המפתיעה:</strong> לקוחות קרים הם למעשה הרוב המוחלט
                של השוק שלך. רק אחוז קטן מהאנשים שמתאימים לך כבר יצרו איתך קשר.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#001c55] mb-3 mt-6">
              דוגמאות ללקוחות קרים:
            </h3>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li className="text-lg text-gray-700">
                עסקים באותו תחום שלא שמעו על השירותים שלך
              </li>
              <li className="text-lg text-gray-700">
                אנשים פרטיים שצריכים את מה שאתה מוכר אבל לא יודעים עליך
              </li>
              <li className="text-lg text-gray-700">
                חברות גדולות שעובדות עם מתחרים שלך
              </li>
              <li className="text-lg text-gray-700">
                לקוחות פוטנציאליים באזורים גיאוגרפיים חדשים
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              🎯 למה לקוחות קרים כל כך חשובים?
            </h2>

            <h3 className="text-xl font-bold text-[#001c55] mb-3 mt-6">
              1. פוטנציאל גדול יותר
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              בעוד שלידים חמים הם מוגבלים ומתכלים, לקוחות קרים הם כמעט
              אינסופיים. כל יום יש אנשים חדשים שצריכים את מה שאתה מוכר, אבל לא
              יודעים עליך. זה שוק עצום שלא נוגעים בו.
            </p>

            <h3 className="text-xl font-bold text-[#001c55] mb-3 mt-6">
              2. פחות תחרות
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              רוב המתחרים שלך מתמקדים בלקוחות חמים — אנשים שכבר התעניינו. זה
              אומר שיש לך פחות תחרות על לקוחות קרים, ואתה יכול להיות הראשון
              שמגיע אליהם.
            </p>

            <h3 className="text-xl font-bold text-[#001c55] mb-3 mt-6">
              3. הזדמנויות לא צפויות
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              לקוחות קרים יכולים לפתוח בפניך דלתות שלא חשבת עליהן. אולי הם
              צריכים משהו שאתה לא מוכר עדיין, אולי הם יכולים להמליץ עליך לאחרים,
              אולי הם יכולים להיות שותפים עסקיים.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              📞 איך עושים טלמיטינג ללקוחות קרים?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              טלמיטינג ללקוחות קרים הוא אמנות בפני עצמה. זה לא כמו לדבר עם מישהו
              שכבר התעניין. זה דורש גישה אחרת, טכניקות אחרות, וסבלנות אחרת.
            </p>

            <h3 className="text-xl font-bold text-[#001c55] mb-3 mt-6">
              השלב הראשון: הכנה נכונה
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              לפני שאתה מתקשר ללקוח קר, אתה צריך להכין את עצמך כמו שצריך:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li className="text-lg text-gray-700">
                <strong>מחקר:</strong> למד על העסק או האדם שאתה מתקשר אליו
              </li>
              <li className="text-lg text-gray-700">
                <strong>מסר ברור:</strong> מה בדיוק אתה רוצה להגיד ב-30 שניות
                הראשונות?
              </li>
              <li className="text-lg text-gray-700">
                <strong>ערך מוסף:</strong> מה אתה יכול להציע להם חוץ ממוצר או
                שירות?
              </li>
              <li className="text-lg text-gray-700">
                <strong>תגובות אפשריות:</strong> מה תגיד אם הם אומרים "לא
                מעוניין"?
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#001c55] mb-3 mt-6">
              השלב השני: פתיחת השיחה
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              הפתיחה היא הקריטית ביותר. יש לך 10-15 שניות להרשים, לעניין, ולגרום
              להם להקשיב. הנה כמה דוגמאות לפתיחות טובות:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
                <div className="text-2xl mb-3">✅</div>
                <h3 className="font-bold text-green-700 mb-2">פתיחה טובה</h3>
                <p className="text-sm text-green-600">
                  "שלום, אני מתקשר מ-[שם החברה]. ראיתי שאתם עושים [X] ואני חושב
                  שיש לי משהו שיכול לעזור לכם לחסוך כסף."
                </p>
              </div>
              <div className="text-center p-6 bg-red-50 border border-red-200 rounded-lg">
                <div className="text-2xl mb-3">❌</div>
                <h3 className="font-bold text-red-700 mb-2">פתיחה גרועה</h3>
                <p className="text-sm text-red-600">
                  "שלום, אני מתקשר כדי למכור לכם [מוצר]."
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#001c55] mb-3 mt-6">
              השלב השלישי: בניית עניין
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אחרי שהצלחת לפתוח, אתה צריך לבנות עניין. זה לא הזמן למכור — זה
              הזמן להבין מה הם צריכים ואיך אתה יכול לעזור.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-[#001c55] mb-4">
                שאלות טובות לבניית עניין:
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-700">
                  "איך אתם מתמודדים כרגע עם [הבעיה שאתה פותר]?"
                </li>
                <li className="text-gray-700">
                  "מה הדבר הכי מאתגר לכם בתחום הזה?"
                </li>
                <li className="text-gray-700">"איך זה משפיע על העסק שלכם?"</li>
                <li className="text-gray-700">
                  "מה היה קורה אם הייתם פותרים את זה?"
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              🚫 הטעויות הכי נפוצות בטלמיטינג ללקוחות קרים
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="text-center p-6 bg-red-50 border border-red-200 rounded-lg">
                <div className="text-2xl mb-3">🚩</div>
                <h3 className="font-bold text-red-700 mb-2">מכירה ישירה</h3>
                <p className="text-sm text-red-600">
                  מתחילים למכור לפני שבונים עניין
                </p>
              </div>
              <div className="text-center p-6 bg-red-50 border border-red-200 rounded-lg">
                <div className="text-2xl mb-3">🚩</div>
                <h3 className="font-bold text-red-700 mb-2">אין מחקר</h3>
                <p className="text-sm text-red-600">מתקשרים בלי לדעת על העסק</p>
              </div>
              <div className="text-center p-6 bg-red-50 border border-red-200 rounded-lg">
                <div className="text-2xl mb-3">🚩</div>
                <h3 className="font-bold text-red-700 mb-2">סקריפט נוקשה</h3>
                <p className="text-sm text-red-600">
                  לא מתאימים את השיחה לצרכים שלהם
                </p>
              </div>
              <div className="text-center p-6 bg-red-50 border border-red-200 rounded-lg">
                <div className="text-2xl mb-3">🚩</div>
                <h3 className="font-bold text-red-700 mb-2">ויתור מהיר</h3>
                <p className="text-sm text-red-600">מוותרים אחרי "לא" ראשון</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              💡 איך הופכים שיחה לא צפויה להזדמנות עסקית?
            </h2>

            <h3 className="text-xl font-bold text-[#001c55] mb-3 mt-6">
              1. התמקדו בערך, לא במכירה
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              במקום לנסות למכור מיד, התמקדו במה שאתם יכולים לתת להם. אולי זה
              מידע, אולי זה קשר, אולי זה רעיון. הערך שלכם לא חייב להיות מוצר או
              שירות.
            </p>

            <h3 className="text-xl font-bold text-[#001c55] mb-3 mt-6">
              2. בנו מערכת יחסים
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              לקוחות קרים לא הופכים ללקוחות מיד. הם צריכים להכיר אתכם, לבטוח
              בכם, ולהבין שאתם אמינים. זה לוקח זמן, אבל זה שווה את זה.
            </p>

            <h3 className="text-xl font-bold text-[#001c55] mb-3 mt-6">
              3. הציעו עזרה חינם
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              לפעמים הדרך הכי טובה להראות ערך היא לעזור חינם. אולי זה ייעוץ קצר,
              אולי זה קשר למישהו אחר, אולי זה רעיון פשוט. זה מראה שאתם לא רק
              רוצים למכור.
            </p>

            <h3 className="text-xl font-bold text-[#001c55] mb-3 mt-6">
              4. תקשרו עם אנשים אחרים
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אם מישהו לא מתאים לכם, אולי הוא מכיר מישהו שמתאים. בקשו המלצות,
              בקשו קשרים, בקשו להכיר אנשים אחרים. זה יכול לפתוח דלתות חדשות.
            </p>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              📊 איך מודדים הצלחה בטלמיטינג ללקוחות קרים?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              טלמיטינג ללקוחות קרים הוא משחק ארוך טווח. לא תקבלו תוצאות מיד, אבל
              זה לא אומר שזה לא עובד. הנה איך מודדים הצלחה:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-bold text-[#001c55] mb-2">שיחות</h3>
                <p className="text-sm text-gray-600">
                  כמה אנשים הסכימו לדבר איתכם
                </p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">⏰</div>
                <h3 className="font-bold text-[#001c55] mb-2">זמן שיחה</h3>
                <p className="text-sm text-gray-600">כמה זמן הם דיברו איתכם</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🤝</div>
                <h3 className="font-bold text-[#001c55] mb-2">הסכמה לפגישה</h3>
                <p className="text-sm text-gray-600">כמה הסכימו להיפגש</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              🎯 איך Upsale עוזרת עם לקוחות קרים?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אנחנו ב־Upsale מתמחים בטלמיטינג ללקוחות קרים. הצוות שלנו יודע איך
              לפתוח שיחות, לבנות עניין, ולהפוך שיחות לא צפויות להזדמנויות
              עסקיות.
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li className="text-lg text-gray-700">
                <strong>מחקר מעמיק:</strong> אנחנו לומדים על כל לקוח לפני השיחה
              </li>
              <li className="text-lg text-gray-700">
                <strong>סקריפטים מותאמים:</strong> כל שיחה מותאמת לצרכים
                הספציפיים
              </li>
              <li className="text-lg text-gray-700">
                <strong>צוות מקצועי:</strong> אנשים שיודעים איך לבנות עניין ולא
                למכור
              </li>
              <li className="text-lg text-gray-700">
                <strong>מעקב מתמשך:</strong> אנחנו לא מוותרים אחרי שיחה אחת
              </li>
              <li className="text-lg text-gray-700">
                <strong>דוחות מפורטים:</strong> אתם רואים בדיוק מה קורה בכל שיחה
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#001c55] p-6 my-8 rounded-r-lg">
              <p className="text-lg text-[#001c55] font-medium">
                <strong>המטרה שלנו:</strong> להפוך כל שיחה להזדמנות. גם אם לא
                מוכרים מיד, אנחנו בונים מערכות יחסים שיכולות להפוך לעסקאות
                בעתיד.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#001c55] mb-4 mt-8">
              🚀 איך מתחילים?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אם אתם רוצים לנסות טלמיטינג ללקוחות קרים, הנה הצעדים הראשונים:
            </p>

            <ol className="list-decimal list-inside mb-6 space-y-2">
              <li className="text-lg text-gray-700">
                <strong>הגדירו מטרות:</strong> מה אתם רוצים להשיג? כמה פגישות?
              </li>
              <li className="text-lg text-gray-700">
                <strong>בחרו קהל יעד:</strong> עם מי אתם רוצים לדבר?
              </li>
              <li className="text-lg text-gray-700">
                <strong>הכינו מסר:</strong> מה אתם רוצים להגיד ב-30 שניות?
              </li>
              <li className="text-lg text-gray-700">
                <strong>התחילו קטן:</strong> התחילו עם 10-20 שיחות ביום
              </li>
              <li className="text-lg text-gray-700">
                <strong>מדדו תוצאות:</strong> עקבו אחרי מה עובד ומה לא
              </li>
            </ol>

            <div className="text-center my-12">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 font-bold rounded-lg shadow-lg hover:brightness-110 transition text-lg"
                style={{
                  background: "linear-gradient(to right, #FFC107, #FFD54F)",
                  color: "#001c55",
                }}
              >
                רוצים לנסות טלמיטינג ללקוחות קרים?
              </Link>
            </div>

            <div className="border-t pt-8 mt-12">
              <h3 className="text-xl font-bold text-[#001c55] mb-4">
                מאמרים נוספים שיכולים לעניין אותך:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/Telemeeting/article-1"
                  className="block p-4 border rounded-lg hover:shadow-md transition"
                >
                  <h4 className="font-bold text-[#001c55] mb-2">
                    טלמיטינג לעסקים קטנים
                  </h4>
                  <p className="text-gray-600 text-sm">
                    תיאום פגישות בלי כאב ראש, בלי בזבוז זמן
                  </p>
                </Link>
                <Link
                  href="/services/Telemeeting/article-3"
                  className="block p-4 border rounded-lg hover:shadow-md transition"
                >
                  <h4 className="text-xl font-bold text-[#001c55] mb-2">
                    תיאום פגישות מקצועי
                  </h4>
                  <p className="text-gray-600 text-sm">
                    לא רק יעילות, אלא תדמית עסקית מנצחת
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterWithContact />
    </div>
  );
};

export default Article2Page;
