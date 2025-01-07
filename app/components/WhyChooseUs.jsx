"use client";

import React, { useEffect } from "react";

const WhyChooseUs = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const features = [
    {
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/bmhttwyu.json"
          trigger="loop"
          delay="2000"
          colors="primary:#4be1ec,secondary:#2516c7"
          style={{ width: "60px", height: "60px" }}
        ></lord-icon>
      ),
      title: "ייעוץ וליווי אישי",
      description:
        "הצוות שלנו מתמחה בהתאמת תהליכי מכירה אישיים שממוקדים בתוצאות. אנו מלווים אתכם יד ביד לאורך כל הדרך.",
    },
    {
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/tetzmwxb.json"
          trigger="loop-on-hover"
          delay="1000"
          state="morph-select"
          colors="primary:#4be1ec,secondary:#2516c7"
          style={{ width: "60px", height: "60px" }}
        ></lord-icon>
      ),
      title: "מקצועיות",
      description:
        "צוותי המכירות שלנו הם הטובים ביותר, עם ניסיון רב והתמקדות בביצועים שמביאים תוצאות לעסק שלכם.",
    },
    {
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/boconccx.json"
          trigger="loop"
          delay="2000"
          colors="primary:#4be1ec,secondary:#2516c7"
          style={{ width: "60px", height: "60px" }}
        ></lord-icon>
      ),
      title: "מהירות",
      description:
        "מתחילים לעבוד מהרגע הראשון כדי להביא את העסק שלכם לשיא הפוטנציאל שלו בזמן קצר.",
    },
    {
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/uxxlutsg.json"
          trigger="hover"
          colors="primary:#4be1ec,secondary:#2516c7"
          style={{ width: "60px", height: "60px" }}
        ></lord-icon>
      ),
      title: "תהליכים מותאמים אישית",
      description:
        "כל פרויקט נבנה על פי צרכי הלקוח, כולל תסריטי שיחה מותאמים אישית ושיטות מוכחות להגדלת המכירות.",
    },
    {
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/hwdepqex.json"
          trigger="loop"
          delay="2000"
          colors="primary:#4be1ec,secondary:#2516c7"
          style={{ width: "60px", height: "60px" }}
        ></lord-icon>
      ),
      title: "חיסכון בזמן וכסף",
      description:
        "בעזרת מיקור חוץ מקצועי, תחסכו זמן יקר וכסף, ותתמקדו במה שאתם עושים הכי טוב.",
    },
    {
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/bmhttwyu.json"
          trigger="loop"
          delay="2000"
          colors="primary:#4be1ec,secondary:#2516c7"
          style={{ width: "60px", height: "60px" }}
        ></lord-icon>
      ),
      title: "תוצאות מוכחות",
      description:
        "הלקוחות שלנו נהנים מעלייה משמעותית בהכנסות וביעילות העסקית בזכות השירותים שלנו.",
    },
  ];

  return (
    <section className="relative font-rubik py-12 px-6 lg:px-24">
      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#001c55] uppercase">
          למה לבחור ב
          <span className="relative mr-1 text-xl md:text-3xl font-bold text-[#001c55]">
            SMART SALES?
            <div className="h-1 w-full bg-[#5479f7] absolute rounded-full bottom-0 left-0 mt-1"></div>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full items-center text-center rounded-lg p-6 shadow-lg hover:shadow-2xl shadow-[#9fa0a2] transition-shadow bg-white z-10"
            >
              <div className="mb-auto flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-bold text-[#001c55] mt-4">
                {feature.title}
              </h3>
              <p className="text-sm text-[#001c55] mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
