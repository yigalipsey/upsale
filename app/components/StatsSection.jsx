"use client";

import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section className="py-20  bg-gray-100 px-6 lg:px-24 font-rubik">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" rounded-3xl p-12 lg:p-16"
        >
          {/* כותרת ראשית */}
          <h2 className="mb-6 leading-tight">
            <div className="text-5xl lg:text-7xl font-bold text-gray-800 mb-2">
              הלקוחות שלנו סוגרים
            </div>
            <div className="text-5xl lg:text-7xl font-bold text-gray-800">
              <span className="text-[#092274]">25%</span> יותר עסקאות
            </div>
          </h2>

          {/* תיאור */}
          <p className="text-lg lg:text-xl text-gray-600 mb-10  mx-auto leading-relaxed">
            הצוות המקצועי שלנו מביא תוצאות מוכחות. אנחנו עוזרים לעסקים להגדיל את
            המכירות שלהם ולהגיע לחשבונות החשובים ביותר בענף שלהם.
          </p>

          {/* כפתור CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              background: "linear-gradient(to right, #092274, #001c55)",
              color: "white",
            }}
            aria-label="תאם פגישה לייעוץ"
          >
            תאם פגישה לייעוץ
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
