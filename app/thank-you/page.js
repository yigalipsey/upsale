"use client";

import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#092274] via-[#001c55] to-[#092274] flex items-center justify-center p-6 -mt-20 md:-mt-24 pt-20 md:pt-24">
      <div className="max-w-2xl mx-auto text-center">
        {/* אנימציה של הלוגו */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 -mt-8 md:-mt-12"
        >
          <NextImage
            src="/images/smal-logo.avif"
            alt="Upsale Logo"
            width={200}
            height={80}
            className="mx-auto w-32 h-auto md:w-40"
            priority
          />
        </motion.div>

        {/* כותרת ראשית */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 font-rubik"
        >
          תודה על פנייתך!
        </motion.h1>

        {/* תיאור */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-blue-100 mb-8 font-rubik leading-relaxed"
        >
          ההודעה נשלחה בהצלחה! הצוות המקצועי שלנו יצור איתך קשר בהקדם
          <br className="hidden md:block" />
          כדי להתחיל את המסע להגדלת המכירות שלך.
        </motion.p>

        {/* פרטי יצירת קשר */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4 font-rubik">
            פרטי יצירת קשר
          </h2>
          <div className="space-y-3 text-blue-100">
            <p className="text-lg">
              <span className="font-bold">אימייל:</span> office@upsaleil.com
            </p>
          </div>
        </motion.div>

        {/* כפתור */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FFC107] to-[#FFD54F] text-[#001c55] font-bold rounded-xl text-lg hover:from-[#FFD54F] hover:to-[#FFC107] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            חזרה לדף הבית
          </Link>
        </motion.div>

        {/* הודעה נוספת */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-blue-200 mt-8 text-lg font-rubik"
        >
          אנחנו ניצור איתך קשר תוך 24 שעות!
        </motion.p>
      </div>
    </div>
  );
};

export default ThankYouPage;
