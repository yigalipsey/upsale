"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

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
          delay="1000"
          colors="primary:#4be1ec,secondary:#2516c7"
          style={{ width: "70px", height: "70px" }}
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
          trigger="loop"
          delay="2000"
          colors="primary:#4be1ec,secondary:#2516c7"
          style={{ width: "60px", height: "60px" }}
        ></lord-icon>
      ),
      title: "מקצועיות",
      description:
        "לכל אחד מאנשי המכירות שלנו יש מעל ל-10 שנות ניסיון במכירות.\nכולם אנשים בעלי יכולת ביטוי מאוד גבוהה ורצון עצום לספק תוצאות",
    },
    {
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/boconccx.json"
          trigger="loop"
          delay="1000"
          colors="primary:#4be1ec,secondary:#2516c7"
          style={{ width: "60px", height: "60px" }}
        ></lord-icon>
      ),
      title: "מהירות",
      description:
        "אנחנו אלופים בלספק תוצאות מהירות (לפעמים אפילו מהיום הראשון) בזכות הניסיון העשיר של אנשי הצוות שלנו",
    },
  ];

  return (
    <section className="relative font-rubik py-12 px-6 lg:px-24 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold md:mb-4 text-[#001c55] uppercase">
          למה לבחור ב UPSALE?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center rounded-lg p-6 shadow-lg hover:shadow-2xl shadow-[#9fa0a2] transition-shadow bg-white z-10 h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>

              {/* כותרת בגובה אחיד */}
              <h3 className="text-lg font-bold mb-1 text-[#001c55] min-h-[2rem] flex items-center justify-center">
                {feature.title}
              </h3>

              {/* תיאור בגובה אחיד */}
              <div className="text-sm text-gray-700  min-h-[6rem] flex flex-col justify-start">
                {feature.description.split("\n").map((line, i) => (
                  <p key={i} className="mb-1">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
