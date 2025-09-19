"use client";

import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "שיחת היכרות",
      description:
        "נפגשים, מכירים את העסק שלכם, מבינים את הצרכים והאתגרים, ומגדירים יחד את המטרות והציפיות.",
      icon: "📞",
    },
    {
      number: "02",
      title: "התאמה אישית",
      description:
        "בונים תסריטי שיחה מותאמים לעסק שלכם, מגדירים את קהל היעד, ומכינים את כל החומרים הנדרשים.",
      icon: "🎯",
    },
    {
      number: "03",
      title: "יוצאים לדרך",
      description:
        "הצוות שלנו מתחיל לעבוד, מבצע שיחות מכירה, עוקב אחר תוצאות, ומדווח לכם על ההתקדמות.",
      icon: "🚀",
    },
    {
      number: "04",
      title: "שיפור מתמיד",
      description:
        "מנתחים תוצאות, משפרים תהליכים, מתאימים אסטרטגיות, ומבטיחים תוצאות טובות יותר כל הזמן.",
      icon: "📈",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-24 font-rubik bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* כותרת */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#092274] mb-4">
            איך זה עובד?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            תהליך פשוט וברור שמביא תוצאות — מההכרות הראשונה ועד לתוצאות המדידות
          </p>
        </div>

        {/* ציר הזמן */}
        <div className="relative">
          {/* קו הציר - רק בדסקטופ */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#092274] via-[#092274] to-[#092274] transform -translate-y-1/2 z-0"></div>

          {/* השלבים */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative z-20">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 text-center border-2 border-[#092274]">
                  {/* אייקון */}
                  <div className="text-4xl mb-4">{step.icon}</div>

                  {/* כותרת */}
                  <h3 className="text-xl font-bold text-[#092274] mb-4">
                    {step.title}
                  </h3>

                  {/* תיאור */}
                  <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* כפתור קריאה לפעולה */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-[#092274] text-white hover:bg-[#001c55]"
            aria-label="צור קשר"
          >
            מוכנים להתחיל? בואו נכיר!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
