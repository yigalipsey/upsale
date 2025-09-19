"use client";

import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import DageshIcon from "./DageshIcon";
import ScrollIndicator from "./ScrollIndicator";

// ייבוא תמונות
import heroImage from "../../public/images/hero.avif";
import heroImage2 from "../../public/images/hero-3.png"; // תמונה למובייל

const Hero = () => {
  return (
    <>
      {/* גרסת מובייל */}
      <section
        id="home"
        className="bg-[#092274] w-5/6 mx-auto lg:hidden relative font-rubik flex flex-col rounded-xl h-[70vh] px-0 py-0 overflow-hidden -mt-2"
        style={{
          backgroundImage:
            "radial-gradient(at center center, #333652 0%, ##333652 33%, ##333652 66%, #333652 100%)",
          direction: "rtl",
        }}
      >
        <div className="flex mb-12 order-2 flex-col w-full relative z-10 items-center text-center">
          {/* קיקר */}
          <p
            className="inline-block text-xs mb-3 font-light text-white border border-white rounded-full px-4 py-2"
            style={{
              maxWidth: "fit-content",
            }}
          >
            סוגרים לך עסקאות וקובעים לך פגישות!
          </p>

          {/* כותרת ראשית */}
          <h1 className="text-2xl mb-3 font-bold text-white leading-tight relative w-[95%]">
            <span>שירותי המכירות במיקור חוץ של Upsale</span>
            <br />
            <span className="relative">
              <span className="relative">
                מביאים תוצאות!
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [1.2, 0.9, 1] }}
                  transition={{
                    delay: 0.2,
                    duration: 1.7,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 px-4 bottom-[-10px]"
                >
                  <DageshIcon className="mr-4" width={120} height={10} />
                </motion.div>
              </span>
            </span>
          </h1>

          {/* כפתור */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg shadow-lg hover:brightness-110 transition mt-4"
            style={{
              background: "linear-gradient(to right, #FFC107, #FFD54F)",
              color: "#001c55",
            }}
            aria-label="לשיחת ייעוץ ומידע נוסף"
          >
            לשיחת ייעוץ ומידע נוסף
          </a>
        </div>

        {/* תמונה עם אנימציה */}
        <motion.div className="w-full flex justify-center relative z-10">
          <NextImage
            src={heroImage2}
            alt="Hero Image Mobile"
            width={200}
            height={200}
            className="h-auto mt-8"
            priority
          />
        </motion.div>
      </section>

      {/* גרסת דסקטופ */}
      <section
        id="home"
        className="hidden w-5/6 mt-5 bg-[#092274] mx-auto lg:flex relative font-rubik flex-row max-h-[500px] rounded-xl h-screen px-24 py-12 overflow-hidden"
      >
        <div className="flex mt-12 flex-col w-1/2 relative z-10 items-start">
          {/* קיקר */}
          <p
            className="inline-block text-sm mb-3 font-light text-white border border-white rounded-full px-4 py-2"
            style={{
              maxWidth: "fit-content",
            }}
          >
            הדרך החכמה להגדיל מכירות
          </p>

          {/* כותרת ראשית */}
          <h1 className="text-4xl  mb-3 font-bold leading-tight relative w-[95%]">
            <span className="text-white">
              שירותי המכירות במיקור חוץ של Upsale{" "}
              <span className="relative">
                מביאים תוצאות!
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [1.2, 0.9, 1] }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 right-0 bottom-[-10px]"
                >
                  <DageshIcon width={200} height={20} />
                </motion.div>
              </span>
            </span>
          </h1>

          {/* כותרת משנית */}
          <p className="text-lg  text-white mb-5 font-light">
            סוגרים לך עסקאות וקובעים לך פגישות!
          </p>

          {/* כפתור */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg shadow-lg hover:brightness-110 transition"
            style={{
              background: "linear-gradient(to right, #FAD02C , #FFD54F)",
              color: "#001c55",
            }}
            aria-label="לשיחת ייעוץ ומידע נוסף"
          >
            לשיחת ייעוץ ומידע נוסף
          </a>
        </div>

        {/* תמונה */}
        <motion.div className="w-1/2 flex mt-12 justify-end items-end relative z-10 h-full">
          <NextImage
            src={heroImage}
            alt="Hero Image Desktop"
            width={950}
            height={950}
            className="h-full object-cover"
            priority
          />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
