"use client";

import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row  anchor items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden my-8 mx-auto w-5/6 font-rubik text-right"
    >
      {/* תוכן */}
      <div className="lg:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-xl lg:text-3xl text-[#001c55] font-bold mb-3">
          מי אנחנו ?
        </h2>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-2">
          ב-<span className="font-bold text-[#001c55]">Smart Sales</span> אנו
          מתמחים במתן שירותי מכירות במיקור חוץ לעסקים קטנים ובינוניים, עם צוותי
          מכירה מנוסים בעלי מעל 10 שנות ניסיון. אנו עובדים עם אנשי המכירות
          המובילים בתחום, המתמחים במכירות B2B ו-B2C, בתהליכים מורכבים ופשוטים
          כאחד.
        </p>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-2">
          אנו מציעים שירותים גם בשפה האנגלית, ומאפשרים ללקוחותינו להגיע לשווקים
          מקומיים ובינלאומיים ביעילות ובמקצועיות.
        </p>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-2">
          החזון שלנו הוא להוביל לשיפור ביצועים, הגדלת מכירות וצמיחה בהכנסות תוך
          התאמה אישית לכל לקוח ושיתוף פעולה אמיתי.
        </p>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
          אם אתם מחפשים שותף אמין להצלחה העסקית שלכם – אנחנו כאן בשבילכם!
        </p>

        {/* כרטיס קטן */}
        <div className="flex items-start w-full border-b border-b-1 border-b-black bg-gray-100 p-4 mb-6">
          <div className="flex items-center justify-center w-8 h-8 bg-white border border-black rounded-full text-white md:w-12 md:h-12">
            {/* אייקון */}
            <lord-icon
              src="https://cdn.lordicon.com/idecrumg.json"
              trigger="loop"
              delay="1000"
              state="hover-talking"
              colors="primary:#4be1ec,secondary:#2516c7"
              style={{ width: "40px", height: "40px" }}
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
        <div className="flex w-full">
          {/* מידע על יועד ליפסי */}
          <div className="flex items-center w-1/2 gap-3 pr-4 border-l border-black">
            <img
              src="/images/yoadhero.png" // שים את נתיב התמונה
              alt="יועד ליפסי"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-1">
              <h5 className="text-sm font-bold text-[#001c55]">יועד ליפסי</h5>
              <p className="text-sm text-gray-500">מנכ"ל</p>
            </div>
          </div>
          {/* טלפון */}
          <div className="flex justify-end text-[#001c55] w-1/2">
            <div className="flex flex-col justify-center h-full">
              <p className="text-sm font-bold whitespace-nowrap mr-1">
                054-2211851
              </p>
            </div>
            <lord-icon
              src="https://cdn.lordicon.com/znmbqqqj.json"
              trigger="loop"
              delay="1000"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
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
