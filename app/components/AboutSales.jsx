import React from "react";

const AboutSales = () => {
  return (
    <section className="bg-[#b1d0ef] py-12 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* טקסט */}
        <div className="lg:w-1/2 text-right">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            מכירות זה מקצוע לכל דבר!
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            אתם חייבים לעבוד עם שיטת מכירות עדכנית, להעסיק אנשי מכירות תותחים
            שרעבים למכור, לעמוד ביעדים וכמובן להביא תוצאות!
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            במיוחד למי שרוצה להגדיל את המכירות וההכנסות ולשמור על חיסכון בזמן,
            אנרגיה וכסף. מכירות הן החמצן של העסק שלנו. בלי מכירות העסק שלנו לא
            קיים!
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            המטרה שלנו בחברת{" "}
            <span className="font-bold text-[#001c55]">Upsale</span>, בהובלת
            איציק עוז, היא לעזור לבעלי עסקים להגדיל את הרווחים ואת כמות הלקוחות
            באמצעות שירותי מכירה מקצועיים שאנו עושים עבורכם.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-[#FFC107] text-[#001c55] font-bold rounded-lg shadow-lg hover:brightness-110 transition"
          >
            צרו קשר עכשיו!
          </a>
        </div>

        {/* תמונה */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="/images/sales-professional.jpg"
            alt="Sales professionals"
            className="w-full lg:w-3/4 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSales;
