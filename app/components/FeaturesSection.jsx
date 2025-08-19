"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FeaturesSection = () => {
  const cards = [
    {
      title: "אסטרטגיות מותאמות אישית לכל הערוצים",
      description:
        "בניגוד לגישות סטנדרטיות של סוכנויות אחרות, אנחנו יוצרים תוכניות גיוס מותאמות אישית שמתאימות בדיוק למטרות העסקיות הייחודיות שלכם ומשלבות מאמצי מכירות יוצאים ונכנסים.",
      image: "/images/itronot/1.png",
    },
    {
      title: "צוות מקצועי עם ניסיון מוכח",
      description:
        "הצוות שלנו כולל אנשי מכירות מנוסים עם מעל 10 שנות ניסיון בתחום. אנחנו מתמחים במכירות B2B ו-B2C ומביאים תוצאות מוכחות לכל לקוח.",
      image: "/images/itronot/2.png",
    },
    {
      title: "תוצאות מדידות ומוכחות",
      description:
        "אנו מספקים דוחות מפורטים על הביצועים עם מדדי הצלחה ברורים. הלקוחות שלנו נהנים מעלייה של 25% במכירות בממוצע תוך 3 חודשים.",
      image: "/images/itronot/3.png",
    },
  ];

  return (
    <section className="py-20  bg-[#E9EAEC] px-6 lg:px-24 font-rubik ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* צד ימין - כותרת עם sticky */}
          <div className="relative">
            <div className="lg:sticky  lg:top-72">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#092274] mb-2 text-center lg:text-right">
                מה מבדיל אותנו מהאחרים
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-2 text-center lg:text-right">
                יותר מ־100 עסקים קטנים כבר הגדילו מכירות בעזרת Upsale מאז 2022 —
                כך אנחנו עושים את זה{" "}
              </p>
              <div className="text-center lg:text-right">
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
                className="bg-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center lg:items-start text-center lg:text-right">
                  <div
                    className="w-full mb-4 relative"
                    style={{ height: "200px" }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#092274] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {card.description}
                  </p>
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
