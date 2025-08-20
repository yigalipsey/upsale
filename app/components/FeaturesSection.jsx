"use client";

import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";

const FeaturesSection = () => {
  const cards = [
    {
      title: " תוצאות ראשונות כבר בשלבים הראשונים   ",
      description:
        "אנחנו לא מבטיחים קסמים, אבל אנחנו כן מבטיחים תהליך שמייצר תוצאה — מהר, מדויק, ובשקיפות מלאה.",
      image: "/images/itronot/2.avif",
    },
    {
      title: "צוות מקצועי עם ניסיון מוכח",
      description:
        "אנשי מכירות שיודעים לדבר עם לקוחות, להתמודד עם התנגדויות, ולסגור עסקאות — לא תיאוריה, אלא ניסיון מהשטח.",
      image: "/images/itronot/3.avif",
    },
    {
      title: "תוצאות מדידות ומוכחות",
      description:
        "כל שיחה מתועדת, כל ליד נבחן, וכל תהליך נמדד. אתה מקבל דוחות, תובנות, והוכחות בשטח — לא תחושות.",
      image: "/images/itronot/4.avif",
    },
  ];

  return (
    <section className="py-20  bg-blue-50 px-6 lg:px-24 font-rubik ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* צד ימין - כותרת עם sticky */}
          <div className="relative">
            <div className="lg:sticky  lg:top-72">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#092274] mb-2 text-center lg:text-right">
                מה מבדיל אותנו מהאחרים
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-2 text-center lg:text-right">
                יותר מ40 עסקים קטנים כבר הגדילו מכירות בעזרת Upsale מאז 2022 —
                כך אנחנו עושים את זה{" "}
              </p>
              <div className="text-center lg:text-right hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-[#092274] text-white hover:bg-[#001c55]"
                  aria-label="קבל הצעת מחיר"
                >
                  קבל הצעת מחיר
                </motion.button>
              </div>
            </div>
          </div>

          {/* צד שמאל - כרטיסיות */}
          <div className="space-y-10">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col items-center lg:items-start text-center lg:text-right">
                  <div className="w-full relative">
                    <NextImage
                      src={card.image}
                      alt={card.title}
                      width={600}
                      height={400}
                      className="w-[calc(100%-10px)] mx-[5px] mt-[5px] h-auto object-contain rounded-xl"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#092274] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
