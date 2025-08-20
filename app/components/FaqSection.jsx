"use client";

import React, { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "איך השירות שלכם עוזר לי לייצר יותר מכירות בפחות זמן?",
      answer:
        "אנחנו לוקחים את כל תהליך המכירה על עצמנו — משיחות עם לידים ועד סגירת עסקאות. אתה מתפנה להתמקד בניהול ופיתוח העסק, בזמן שאנחנו מייצרים לך תוצאות.",
    },
    {
      question: "מה מבדל אתכם מסוכנויות אחרות בתחום המכירות?",
      answer:
        "אנחנו לא רק מגייסים אנשי מכירות — אנחנו מפעילים צוותים מנוסים, עם שיטה מוכחת, תסריטי שיחה מותאמים, ודוחות מדויקים. כל פעולה אצלנו נמדדת ומבוססת תוצאה.",
    },
    {
      question: "תוך כמה זמן אפשר לראות תוצאות מהשירות שלכם?",
      answer:
        "לקוחות רבים מתחילים לראות פגישות איכותיות ותנועה בעסק כבר תוך שבועיים. אנחנו עובדים מהר, מדויק, ובשקיפות מלאה — בלי הבטחות ריקות.",
    },
    {
      question: "האם השירות מתאים גם לעסק קטן בלי מחלקת מכירות?",
      answer:
        "בהחלט. השירות שלנו בנוי במיוחד לעסקים שאין להם צוות מכירות פנימי. אנחנו עובדים לפי מודל גמיש, בלי התחייבות למשרה מלאה ובלי עלויות קבועות.",
    },
    {
      question: "איך אתם יודעים למכור את השירות שלי כאילו אתם חלק מהעסק?",
      answer:
        "אנחנו מתחילים ממיפוי מדויק של העסק שלך, בונים תסריט שיחה מותאם אישית, ומכשירים את הצוות שלנו לדבר בשפה שלך — כאילו הם עובדים אצלך.",
    },
    {
      question: "איך אתם מתמודדים עם התנגדויות של לקוחות פוטנציאליים?",
      answer:
        "אנשי המכירות שלנו מיומנים בהתמודדות עם התנגדויות. הם יודעים לשאול נכון, להקשיב, ולהוביל את הלקוח להבנה אמיתית של הערך שאתה מציע.",
    },
    {
      question: "האם אתם עובדים גם עם לידים קרים שלא ביקשו שיחה?",
      answer:
        "כן. אנחנו מתמחים בטלמיטינג ללקוחות קרים — יודעים איך לייצר עניין, לבנות אמון, ולהוביל לפגישה גם בשיחה לא צפויה.",
    },
    {
      question: "איך אני יודע שהשירות באמת עובד? יש מדדים ברורים?",
      answer:
        "בוודאי. כל שיחה מתועדת, כל ליד נבחן, וכל תהליך נמדד. אתה מקבל דוחות, תובנות, והוכחות בשטח — לא תחושות.",
    },
    {
      question: "מה קורה אם אני רוצה לשנות כיוון או להתאים את השירות תוך כדי?",
      answer:
        "אנחנו גמישים לחלוטין. יש לך מנהל פרויקט אישי, ואנחנו מבצעים התאמות שוטפות לפי הצרכים שלך — בלי בירוקרטיה ובלי עיכובים.",
    },
    {
      question: "איך מתחילים לעבוד איתכם בפועל?",
      answer:
        "פשוט משאירים פרטים. אנחנו יוצרים קשר, מבינים את הצרכים שלך, בונים תוכנית פעולה — ומתחילים לייצר תוצאות תוך ימים.",
    },
  ];

  return (
    <section id="faq" className="py-12 px-6 lg:px-24 font-rubik">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#001c55] text-center mb-8">
          שאלות נפוצות
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden text-black transition-colors ${
                activeIndex === index
                  ? "border-[#001c55]"
                  : "border-gray-300 hover:border-[#001c55]"
              }`}
            >
              <button
                className="w-full text-right px-4 py-3 flex justify-between items-center font-medium text-lg"
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                aria-label={`${faq.question} - לחץ לפתיחה או סגירה`}
              >
                <span>{faq.question}</span>
                <span className="ml-2 text-[#001c55]" aria-hidden="true">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-4 py-3 text-gray-700 text-sm lg:text-base"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
