"use client";

import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      title: "שירותי מכירות במיקור חוץ",
      description:
        "צוותי מכירה מקצועיים עם ניסיון של מעל 10 שנים, מתמחים במכירות B2B ו-B2C לעסקים קטנים ובינוניים",
      image: "/images/itronot/1.png",
      link: "/services/sales-outsourcing",
      features: [
        "צוותי מכירה מקצועיים",
        "מודל גמיש - בנק שעות",
        "תוצאות מוכחות תוך חודשיים",
      ],
    },
    {
      title: "שירותי טלמיטינג",
      description:
        "תיאום פגישות איכותיות עם לקוחות פוטנציאליים, בניית אמון וסגירת עסקאות בטלפון",
      image: "/images/itronot/2.png",
      link: "/services/telemarketing",
      features: [
        "תיאום פגישות איכותיות",
        "בניית אמון בטלפון",
        "סגירת עסקאות בטלפון",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-24 font-rubik bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* קוביות השירותים */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={service.link} className="block">
                <div className="text-center">
                  {/* תמונה */}
                  <div className="w-full mb-6">
                    <NextImage
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={200}
                      className="w-full h-[200px] object-cover rounded-lg"
                    />
                  </div>

                  {/* כותרת */}
                  <h3 className="text-2xl font-bold text-[#001c55] mb-4">
                    {service.title}
                  </h3>

                  {/* תיאור */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* תכונות */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-[#092274] rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* כפתור */}
                  <div className="inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-[#092274] rounded-lg hover:bg-[#001c55] transition-colors duration-200">
                    לפרטים נוספים
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
