"use client";

import React from "react";

const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden my-8 mx-auto w-5/6 font-rubik text-right">
      {/* תוכן */}
      <div className="lg:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-xl lg:text-3xl text-[#001c55] font-bold mb-1">
          אודותינו
        </h2>
        <h3 className="text-lg lg:text-2xl font-semibold text-[#001c55] mb-1">
          מובילים את העסק שלכם להצלחה
        </h3>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-2">
          ב-<span className="font-bold text-[#001c55]">Smart Sales</span> אנו
          מתמחים בליווי עסקים קטנים ובינוניים, עם צוותי מכירה בעלי מעל 10 שנות
          ניסיון. אנו דואגים לשירות מקצועי, אמין וממוקד מטרה שמביא תוצאות
          אמיתיות.
        </p>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-3">
          אנו מאמינים בהתאמה אישית לכל לקוח ומציעים פתרונות ייחודיים שמובילים
          לשיפור ביצועים והגדלת ההכנסות.
        </p>
        {/* כרטיס קטן */}
        <div className="flex items-start w-full border-b border-b-black bg-gray-100 p-4 mb-6">
          <div className="flex items-center justify-center w-8 h-8 bg-[#001c55] rounded-full text-white md:w-12 md:h-12">
            {/* אייקון */}
            <lord-icon
              src="https://cdn.lordicon.com/akuwjdzh.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: "20px", height: "20px" }} // קטן יותר
              className="md:w-[30px] md:h-[30px]" // מוגדל ב-md
            ></lord-icon>
          </div>
          <div className="ml-3 px-2 md:ml-4 md:px-4">
            <h4 className="font-bold text-[#001c55] text-sm md:text-base lg:text-lg">
              שירות אישי ומותאם
            </h4>
            <p className="text-xs md:text-sm text-gray-500">
              התאמה אישית לכל לקוח, תוך הבנת הצרכים המיוחדים של העסק.
            </p>
          </div>
        </div>

        {/* מידע נוסף */}
        <div className="flex lg:flex-row items-center justify-between gap-4">
          {/* מידע על יועד לוי */}
          <div className="flex items-center w-1/2 gap-3 pr-4 border-l border-l-black border-gray-300">
            <img
              src="/images/yoadhero.png" // שים את נתיב התמונה
              alt="יועד לוי"
              className="w-12 h-12 rounded-full"
            />
            <div className="w-1/2">
              <h5 className="text-sm font-bold text-[#001c55]">יועד ליפסי</h5>
              <p className="text-sm text-gray-500">מנכ"ל</p>
            </div>
          </div>
          {/* טלפון */}
          <div className="flex w-[55%] lg:w-1/2 items-center gap-2  text-[#001c55] pl-4 flex-nowrap">
            <lord-icon
              src="https://cdn.lordicon.com/znmbqqqj.json"
              trigger="loop"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>
            <p className="text-sm font-bold whitespace-nowrap">054-2211851</p>
          </div>
        </div>
      </div>

      {/* תמונה */}
      <div className="lg:w-1/2 h-full">
        <img
          src="/images/23.png" // שים כאן את נתיב התמונה שלך
          alt="על אודותינו"
          className="object-cover mr-10 w-[80%]"
        />
      </div>
    </section>
  );
};

export default AboutUs;
