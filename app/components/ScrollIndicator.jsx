"use client";

import React, { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // אם גללו יותר מ-100px, הסתר את האייקון
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // הוסף event listener
    window.addEventListener("scroll", handleScroll);

    // נקה את ה-event listener כשהקומפוננט נהרס
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // הצג רק במובייל
  if (typeof window !== "undefined" && window.innerWidth >= 768) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-[15%] left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="scrolldown">
        <div className="chevrons">
          <div className="chevrondown" />
          <div className="chevrondown" />
        </div>
      </div>

      <style jsx>{`
        .scrolldown {
          --color: white;
          --sizeX: 30px;
          --sizeY: 50px;
          position: relative;
          width: var(--sizeX);
          height: var(--sizeY);
          margin-left: calc(var(--sizeX) / 2);
          border: calc(var(--sizeX) / 10) solid var(--color);
          border-radius: 50px;
          box-sizing: border-box;
          margin-bottom: 16px;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .scrolldown::before {
          content: "";
          position: absolute;
          bottom: 30px;
          left: 50%;
          width: 6px;
          height: 6px;
          margin-left: -3px;
          background-color: var(--color);
          border-radius: 100%;
          animation: scrolldown-anim 2s infinite;
          box-sizing: border-box;
          box-shadow: 0px -5px 3px 1px rgba(255, 255, 255, 0.3);
        }

        @keyframes scrolldown-anim {
          0% {
            opacity: 0;
            height: 6px;
          }

          40% {
            opacity: 1;
            height: 10px;
          }

          80% {
            transform: translate(0, 20px);
            height: 10px;
            opacity: 0;
          }

          100% {
            height: 3px;
            opacity: 0;
          }
        }

        .chevrons {
          padding: 6px 0 0 0;
          margin-left: -3px;
          margin-top: 48px;
          width: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .chevrondown {
          margin-top: -6px;
          position: relative;
          border: solid var(--color);
          border-width: 0 3px 3px 0;
          display: inline-block;
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
        }

        .chevrondown:nth-child(odd) {
          animation: pulse54012 500ms ease infinite alternate;
        }

        .chevrondown:nth-child(even) {
          animation: pulse54012 500ms ease infinite alternate 250ms;
        }

        @keyframes pulse54012 {
          from {
            opacity: 0;
          }

          to {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollIndicator;
