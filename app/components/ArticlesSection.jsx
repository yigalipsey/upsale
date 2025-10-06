"use client";

import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";

const ArticlesSection = () => {
  const articles = [
    {
      id: 1,
      title: "שירותי מכירות במיקור חוץ – למה זה עדיף בשבילך",
      excerpt:
        "אם יש לך עסק, אתה בטח יודע עד כמה נושא המכירות קריטי להצלחה. השאלה הגדולה היא – האם כדאי להקים צוות מכירות פנימי ולשאת בכל העלויות והכאבים הכרוכים בזה, או לבחור בדרך חכמה יותר: שירותי מכירות במיקור חוץ?",
      readTime: "5 דקות קריאה",
      category: "מיקור חוץ",
      image: "/images/articles/sales/1.avif",
      slug: "sales-outsourcing-benefits",
    },
    {
      id: 2,
      title: "מדוע אנשי המכירות שלנו הם הטובים ביותר בתעשייה",
      excerpt:
        "בעולם העסקי של היום, אין מקום לפשרות – מי שמוביל במכירות הוא מי שמביא את הניסיון, הידע והיכולות האישיות. אנחנו גאים לומר שהצוות שלנו לא רק טוב, אלא הכי טוב בתעשייה.",
      readTime: "4 דקות קריאה",
      category: "צוות מכירות",
      image: "/images/articles/sales/2.avif",
      slug: "why-our-sales-team-is-the-best",
    },
    {
      id: 3,
      title: "איך מכירות במיקור חוץ חוסכות לעסק כסף ומשאבים",
      excerpt:
        "בעולם העסקי של היום, כל החלטה נמדדת לפי שתי שאלות עיקריות: כמה זה יעלה ו-איזה ערך זה ייתן. אחת ההחלטות החשובות ביותר שכל בעל עסק או מנהל מקבל היא איך לנהל את מערך המכירות.",
      readTime: "5 דקות קריאה",
      category: "חיסכון בעלויות",
      image: "/images/articles/sales/3.avif",
      slug: "how-outsourcing-saves-money-and-resources",
    },
    {
      id: 4,
      title: "מהו תיאום פגישות במיקור חוץ ולמה זה משתלם לעסקים",
      excerpt:
        "תיאום פגישות במיקור חוץ הוא שירות שבו חברה חיצונית מתמחה לוקחת על עצמה את כל תהליך יצירת הקשר הראשוני עם לקוחות פוטנציאליים, עד לתיאום פגישה עם נציג המכירות שלך.",
      readTime: "3 דקות קריאה",
      category: "תיאום פגישות",
      image: "/images/articles/telemeeting/1.avif",
      slug: "meeting-scheduling-outsourcing",
    },
    {
      id: 5,
      title: "5 סיבות למה תיאום פגישות במיקור חוץ מייצר יותר עסקאות",
      excerpt:
        'רבים חושבים שתיאום פגישות הוא "שלב טכני", אבל בפועל זהו שלב קריטי שיכול לקבוע אם תהיה לך פגישה איכותית – או שלא תהיה פגישה בכלל. לכן יותר ויותר עסקים בוחרים במודל של תיאום פגישות במיקור חוץ.',
      readTime: "4 דקות קריאה",
      category: "תיאום פגישות",
      image: "/images/articles/telemeeting/2.avif",
      slug: "5-reasons-meeting-scheduling-generates-more-deals",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        {/* כותרת הסקשן */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            מאמרים מקצועיים
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            טיפים, תובנות ומידע מקצועי שיעזרו לך להבין את עולם המכירות במיקור
            חוץ
          </p>
        </motion.div>

        {/* רשימת המאמרים */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* תמונת המאמר */}
              <div className="relative h-48 overflow-hidden">
                <NextImage
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* קטגוריה */}
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* תוכן המאמר */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* מטא-דאטה */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {article.readTime}
                  </span>
                </div>

                {/* כפתור קריאה */}
                <a
                  href={`/articles/sales-outsourcing-benefits`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  קרא עוד
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* כפתור לראות עוד מאמרים */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/articles"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            כל המאמרים ({articles.length})
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
