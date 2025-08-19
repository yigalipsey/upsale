"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ArticlesSection = () => {
  const articles = [
    {
      title: "איך לבחור חברת מיקור חוץ מכירות מתאימה לעסק שלך",
      description:
        "בחירת חברת מיקור חוץ מכירות היא החלטה קריטית שעלולה להשפיע על הצלחת העסק שלכם. במדריך מקיף זה נסביר איך לזהות שותף אמין, אילו שאלות חשוב לשאול, ואיך לוודא שהשירותים מתאימים לצרכים הספציפיים של החברה שלכם.",
      image: "/images/articles/1-2.avif",
      link: "/articles/how-to-choose-sales-outsourcing-company",
    },
    {
      title: "תיאום פגישות במיקור חוץ: איך להכפיל את מספר הפגישות שלך",
      description:
        "תיאום פגישות יעיל הוא המפתח להצלחה במיקור חוץ מכירות. במאמר זה נשתף אסטרטגיות מוכחות לניהול לוח זמנים, בניית אמון עם לקוחות פוטנציאליים, וסגירת עסקאות מהירה יותר.",
      image: "/images/articles/2-1.avif",
      link: "/articles/appointment-scheduling-strategies",
    },
    {
      title: "שירותי מיקור חוץ מכירות: מה כלול ומה לא",
      description:
        "הבנה מעמיקה של השירותים הכלולים בחבילת מיקור חוץ מכירות תעזור לכם למקסם את הערך שלכם. נפרט מה בדיוק מקבלים, אילו שירותים נוספים כדאי לשקול, ואיך לוודא שההשקעה שלכם מניבה תוצאות.",
      image: "/images/articles/3-1.avif",
      link: "/articles/whats-included-outsourcing-services",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-24 font-rubik ">
      <div className="max-w-7xl mx-auto">
        {/* כותרת */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001c55] mb-4">
            מאמרים מקצועיים על מיקור חוץ מכירות
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            למדו מהמומחים שלנו על השיטות החדשות ביותר, הטיפים החשובים
            והאסטרטגיות המוכחות להצלחה במיקור חוץ מכירות
          </p>
        </div>

        {/* רשת המאמרים */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-full mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={150}
                    className="w-full h-[150px] object-cover rounded-lg"
                    priority={index === 0}
                  />
                </div>
                <h3 className="text-lg font-bold text-[#001c55] leading-relaxed mb-3">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {article.description}
                </p>
                <a
                  href={article.link}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#092274] rounded-lg hover:bg-[#001c55] transition-colors duration-200"
                >
                  קרא עוד
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
