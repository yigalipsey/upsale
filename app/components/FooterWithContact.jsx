"use client";

import React from "react";
import NextImage from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";
import Logo from "../../public/images/upsale-logo-withname.avif";
import ConversionTracker from "./ConversionTracker";

const FooterWithContact = () => {
  const [state, handleSubmit] = useForm("mrballpk");
  const router = useRouter();

  // אם הטופס נשלח בהצלחה, עבור לדף התודה
  React.useEffect(() => {
    if (state.succeeded) {
      // Use conversion tracker if available
      if (typeof window !== "undefined" && window.upsaleConversionTracker) {
        window.upsaleConversionTracker.trackFormSubmission(
          "contact_form",
          "footer_section"
        );
      } else {
        // Fallback to direct gtag calls
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "form_submit", {
            event_category: "Lead Generation",
            event_label: "Contact Form Submitted",
            form_name: "contact_form",
            form_location: "footer_section",
          });

          window.gtag("event", "generate_lead", {
            event_category: "Lead",
            event_label: "Contact Form Lead",
            value: 1,
            currency: "ILS",
          });
        }
      }

      router.push("/thank-you");
    }
  }, [state.succeeded, router]);

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative font-rubik mt-20 bg-[#092274] text-white py-16 px-6 lg:px-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col">
          <div className="lg:w-3/4 lg:mx-auto mt-[-140px] w-full border-[5px] border-[#092274] bg-white text-[#092274] rounded-lg shadow-lg p-6 lg:relative">
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#092274] mx-auto"></div>
            </div>
          </div>

          {/* פוטר */}
          <div className="w-full flex flex-col text-center lg:text-center mt-16 space-y-6">
            <div>
              <NextImage
                src={Logo}
                alt="Upsale Logo"
                width={120}
                height={40}
                className="mx-auto text-white lg:mx-auto lg:mt-4"
                priority
              />
              <p className="text-sm mt-10 ">
                המומחים שלנו כאן כדי לעזור לכם להרחיב את העסק שלכם בצורה מקצועית
                ובטוחה.
              </p>
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <div>
                <p className="font-bold">וואטסאפ:</p>
                <a
                  href="https://wa.me/972533350910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-yellow-300 transition-colors"
                >
                  053-335-0910
                </a>
              </div>
              <div>
                <p className="font-bold">כתובת אימייל:</p>
                <p className="text-sm">office@upsaleil.com</p>
              </div>
            </div>
            <nav className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-center">
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
    <>
      <ConversionTracker />
      <section
        id="contact"
        className="relative font-rubik mt-20 bg-[#092274] text-white py-16 px-6 lg:px-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col">
          {/* טופס יצירת קשר */}
          <div className="lg:w-3/4 lg:mx-auto mt-[-140px] w-full border-[5px] border-[#092274] bg-white text-[#092274] rounded-lg shadow-lg p-6 lg:relative ">
            <h2 className="text-2xl lg:text-3xl font-bold mb-5 text-center">
              צור קשר
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-bold mb-1 text-center"
                    htmlFor="name"
                  >
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
                  <label
                    className="block text-sm font-bold mb-1 text-center"
                    htmlFor="email"
                  >
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
                  <label
                    className="block text-sm font-bold mb-1 text-center"
                    htmlFor="phone"
                  >
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
                    className="block text-sm font-bold mb-1 text-center"
                    htmlFor="message"
                  >
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
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
                onClick={() => {
                  // Use conversion tracker if available
                  if (
                    typeof window !== "undefined" &&
                    window.upsaleConversionTracker
                  ) {
                    window.upsaleConversionTracker.trackFormStart(
                      "contact_form",
                      "footer_section"
                    );
                  } else {
                    // Fallback to direct gtag calls
                    if (typeof window !== "undefined" && window.gtag) {
                      window.gtag("event", "form_start", {
                        event_category: "Lead Generation",
                        event_label: "Contact Form Button Clicked",
                        form_name: "contact_form",
                        form_location: "footer_section",
                      });
                    }
                  }
                }}
                className="w-full bg-[#092274] text-white py-3 px-6 hover:text-white rounded-lg shadow-md hover:bg-[#001c55] transition duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="שלח הודעת יצירת קשר"
              >
                {state.submitting ? "שולח..." : "שלח"}
              </button>

              {/* כפתור וואטסאפ */}
              <a
                href="https://wa.me/972533350910"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#279c21] text-white py-3 px-6 hover:bg-[#29a53a] rounded-lg shadow-md transition duration-300 font-bold text-lg text-center block flex items-center justify-center gap-2"
                aria-label="שלח הודעה בוואטסאפ"
              >
                שלח וואטסאפ
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="flex-shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>

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
          <div className="w-full flex flex-col text-center lg:text-center mt-16 space-y-6">
            <div>
              <NextImage
                src={Logo}
                alt="Upsale Logo"
                width={120}
                height={40}
                className="mx-auto text-white lg:mx-auto lg:mt-4"
                priority
              />
              <p className="text-sm mt-10 ">
                תן לנו לקחת את המכירות שלך קדימה — עם תהליך מוכח, צוותים מנוסים,
                ותשוקה להצלחה
              </p>
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <div>
                <p className="font-bold">וואטסאפ:</p>
                <a
                  href="https://wa.me/972533350910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-yellow-300 transition-colors"
                >
                  053-335-0910
                </a>
              </div>
              <div>
                <p className="font-bold">כתובת אימייל:</p>
                <p className="text-sm">office@upsaleil.com</p>
              </div>
            </div>
            <nav className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-center">
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
    </>
  );
};

export default FooterWithContact;
