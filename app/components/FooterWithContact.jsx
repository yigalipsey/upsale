"use client";

import React from "react";
import NextImage from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import Logo from "../../public/images/upsale-logo-withname.avif";

const FooterWithContact = () => {
  const [state, handleSubmit] = useForm("mrballpk");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative font-rubik mt-20 bg-[#092274] text-white py-16 px-6 lg:px-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 mt-[-140px] w-full border border-[#092274] border-[5px] bg-white text-[#092274] rounded-lg shadow-lg p-6 lg:relative">
            <div className="text-center py-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-5 text-green-600">
                תודה על פנייתך!
              </h2>
              <p className="text-lg text-gray-700">
                ההודעה נשלחה בהצלחה! ניצור איתך קשר בקרוב.
              </p>
            </div>
          </div>

          {/* פוטר */}
          <div className="lg:w-1/2 lg:mr-10 flex flex-col text-center lg:text-right mt-5 md:-mt-16 space-y-6">
            <div>
              <NextImage
                src={Logo}
                alt="Upsale Logo"
                width={120}
                height={40}
                className="mx-auto text-white lg:mx-0 lg:mt-4"
                priority
              />
              <p className="text-sm mt-10 ">
                המומחים שלנו כאן כדי לעזור לכם להרחיב את העסק שלכם בצורה מקצועית
                ובטוחה.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 justify-center lg:justify-start">
              <div>
                <p className="font-bold">כתובת אימייל:</p>
                <p className="text-sm">office@upsaleil.com</p>
              </div>
            </div>
            <nav className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
              <a href="#home" className="text-sm hover:underline">
                דף הבית
              </a>
              <a href="#about" className="text-sm hover:underline">
                אודות
              </a>
              <a href="#faq" className="text-sm hover:underline">
                שאלות נפוצות
              </a>
              <a href="#contact" className="text-sm hover:underline">
                יצירת קשר
              </a>
            </nav>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative font-rubik mt-20 bg-[#092274] text-white py-16 px-6 lg:px-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* טופס יצירת קשר */}
        <div className="lg:w-1/2 mt-[-140px] w-full border border-[#092274] border-[5px] bg-white text-[#092274] rounded-lg shadow-lg p-6 lg:relative ">
          <h2 className="text-2xl lg:text-3xl font-bold mb-5 text-center md:text-right">
            צור קשר
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1" htmlFor="name">
                  שם מלא <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#092274]"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1" htmlFor="email">
                  אימייל <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#092274]"
                />
                <ValidationError
                  prefix="אימייל"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1" htmlFor="phone">
                  טלפון <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#092274]"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-bold mb-1"
                  htmlFor="message"
                >
                  הודעה
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="1"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#092274]"
                ></textarea>
                <ValidationError
                  prefix="הודעה"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-[#279c21] text-white py-3 px-6 hover:text-black rounded-lg shadow-md hover:bg-[#29a53a] transition duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="שלח הודעת יצירת קשר"
            >
              {state.submitting ? "שולח..." : "שלח"}
            </button>

            {/* הצגת שגיאות כלליות */}
            {state.errors && state.errors.length > 0 && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                <p className="text-sm font-bold">שגיאה בשליחת הטופס:</p>
                <ul className="text-sm mt-1">
                  {state.errors.map((error, index) => (
                    <li key={index}>{error.message}</li>
                  ))}
                </ul>
              </div>
            )}
          </form>
        </div>

        {/* פוטר */}
        <div className="lg:w-1/2 lg:mr-10 flex flex-col text-center lg:text-right mt-5 md:-mt-16 space-y-6">
          <div>
            <NextImage
              src={Logo}
              alt="Upsale Logo"
              width={120}
              height={40}
              className="mx-auto text-white lg:mx-0 lg:mt-4"
              priority
            />
            <p className="text-sm mt-10 ">
              המומחים שלנו כאן כדי לעזור לכם להרחיב את העסק שלכם בצורה מקצועית
              ובטוחה.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 justify-center lg:justify-start">
            <div>
              <p className="font-bold">כתובת אימייל:</p>
              <p className="text-sm">office@upsaleil.com</p>
            </div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
            <a href="#home" className="text-sm hover:underline">
              דף הבית
            </a>
            <a href="#about" className="text-sm hover:underline">
              אודות
            </a>
            <a href="#faq" className="text-sm hover:underline">
              שאלות נפוצות
            </a>
            <a href="#contact" className="text-sm hover:underline">
              יצירת קשר
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default FooterWithContact;
