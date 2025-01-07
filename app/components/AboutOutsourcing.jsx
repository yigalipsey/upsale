import React from "react";

const AboutOutsourcing = () => {
  return (
    <section className="bg-[#E9EAEC] w-5/6 mx-auto py-8 mt-10 rounded-lg px-6 font-rubik lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:items-center gap-12">
        {/* טקסט */}
        <div className="lg:w-1/2 flex flex-col text-right">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#001c55] mb-3">
            מהו מיקור חוץ ולמה הוא מתאים לעסקים קטנים?
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-2">
            מיקור חוץ הוא הדרך החכמה לעסקים קטנים ובינוניים שמעוניינים להגדיל את
            כמות הלידים והמכירות שלהם בלי להעמיס על משאבים פנימיים. במקום
            להתמודד עם גיוס, הכשרה וניהול של צוותים פנימיים, אנו מספקים לך צוות
            מקצועי וממוקד מטרה, שידאג להביא את התוצאות הרצויות.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-2">
            <span className="font-bold text-[#001c55]">Smart Sales</span> היא
            חברת בוטיק המתמחה בעסקים קטנים, עם דגש על יחס אישי והתאמה אישית
            לצרכי כל לקוח. אנחנו מבינים את האתגרים הייחודיים של עסקים קטנים,
            ויודעים בדיוק איך לעזור לך לסגור יותר לידים ולהגדיל את ההכנסות שלך.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            העבודה איתנו חוסכת זמן, אנרגיה וכסף, ומביאה לך את כל הכלים והידע
            הדרושים כדי למקסם את הפוטנציאל העסקי שלך. אנחנו לא רק מספקים שירותי
            מכירה - אנחנו שותפים לדרך שלך להצלחה.
          </p>
        </div>

        {/* תמונה */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/images/344.svg" // שים פה את התמונה הרצויה
            alt="Outsourcing Team"
            className="w-[80%] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutOutsourcing;
