"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // לשימוש בלוגו
import Logo from "../../public/images/logo.svg"; // ייבוא הלוגו

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled || isOpen
          ? "bg-white text-black"
          : "bg-transparent text-black"
      }`}
    >
      <div className="w-5/6 mx-auto sm:px-6 ">
        <div className="flex items-center justify-between mx-auto h-16">
          {/* כפתור המבורגר */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#092274] hover:text-[#455cb7] focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* לוגו */}
          <div className="flex items-center">
            <Link href="#home">
              <Image
                src={Logo}
                alt="Smart Sales Logo"
                width={150} // גודל הלוגו
                height={50}
                className="h-auto"
              />
            </Link>
          </div>

          {/* תפריט במצב רחב */}
          <div className="hidden md:grid grid-cols-3 w-3/6 items-center text-center">
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-[#FFC107] text-lg px-3 py-2 rounded-md font-medium text-black"
            >
              שירותים
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#FFC107] px-3 py-2 rounded-md text-lg font-medium text-black"
            >
              אודות
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#FFC107] px-3 py-2 rounded-md text-lg font-medium text-black"
            >
              יצירת קשר
            </button>
          </div>
        </div>
      </div>

      {/* תפריט במצב נייד */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#001C55] text-white z-40 flex flex-col items-start p-6">
          {/* כפתור סגירה */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-[#092274] hover:text-white"
          >
            <svg
              className="h-8 w-8"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="space-y-3 mt-12 text-right w-full pr-2">
            <button
              onClick={() => scrollToSection("services")}
              className="block text-2xl hover:text-[#FFC107] px-3 py-2 rounded-md font-medium"
            >
              שירותים
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block text-2xl hover:text-[#FFC107] px-3 py-2 rounded-md font-medium"
            >
              אודות
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-2xl hover:text-[#FFC107] px-3 py-2 rounded-md font-medium"
            >
              יצירת קשר
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
