import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import NewNavbar from "../../components/NewNavbar";
import CallToAction from "../../components/CallToAction";
import FooterWithContact from "../../components/FooterWithContact";
import Pattern from "../../components/Pattern";

export const metadata = {
  title: "שירותי מכירות במיקור חוץ | Upsale",
  description:
    "צוותי מכירה מקצועיים עם ניסיון של מעל 10 שנים, מתמחים במכירות B2B ו-B2C לעסקים קטנים ובינוניים",
};

const SalesOutsourcingPage = () => {
  const advantages = [
    {
      icon: "🎯",
      title: "צוותי מכירה מקצועיים",
      description:
        "אנשי מכירות עם מעל 10 שנות ניסיון, מתמחים במכירות B2B ו-B2C לעסקים קטנים ובינוניים",
    },
    {
      icon: "⚡",
      title: "מודל גמיש - בנק שעות",
      description:
        "אין התחייבות למשרה מלאה. אתה רוכש שעות לפי הצורך שלך ומתחיל בקטן",
    },
    {
      icon: "📈",
      title: "תוצאות מוכחות תוך חודשיים",
      description:
        "הלקוחות שלנו מדווחים על עלייה של 25% במכירות בממוצע תוך 3 חודשים",
    },
    {
      icon: "🧠",
      title: "שיטה מוכחת, לא ניסוי",
      description:
        "אנחנו עובדים לפי תהליך מדויק שבנוי על ניסיון — לא מאלתרים תוך כדי. כל שלב נבדק, נמדד, ומוביל לתוצאה.",
    },
  ];

  const articles = [
    {
      title:
        "שירותי מכירות במיקור חוץ – הפתרון החכם לעסקים שרוצים למכור יותר ולהתעסק פחות",
      description:
        "בעל עסק קטן או בינוני? שירותי מכירות במיקור חוץ הם הפתרון החכם לעסקים שרוצים למכור יותר ולהתעסק פחות. מודל גמיש, תוצאות מוכחות, ואפס כאב ראש.",
      image: "/images/articles/sales/1.avif",
      content: `
        <p>כל עסק שרוצה לגדול חייב להבין דבר אחד: מכירות הן לא "משהו שצריך לעשות" — הן מנוע הצמיחה המרכזי. אבל האם כל בעל עסק צריך להיות גם איש מכירות? ממש לא.</p>
        
        <p>מוקד מכירות חיצוני מאפשר לך להתמקד בניהול ופיתוח העסק, בזמן שאנשי מכירות מקצועיים מטפלים בתהליך המכירה מההתחלה ועד הסגירה.</p>
        
        <h3>איך תדע שהגיע הזמן לשירותי מכירות במיקור חוץ?</h3>
        <p>אם אתה שואל את עצמך:</p>
        <ul>
          <li>למה אני לא מצליח לסגור עסקאות למרות שיש לידים?</li>
          <li>כמה זמן אני מבזבז על שיחות שלא מובילות לתוצאה?</li>
          <li>האם אני באמת יודע איך לנהל תהליך מכירה אפקטיבי?</li>
        </ul>
        <p>כנראה שהגיע הזמן לשקול איש מכירות במיקור חוץ.</p>
      `,
      keywords: [
        "מוקד מכירות חיצוני",
        "שירותי מכירות לעסקים קטנים",
        "מיקור חוץ מכירות",
      ],
    },
    {
      title: "איך בונים שיטת מכירה אפקטיבית בשירותי מכירות במיקור חוץ",
      description:
        "מכירה היא לא קסם. היא שיטה — תהליך מדויק שמתחיל בהבנה עמוקה של הלקוח, ממשיך בזיהוי הצורך, ומסתיים בהחלטה. למד איך לבנות שיטת מכירה אפקטיבית עם שירותי מכירות במיקור חוץ.",
      image: "/images/articles/sales/2.avif",
      content: `
        <p>מכירה היא לא קסם. היא גם לא אוסף משפטים שנאמרים בטלפון. מכירה היא שיטה — תהליך מדויק שמתחיל בהבנה עמוקה של הלקוח, ממשיך בזיהוי הצורך, ומסתיים בהחלטה.</p>
        
        <p>כשאתה עובד עם שירותי מכירות במיקור חוץ, אתה לא רק מקבל מישהו ש"מדבר עם לקוחות". אתה מקבל שיטה. מערכת. תהליך שמייצר תוצאה.</p>
        
        <h3>שלבי בניית שיטת מכירה אפקטיבית:</h3>
        <ul>
          <li>מיפוי העסק והבנת הערך</li>
          <li>בניית מסר שיווקי חד וממוקד</li>
          <li>תהליך מכירה מובנה ומדוד</li>
          <li>מדידה ובקרה מתמדת</li>
        </ul>
        
        <p>שירותי מכירות במיקור חוץ הם לא רק פתרון טכני. הם שיטה שמבוססת על הבנה עמוקה, מסר מדויק, ואנשי מכירות שיודעים להוביל לקוח לקבל החלטה.</p>
      `,
      keywords: [
        "שיטת מכירה אפקטיבית",
        "תהליך מכירה מובנה",
        "שירותי מכירות במיקור חוץ",
      ],
    },
    {
      title: "איך בוחרים את איש המכירות הנכון לעסק שלך",
      description:
        "גיוס איש מכירות לעסק קטן הוא לא רק עניין של ניסיון — אלא של התאמה. הפרמטרים שחשוב לבדוק: יכולת הקשבה, הבנה עמוקה של השירות שלך, גישה אנושית ויצירתיות בהתמודדות עם התנגדויות.",
      image: "/images/articles/sales/3.avif",
      content: `
        <p>גיוס איש מכירות לעסק קטן הוא לא רק עניין של ניסיון — אלא של התאמה. הפרמטרים שחשוב לבדוק:</p>
        
        <ul>
          <li><strong>יכולת הקשבה וראיון לקוח</strong> - הבנה עמוקה של הצרכים</li>
          <li><strong>הבנה עמוקה של השירות שלך</strong> - לא רק תסריט שיחה</li>
          <li><strong>גישה אנושית</strong> - ולא תסריט שיחה מדוקלם</li>
          <li><strong>יצירתיות בהתמודדות עם התנגדויות</strong> - פתרונות יצירתיים</li>
          <li><strong>חתירה למגע וסגירת עסקאות</strong> - בזמן אמת</li>
        </ul>
        
        <p>אנחנו ממליצים להתחיל בתקופת ניסיון קצרה, לראות תוצאות, ורק אז להרחיב את ההתקשרות.</p>
        
        <h3>איפה מוצאים אנשי מכירות במיקור חוץ?</h3>
        <p>קהילות פייסבוק של בעלי עסקים ויזמים, לינקדאין, גוגל, או פשוט לפנות אלינו — אנחנו כאן בשבילך.</p>
      `,
      keywords: [
        "גיוס איש מכירות",
        "איש מכירות במיקור חוץ",
        "בחירת איש מכירות לעסק קטן",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NewNavbar />

      {/* כותרת הדף */}
      <div className="relative text-white py-16 px-6 lg:px-24 overflow-hidden">
        <Pattern />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            שירותי מכירות במיקור חוץ
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            צוותי מכירה מקצועיים עם ניסיון של מעל 10 שנים, מתמחים במכירות B2B
            ו-B2C לעסקים קטנים ובינוניים
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white text-[#001c55] font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              צור קשר{" "}
            </Link>
          </div>
        </div>
      </div>

      {/* תוכן המאמרים */}
      <div className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="mb-4">
                  <NextImage
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover rounded-lg"
                  />
                </div>

                <h3 className="text-lg font-bold text-[#001c55] mb-3 leading-relaxed">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                  {article.description}
                </p>

                <div className="mt-auto">
                  <Link
                    href={`/services/sales-outsourcing/article-${index + 1}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#092274] rounded-lg hover:bg-[#001c55] transition-colors duration-200"
                  >
                    קרא עוד
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <CallToAction />

      {/* היתרונות של השירות */}
      <div className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-[#001c55] mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterWithContact />
    </div>
  );
};

export default SalesOutsourcingPage;
