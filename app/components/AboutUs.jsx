"use client";

import React from "react";
import NextImage from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:p-10  lg:flex-row  anchor items-center bg-blue-50 rounded-lg shadow-lg overflow-hidden my-8 mx-auto w-5/6 font-rubik text-right"
    >
      <div className="lg:w-1/2 p-6 flex flex-col justify-center">
        <h1 className="text-xl lg:text-3xl text-[#001c55] font-bold mb-3 text-center lg:text-right">
          מי אנחנו?
        </h1>
        <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-2">
          ב-<span className="font-bold text-[#001c55]">Upsale</span> אנחנו
          מתמחים בהגדלת מכירות לעסקים קטנים ובינוניים באמצעות שירותי תיאום
          פגישות וסגירת עסקאות במיקור חוץ. עם ניסיון של מעל עשור,{" "}
          <span className="font-bold text-[#001c55] text-base lg:text-lg">
            אנחנו יודעים בדיוק איך להפוך מתעניינים ללקוחות משלמים
          </span>
          .
        </p>
        <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-2">
          הצוות שלנו כולל אנשי מכירות מהשורה הראשונה,{" "}
          <span className="font-bold text-[#001c55] text-base lg:text-lg">
            אנשי מכירות עם ניסיון בכל סוגי המכירות, B2B ו-B2C, אנשים
            אינטליגנטים, מוכשרים ורעבים להצלחות
          </span>
          , שמבינים את האתגרים של עסקים קטנים ויודעים לייצר תוצאות בשטח — ויעידו
          על כך הלקוחות המרוצים שלנו.
        </p>
        <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-2">
          אנחנו לא מציעים פתרונות גנריים. כל לקוח מקבל אסטרטגיה מותאמת אישית,
          תסריטי שיחה מדויקים וניהול שוטף שמביא תוצאות.
        </p>
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
