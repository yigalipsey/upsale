import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import NewNavbar from "../../components/NewNavbar";
import CallToAction from "../../components/CallToAction";
import FooterWithContact from "../../components/FooterWithContact";
import Pattern from "../../components/Pattern";

export const metadata = {
  title: "שירותי מכירות בטלפון במיקור חוץ | Upsale",
  description:
    "צוותי מכירה מקצועיים עם ניסיון של מעל 10 שנים, מתמחים במכירות B2B ו-B2C לעסקים קטנים ובינוניים בטלפון",
};

const TelemeetingPage = () => {
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
      title: "טלמיטינג לעסקים קטנים – תיאום פגישות בלי כאב ראש, בלי בזבוז זמן",
      description:
        "אם אתה בעל עסק קטן, אתה בטח מכיר את זה מקרוב: יש לידים, יש עניין, יש פניות — אבל אין זמן להתקשר, להסביר, לשכנע ולתאם. טלמיטינג לעסקים קטנים הוא הפתרון המקצועי לתיאום פגישות.",
      image: "/images/articles/telemeeting/1.avif",
      content: `
        <p>אם אתה בעל עסק קטן, אתה בטח מכיר את זה מקרוב: יש לידים, יש עניין, יש פניות — אבל אין זמן להתקשר, להסביר, לשכנע ולתאם. ובינתיים, לקוחות פוטנציאליים מתקררים, פגישות מתפספסות, וההזדמנויות נעלמות.</p>
        
        <p>פה בדיוק נכנס הפתרון: <strong>טלמיטינג לעסקים קטנים</strong> — שירות תיאום פגישות מקצועי, שבו גורם חיצוני מטפל עבורך בכל השיחות, מסנן את הלידים הלא רלוונטיים, ומזמן את הלקוחות הנכונים לפגישה איתך.</p>
        
        <h3>מה זה טלמיטינג?</h3>
        <p>טלמיטינג הוא שירות שבו אנשי מקצוע יוצרים קשר עם לקוחות פוטנציאליים במטרה אחת: <strong>לתאם פגישה עסקית</strong>. לא למכור, לא לשכנע, לא לסגור — רק להביא את הלקוח הנכון לשיחה הנכונה בזמן הנכון.</p>
        
        <p>זה שלב קריטי בתהליך העסקי, והוא דורש: זמינות גבוהה, סבלנות, יכולת הקשבה, הבנה של השירות שלך, ומיומנות בשיחה טלפונית.</p>
        
        <h3>למי זה מתאים?</h3>
        <ul>
          <li>עסקים שנותנים שירותים מקצועיים (ייעוץ, פיננסים, נדל"ן, בריאות)</li>
          <li>בעלי עסקים שאין להם זמן להתקשר לכל ליד</li>
          <li>חברות שרוצות לייעל את תהליך המכירה ולהתחיל אותו מפגישה מסודרת</li>
          <li>כל מי שמבין שהזמן שלו שווה כסף — ורוצה להשקיע אותו נכון</li>
        </ul>
        
        <h3>היתרונות של טלמיטינג מקצועי</h3>
        <ul>
          <li>חיסכון בזמן</li>
          <li>סינון לידים לא רלוונטיים</li>
          <li>הגדלת כמות הפגישות החודשיות</li>
          <li>שיפור באחוזי ההמרה</li>
          <li>שקט ניהולי והתמקדות במה שחשוב באמת</li>
        </ul>
        
        <p><strong>אנחנו לא מוכרים בשבילך. אנחנו לא סוגרים עסקאות. אנחנו פשוט מתאמים פגישות — ואתה מגיע מוכן לדבר עם לקוח שכבר עבר סינון.</strong></p>
        
        <h3>איך זה עובד?</h3>
        <ol>
          <li>אתה מעביר לנו את פרטי השירות שלך ואת קהל היעד</li>
          <li>אנחנו בונים תסריט שיחה ממוקד לתיאום פגישה בלבד</li>
          <li>אנשי הטלמיטינג שלנו יוצרים קשר עם הלידים שלך</li>
          <li>אנחנו מתאמים פגישה ביומן שלך — ואתה פשוט מגיע</li>
        </ol>
        
        <p>אם אתה מרגיש שאתה מפספס לקוחות רק כי לא הספקת לחזור אליהם — זה הזמן לשנות גישה. <strong>טלמיטינג לעסק קטן</strong> מאפשר לך לקבל פגישות איכותיות בלי להתעסק, בלי לרדוף, ובלי לבזבז זמן.</p>
      `,
      keywords: [
        "טלמיטינג לעסקים קטנים",
        "תיאום פגישות לעסק",
        "שירות טלמיטינג",
        "שירותי תיאום פגישות לעסקים קטנים",
        "תיאום פגישות ביומן העסק",
        "שירות טלמיטינג לעסק קטן",
        "תיאום פגישות לפי צריכה",
        "תיאום פגישות מקצועי לעסקים",
      ],
    },
    {
      title:
        "תיאום פגישות ללקוחות קרים – כשגם שיחה לא צפויה יכולה להפוך להזדמנות עסקית",
      description:
        "רוב בעלי העסקים יודעים לתאם פגישה עם לקוח שכבר השאיר פרטים. אבל מה קורה כשאין ליד חם? למד איך שירותי טלמיטינג ללקוחות קרים יכולים לפתוח דלתות חדשות לעסק שלך.",
      image: "/images/articles/telemeeting/2.avif",
      content: `
        <p>רוב בעלי העסקים יודעים לתאם פגישה עם לקוח שכבר השאיר פרטים. אבל מה קורה כשאין ליד חם? מה עושים כשאתה רוצה להגיע ללקוחות שלא מכירים אותך, לא ביקשו שיחה, ולא מצפים לטלפון?</p>
        
        <p>פה בדיוק נכנס היתרון של שירותי טלמיטינג ללקוחות קרים. זה לא רק לדעת לדבר בטלפון — זו מיומנות. זו היכולת לייצר עניין, לבנות אמון, ולהוביל אדם שלא חיפש אותך — לרצות לשמוע עוד.</p>
        
        <h3>מה זה לקוח קר?</h3>
        <p>לקוח קר הוא אדם שלא השאיר פרטים, לא ביקש שיחה, ולא בהכרח מכיר את השירות שלך. אבל הוא נמצא בקהל היעד שלך. הוא יכול ליהנות ממה שאתה מציע — אם רק תדע איך לגשת אליו נכון.</p>
        
        <h3>איך מתאמים פגישה עם לקוח שלא מצפה לשיחה?</h3>
        <p>פתיחה חכמה, שיחה בגובה העיניים, ותיאום ביומן מסודר. אנחנו יודעים איך לזהות עניין, איך לשאול נכון, ואיך להוביל לפגישה.</p>
        
        <p>טלמיטינג ללקוחות קרים דורש סבלנות, דיוק, והבנה עמוקה של הפסיכולוגיה שמאחורי שיחה לא צפויה. וזה בדיוק מה שאנחנו מתמחים בו.</p>
      `,
      keywords: [
        "תיאום פגישות ללקוחות קרים",
        "שירות טלמיטינג",
        "שיחה קרה",
        "שירותי טלמיטינג ללקוחות שלא השאירו פרטים",
        "תיאום פגישות עם לקוחות שלא מצפים לשיחה",
        "טלמיטינג לעסקים קטנים",
        "תיאום פגישות בשיחה קרה",
        "שירות תיאום פגישות ללקוחות חדשים",
      ],
    },
    {
      title: "תיאום פגישות מקצועי – לא רק יעילות, אלא תדמית עסקית מנצחת",
      description:
        "בתור בעל עסק, אתה בטח משקיע לא מעט במיתוג, בשיווק, באתר, בלוגו, במסרים. אבל יש נקודה אחת קריטית שרבים מפספסים — השיחה הראשונה עם הלקוח. למד איך תיאום פגישות מקצועי משפיע על התדמית העסקית שלך.",
      image: "/images/articles/telemeeting/3.avif",
      content: `
        <p>בתור בעל עסק, אתה בטח משקיע לא מעט במיתוג, בשיווק, באתר, בלוגו, במסרים. אבל יש נקודה אחת קריטית שרבים מפספסים — והיא לא מופיעה בשום באנר או מודעה. זו השיחה הראשונה עם הלקוח.</p>
        
        <p>הרגע שבו הוא מקבל טלפון, שומע את הטון, את הסדר, את הביטחון — ומחליט אם אתה עסק שהוא רוצה לעבוד איתו.</p>
        
        <h3>למה זה משפיע על התדמית שלך?</h3>
        <p>כי לקוח שמקבל שיחה מסודרת, בזמן הנכון, עם מסר ברור — מרגיש שהוא מדבר עם עסק רציני. הוא לא מקבל הודעה מבולבלת, לא נגרר לשיחה לא ברורה, ולא צריך "לרדוף" אחרי מענה.</p>
        
        <p>הוא פשוט מקבל פנייה מקצועית — וזה משנה הכול.</p>
      `,
      keywords: [
        "תיאום פגישות מקצועי",
        "תדמית עסקית בטלמיטינג",
        "שירותי טלמיטינג מקצועיים",
        "תיאום פגישות לעסקים קטנים",
        "טלמיטינג לתדמית עסקית",
        "שירותי תיאום פגישות מקצועיים",
        "תיאום פגישות לעסקים",
        "טלמיטינג מקצועי לעסקים קטנים",
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
            שירותי טלמיטינג מקצועיים
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            תיאום פגישות איכותיות עם לקוחות פוטנציאליים, בניית אמון וסגירת
            עסקאות בטלפון
          </p>
          <div className="mt-8">
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-[#001c55] font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              צור קשר
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
                    href={`/services/telemeeting/article-${index + 1}`}
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

export default TelemeetingPage;
