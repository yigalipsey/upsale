import React from "react";
import Link from "next/link";

const RelatedArticlesSection = ({ currentArticleId }) => {
  const allArticles = [
    {
      id: "sales-outsourcing-benefits",
      title: "שירותי מכירות במיקור חוץ – למה זה עדיף בשבילך",
      excerpt:
        "אם יש לך עסק, אתה בטח יודע עד כמה נושא המכירות קריטי להצלחה. השאלה הגדולה היא – האם כדאי להקים צוות מכירות פנימי ולשאת בכל העלויות והכאבים הכרוכים בזה, או לבחור בדרך חכמה יותר: שירותי מכירות במיקור חוץ?",
      href: "/articles/sales-outsourcing-benefits",
    },
    {
      id: "why-our-sales-team-is-the-best",
      title: "מדוע אנשי המכירות שלנו הם הטובים ביותר בתעשייה",
      excerpt:
        "בעולם העסקי של היום, אין מקום לפשרות – מי שמוביל במכירות הוא מי שמביא את הניסיון, הידע והיכולות האישיות. אנחנו גאים לומר שהצוות שלנו לא רק טוב, אלא הכי טוב בתעשייה.",
      href: "/articles/why-our-sales-team-is-the-best",
    },
    {
      id: "how-outsourcing-saves-money-and-resources",
      title: "איך מכירות במיקור חוץ חוסכות לעסק כסף ומשאבים",
      excerpt:
        "בעולם העסקי של היום, כל החלטה נמדדת לפי שתי שאלות עיקריות: כמה זה יעלה ו-איזה ערך זה ייתן. אחת ההחלטות החשובות ביותר שכל בעל עסק או מנהל מקבל היא איך לנהל את מערך המכירות.",
      href: "/articles/how-outsourcing-saves-money-and-resources",
    },
    {
      id: "meeting-scheduling-outsourcing",
      title: "מהו תיאום פגישות במיקור חוץ ולמה זה משתלם לעסקים",
      excerpt:
        "תיאום פגישות במיקור חוץ הוא שירות שבו חברה חיצונית מתמחה לוקחת על עצמה את כל תהליך יצירת הקשר הראשוני עם לקוחות פוטנציאליים, עד לתיאום פגישה עם נציג המכירות שלך.",
      href: "/articles/meeting-scheduling-outsourcing",
    },
    {
      id: "5-reasons-meeting-scheduling-generates-more-deals",
      title: "5 סיבות למה תיאום פגישות במיקור חוץ מייצר יותר עסקאות",
      excerpt:
        'רבים חושבים שתיאום פגישות הוא "שלב טכני", אבל בפועל זהו שלב קריטי שיכול לקבוע אם תהיה לך פגישה איכותית – או שלא תהיה פגישה בכלל. לכן יותר ויותר עסקים בוחרים במודל של תיאום פגישות במיקור חוץ.',
      href: "/articles/5-reasons-meeting-scheduling-generates-more-deals",
    },
  ];

  // הסר את המאמר הנוכחי מהרשימה
  const relatedArticles = allArticles
    .filter((article) => article.id !== currentArticleId)
    .slice(0, 2);

  return (
    <div className="border-t pt-8 mt-12">
      <h3 className="text-xl font-bold text-[#001c55] mb-4">
        מאמרים נוספים שיכולים לעניין אותך:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatedArticles.map((article) => (
          <Link
            key={article.id}
            href={article.href}
            className="block p-4 border rounded-lg hover:shadow-md transition"
          >
            <h4 className="font-bold text-[#001c55] mb-2">{article.title}</h4>
            <p className="text-gray-600 text-sm">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticlesSection;
