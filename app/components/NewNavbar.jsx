"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NewNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
      return () => document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  const handleSmoothScroll = (href) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const navHeight = 80;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { href: "/", label: "בית" },
    { href: "#about", label: "אודות" },
    { href: "#services", label: "שירותים" },
    { href: "#articles", label: "מאמרים" },
    { href: "#contact", label: "צור קשר" },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "top-0 bg-white border-b border-[#092274]"
          : "top-5 md:top-5 top-2 bg-transparent"
      }`}
      role="navigation"
      aria-label="ניווט ראשי"
    >
      <style jsx global>{`
        body.menu-open {
          overflow: hidden !important;
        }
      `}</style>

      <div className="w-[90%] md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* כפתור המובייל - בצד ימין */}
        <div className="md:hidden absolute top-1/2 right-4 -translate-y-1/2 z-[9999]">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#092274] border border-[#092274] hover:bg-[#092274]/10 rounded-lg transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-[#092274] transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#092274] transition-all duration-300 mt-1 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#092274] transition-all duration-300 mt-1 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* לוגו במובייל - במרכז */}
        <div className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 z-[9999] flex items-center justify-center">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/smal-logo.avif"
              alt="Upsale Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <div className="flex pb-2 justify-between items-center h-14 md:h-16">
          {/* לוגו - בצד שמאל (דסקטופ בלבד) */}
          <Link href="/" className="flex-shrink-0 hidden md:block">
            <Image
              src="/images/smal-logo.avif"
              alt="Upsale Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* ניווט דסקטופ - במרכז */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-reverse space-x-8 rtl">
              {navItems.map((item) =>
                item.href.startsWith("#") ? (
                  <button
                    key={item.href}
                    onClick={() => handleSmoothScroll(item.href)}
                    className="text-base font-medium transition-colors hover:text-[#001c55] text-[#092274]"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base font-medium transition-colors hover:text-[#001c55] ${
                      pathname === item.href ? "text-white" : "text-[#092274]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* צד ימין - כפתור יצירת קשר */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 font-medium text-[#092274] border border-[#092274] rounded-lg hover:bg-[#092274] hover:text-white transition-all duration-200"
            >
              צור קשר
            </Link>
          </div>
        </div>

        {/* ניווט מובייל */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-50 bg-white md:hidden min-h-screen"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsMenuOpen(false);
                }
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      delayChildren: 0.1,
                      staggerChildren: 0.08,
                    },
                  },
                  exit: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                }}
                className="flex flex-col w-full min-h-screen px-6 py-8 justify-center"
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: 30 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full mb-6 list-none"
                  >
                    {item.href.startsWith("#") ? (
                      <button
                        onClick={() => {
                          handleSmoothScroll(item.href);
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center justify-center w-full px-6 py-4 text-lg font-medium text-[#092274] transition-colors border-b-2 border-[#092274]/20 hover:text-[#001c55]"
                      >
                        <span>{item.label}</span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center justify-center w-full px-6 py-4 text-lg font-medium text-[#092274] transition-colors border-b-2 border-[#092274]/20 hover:text-[#001c55]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NewNavbar;
