import React from "react";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

// ייבוא תמונות
import heroImage from "../../public/images/hero.png";
import heroImage2 from "../../public/images/hero2.png"; // תמונה למובייל
import dagesh from "../../public/images/dagesh.svg"; // ייבוא ה-SVG המותאם שלך

const Hero = () => {
  return (
    <>
      {/* גרסת מובייל */}
      <section
        className="bg-[#092274]  w-5/6 mx-auto max-h-[580px] lg:hidden relative font-rubik flex flex-col   rounded-xl h-screen px-0 py-0 overflow-hidden"
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
            להרחיב את צוות המכירות שלכם עם מיקור חוץ איכותי
          </p>

          {/* כותרת ראשית */}
          <h1 className="text-2xl mb-3 font-bold leading-tight relative">
            <span>מוקד המכירות החיצוני</span>
            <br />
            <span className="relative">
              שמביא תוצאות
              <Image
                src={dagesh}
                alt="Dagesh"
                className="absolute left-0 px-4 bottom-[-10px]"
                width={120}
                height={10}
              />
            </span>
          </h1>

          {/* כותרת משנית */}
          <p className="text-sm mb-5 w-5/6 font-light">
            אנו מספקים צוותי מכירות מקצועיים לעסקים. עם ניהול צמוד, תסריטי שיחה
            מותאמים אישית, וסדנאות מכירה קבועות. חיסכו זמן, כסף ומשאבים - ותנו
            לנו לדאוג להצלחה שלכם.
          </p>

          {/* כפתור */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg shadow-lg hover:brightness-110 transition"
            style={{
              background: "linear-gradient(to right, #FFC107, #FFD54F)",
              color: "#001c55",
            }}
          >
            לשיחת ייעוץ ומידע נוסף
            <FiArrowLeft className="mr-3 mt-1" size={20} />
          </a>
        </div>

        {/* תמונה */}
        <div className="w-full flex justify-center relative z-10 ">
          <Image
            src={heroImage2}
            alt="Hero Image Mobile"
            width={200}
            height={200}
            className="h-auto mt-8"
            priority
          />
        </div>
      </section>

      {/* גרסת דסקטופ */}
      <section
        className="hidden w-5/6 mt-20 bg-[#092274] mx-auto lg:flex relative font-rubik flex-row max-h-[500px] items-center justify-between rounded-xl h-screen px-24 py-12 overflow-hidden"
        // style={{
        //   backgroundImage:
        //     "radial-gradient(at center center, #333652 0%, #333652 33%, #0A2472 66%, #001C55 100%)",
        //   direction: "rtl",
        // }}
      >
        <div className="flex flex-col w-1/2 relative z-10 items-start">
          {/* קיקר */}
          <p
            className="inline-block text-sm mb-3 font-light text-white border border-white rounded-full px-4 py-2"
            style={{
              maxWidth: "fit-content",
            }}
          >
            להרחיב את צוות המכירות שלכם עם מיקור חוץ איכותי
          </p>

          {/* כותרת ראשית */}
          <h1 className="text-4xl mb-3 font-bold leading-tight relative">
            <span>מוקד המכירות החיצוני</span>
            <br />
            <span className="relative">
              שמביא תוצאות
              <Image
                src={dagesh}
                alt="Dagesh"
                className="absolute left-0 right-0 bottom-[-10px]"
                width={200}
                height={20}
              />
            </span>
          </h1>

          {/* כותרת משנית */}
          <p className="text-lg mb-5 font-light">
            אנו מספקים צוותי מכירות מקצועיים לעסקים. עם ניהול צמוד, תסריטי שיחה
            מותאמים אישית, וסדנאות מכירה קבועות. חיסכו זמן, כסף ומשאבים - ותנו
            לנו לדאוג להצלחה שלכם.
          </p>

          {/* כפתור */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg shadow-lg hover:brightness-110 transition"
            style={{
              background: "linear-gradient(to right, #FAD02C , #FFD54F)",
              color: "#001c55",
            }}
          >
            לשיחת ייעוץ ומידע נוסף
            <FiArrowLeft className="mr-3 mt-1" size={20} />
          </a>
        </div>

        {/* תמונה */}
        <div className="w-1/2  flex justify-end relative z-10">
          <Image
            src={heroImage2}
            alt="Hero Image Desktop"
            width={400}
            height={400}
            className="h-auto"
            priority
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
