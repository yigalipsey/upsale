"use client";

import React from "react";
import NextImage from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row  anchor items-center bg-blue-50 rounded-lg shadow-lg overflow-hidden my-8 mx-auto w-5/6 font-rubik text-right"
    >
      <div className="lg:w-1/2 p-6 flex flex-col justify-center">
        <h1 className="text-xl lg:text-3xl text-[#001c55] font-bold mb-3">
          מי אנחנו?
        </h1>
        <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-2">
          ב-<span className="font-bold text-[#001c55]">Upsale</span> אנחנו
          מתמחים בהגדלת מכירות לעסקים קטנים ובינוניים באמצעות שירותי תיאום
          פגישות וסגירת עסקאות במיקור חוץ. עם ניסיון של מעל 3 שנים, אנחנו יודעים
          איך להפוך מתעניינים ללקוחות משלמים.
        </p>
        <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-2">
          הצוות שלנו כולל אנשי מכירות מהשורה הראשונה, שמבינים את האתגרים של
          עסקים קטנים ויודעים לייצר תוצאות בשטח — לא דיבורים, אלא מכירות.
        </p>
        <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-2">
          אנחנו לא מציעים פתרונות גנריים. כל לקוח מקבל אסטרטגיה מותאמת אישית,
          תסריטי שיחה מדויקים וניהול שוטף שמביא תוצאות.
        </p>
        <p className="text-sm border-b border-b-1 pb-4 border-b-black lg:text-base text-gray-700 leading-relaxed">
          רוצים לראות איך זה עובד אצלכם?{" "}
          <a
            href="#contact"
            className="text-[#092274] font-bold hover:text-[#001c55] underline hover:no-underline transition-colors duration-300"
          >
            השאירו פרטים ונחזור אליכם עם הצעה שמותאמת בדיוק לעסק שלכם.
          </a>
        </p>

        {/* כרטיס קטן */}
        <div className="flex items-start w-full p-4 mt-3">
          <div className="flex items-center justify-center w-14 h-14 bg-white border border-gray-500 rounded-full text-white">
            <lord-icon
              src="https://cdn.lordicon.com/idecrumg.json"
              trigger="loop"
              delay="1000"
              state="hover-talking"
              colors="primary:#4be1ec,secondary:#2516c7"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </div>
          <div className="ml-3 px-2 md:ml-4 min-w-52 md:px-4">
            <h2 className="font-bold text-[#001c55] text-sm md:text-base lg:text-lg">
              מומחיות בעסקים קטנים
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              אנחנו מכירים את השטח, את האתגרים ואת ההזדמנויות — ומביאים לכם
              תוצאות אמיתיות.
            </p>
          </div>
        </div>
      </div>

      {/* תמונה */}
      <div className=" lg:w-[48%] lg:h-full -mt-4 ">
        <NextImage
          src="/images/aboutus.avif"
          alt="צוות Upsale - מומחי מכירות במיקור חוץ"
          width={600}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutUs;
