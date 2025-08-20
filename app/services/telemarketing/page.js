import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewNavbar from "../../components/NewNavbar";
import CallToAction from "../../components/CallToAction";
import FooterWithContact from "../../components/FooterWithContact";

export const metadata = {
  title: "שירותי טלמיטינג | Upsale",
  description:
    "תיאום פגישות איכותיות עם לקוחות פוטנציאליים, בניית אמון וסגירת עסקאות בטלפון",
};

const TelemarketingPage = () => {
  const advantages = [
    {
      icon: "📞",
      title: "תיאום פגישות איכותיות",
      description:
        "אנשי טלמיטינג מקצועיים שיודעים איך להפוך שיחה קרה לפגישה חמה ומניבה",
    },
    {
      icon: "🤝",
      title: "בניית אמון בטלפון",
      description:
        "יצירת חיבור אנושי מהשיחה הראשונה, הבנת צרכים עמוקים ובניית אמון",
    },
    {
      icon: "🎯",
      title: "סינון לידים מדויק",
      description: "וידוא שהלקוח מתאים ורלוונטי לפני שמעבירים אליך פגישה",
    },
    {
      icon: "📅",
      title: "ניהול לוח זמנים חכם",
      description: "מעקב, תזכורות חכמות ואחוזי הגעה גבוהים לפגישות",
    },
  ];

  const articles = [
    {
      title: "תיאום פגישות במיקור חוץ: איך להכפיל את מספר הפגישות שלך",
      description:
        "תיאום פגישות יעיל הוא המפתח להצלחה במיקור חוץ מכירות. במאמר זה נשתף אסטרטגיות מוכחות לניהול לוח זמנים, בניית אמון עם לקוחות פוטנציאליים, וסגירת עסקאות מהירה יותר.",
      image: "/images/articles/1-2.avif",
      content: `
        <p>תיאום פגישות יעיל הוא המפתח להצלחה במיקור חוץ מכירות. זה לא רק עניין של "להתקשר ולקבוע" — זה אמנות שדורשת מיומנות מיוחדת, הבנה עמוקה של הצרכים, ויכולת לבנות אמון בטלפון.</p>
        
        <h3>למה תיאום פגישות כל כך חשוב?</h3>
        <p>פגישה איכותית היא השלב הראשון בתהליך המכירה. אם הלקוח לא מגיע לפגישה, או מגיע בלי מוטיבציה — הסיכוי לסגור עסקה יורד משמעותית.</p>
        
        <h3>האסטרטגיות שלנו:</h3>
        <ul>
          <li><strong>בניית אמון בטלפון</strong> - יצירת חיבור אנושי מהשיחה הראשונה</li>
          <li><strong>הבנת צרכים עמוקים</strong> - לא רק "מתי נוח לך" אלא "למה זה חשוב לך"</li>
          <li><strong>הכנת הלקוח לפגישה</strong> - כך שהוא מגיע עם ציפיות ברורות</li>
          <li><strong>מעקב וזיכרון</strong> - תזכורות חכמות שמעלות את אחוזי ההגעה</li>
        </ul>
        
        <p>התוצאה? יותר פגישות, פגישות איכותיות יותר, וסיכוי גבוה יותר לסגירה.</p>
      `,
      keywords: ["תיאום פגישות", "טלמיטינג לעסקים", "שירותי תיאום פגישות לעסק"],
    },
    {
      title: "איך לבנות אמון בטלפון עם לקוחות פוטנציאליים",
      description:
        "בניית אמון בטלפון היא אמנות שדורשת מיומנות מיוחדת. אנשי הטלמיטינג שלנו יודעים איך ליצור חיבור אנושי, להבין צרכים עמוקים, ולהפוך שיחה ראשונית לפגישה עסקית מניבה.",
      image: "/images/articles/2-1.avif",
      content: `
        <p>בניית אמון בטלפון היא אמנות שדורשת מיומנות מיוחדת. זה לא קורה במקרה — זה תהליך מדויק שדורש הבנה עמוקה של פסיכולוגיה אנושית וטכניקות תקשורת מתקדמות.</p>
        
        <h3>העקרונות שלנו לבניית אמון:</h3>
        <ul>
          <li><strong>הקשבה אמיתית</strong> - לא רק "לשמוע" אלא להבין</li>
          <li><strong>שאלות חכמות</strong> - שאלות שפותחות את הלקוח ומראות שאנחנו מתעניינים</li>
          <li><strong>שיתוף סיפורים רלוונטיים</strong> - דוגמאות מהשטח שמחזקות את האמינות</li>
          <li><strong>שקיפות מלאה</strong> - להגיד את האמת גם אם זה לא "מכירתי"</li>
          <li><strong>התאמה אישית</strong> - כל שיחה מותאמת ללקוח הספציפי</li>
        </ul>
        
        <h3>איך זה עובד בפועל?</h3>
        <p>אנשי הטלמיטינג שלנו מתחילים כל שיחה בהקשבה. הם לא "מוכרים" — הם מבינים. הם שואלים שאלות שמעמיקות את ההבנה, ומשתפים מידע רלוונטי שמראה שאנחנו יודעים על מה אנחנו מדברים.</p>
        
        <p>התוצאה? לקוחות שמרגישים שמבינים אותם, שמאמינים בנו, ושמגיעים לפגישה עם מוטיבציה גבוהה.</p>
      `,
      keywords: [
        "בניית אמון בטלפון",
        "טלמיטינג מקצועי",
        "שירותי מכירות בטלפון",
      ],
    },
    {
      title: "הבדל בין טלמיטינג למכירות: איזה שירות מתאים לעסק שלך",
      description:
        "הבנת ההבדל בין שירותי טלמיטינג לשירותי מכירות מלאים תעזור לך לבחור את הפתרון הנכון. טלמיטינג מתמקד בתיאום פגישות ובניית אמון, בעוד שמכירות כוללות את כל תהליך הסגירה.",
      image: "/images/articles/3-1.avif",
      content: `
        <p>הבנת ההבדל בין שירותי טלמיטינג לשירותי מכירות מלאים תעזור לך לבחור את הפתרון הנכון לעסק שלך. זה לא אותו דבר — וזה חשוב להבין כדי לבחור נכון.</p>
        
        <h3>שירותי טלמיטינג - מה זה כולל?</h3>
        <ul>
          <li><strong>תיאום פגישות</strong> - קביעת פגישות עם לקוחות פוטנציאליים</li>
          <li><strong>בניית אמון</strong> - יצירת חיבור ראשוני בטלפון</li>
          <li><strong>סינון לידים</strong> - וידוא שהלקוח מתאים ורלוונטי</li>
          <li><strong>הכנת הלקוח</strong> - כך שהוא מגיע לפגישה מוכן</li>
        </ul>
        
        <h3>שירותי מכירות מלאים - מה זה כולל?</h3>
        <ul>
          <li><strong>כל מה שבטלמיטינג</strong> - פלוס...</li>
          <li><strong>סגירת עסקאות</strong> - לא רק פגישות, אלא מכירות</li>
          <li><strong>ניהול תהליך המכירה</strong> - מהפגישה ועד החתימה</li>
          <li><strong>מעקב וטיפול בהתנגדויות</strong> - פתרון בעיות בדרך לסגירה</li>
        </ul>
        
        <h3>איזה שירות מתאים לך?</h3>
        <p><strong>טלמיטינג מתאים אם:</strong> יש לך צוות מכירות פנימי, ואתה רק צריך עזרה בתיאום פגישות ובניית אמון.</p>
        
        <p><strong>מכירות מלאות מתאימות אם:</strong> אתה רוצה פתרון שלם שמביא תוצאות מההתחלה ועד הסוף.</p>
        
        <p>אנחנו מציעים את שניהם — ואנחנו נעזור לך לבחור את מה שמתאים בדיוק לצרכים שלך.</p>
      `,
      keywords: [
        "הבדל טלמיטינג מכירות",
        "שירותי טלמיטינג לעסקים",
        "תיאום פגישות עסקיות",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NewNavbar />

      {/* כותרת הדף */}
      <div className="bg-[#001c55] text-white py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            שירותי טלמיטינג
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            תיאום פגישות איכותיות עם לקוחות פוטנציאליים, בניית אמון וסגירת
            עסקאות בטלפון
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white text-[#001c55] font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              ← חזרה לדף הבית
            </Link>
          </div>
        </div>
      </div>

      {/* היתרונות של השירות */}
      <div className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#001c55] mb-4">
              למה לבחור בשירותי הטלמיטינג שלנו?
            </h2>
            <p className="text-lg text-gray-600">
              אנחנו מביאים לך את היתרונות הגדולים ביותר של שירותי טלמיטינג
              מקצועיים
            </p>
          </div>

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

      {/* תוכן המאמרים */}
      <div className="py-16 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#001c55] mb-4">
              מאמרים מקצועיים על שירותי טלמיטינג
            </h2>
            <p className="text-lg text-gray-600">
              למדו מהמומחים שלנו על השיטות החדשות ביותר והאסטרטגיות המוכחות
              להצלחה
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <Image
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

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {article.description}
                </p>

                <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#092274] rounded-lg hover:bg-[#001c55] transition-colors duration-200">
                  קרא עוד
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      <CallToAction />
      <FooterWithContact />
    </div>
  );
};

export default TelemarketingPage;
