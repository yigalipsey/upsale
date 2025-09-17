"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // בדוק אם זה מובייל
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // הגדר את המצב הראשוני
    checkMobile();
    setIsVisible(true);

    const handleScroll = () => {
      // אם גללו יותר מ-100px, הסתר את האייקון
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // הוסף event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    // נקה את ה-event listeners כשהקומפוננט נהרס
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // הצג רק במובייל ואחרי שהקומפוננט נטען
  if (!isMobile) {
    return null;
  }

  return (
    <Wrapper
      className={`fixed bottom-[15%] left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="scroll-container">
        <div className="scroll-text">גלול</div>
        <div className="chevrons">
          <div className="chevrondown" />
          <div className="chevrondown" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .scroll-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .scroll-text {
    color: white;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    opacity: 0.8;
  }

  .chevrons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .chevrondown {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    animation: pulse54012 500ms ease infinite alternate;
  }

  .chevrondown:nth-child(2) {
    animation-delay: 250ms;
  }

  @keyframes pulse54012 {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }
`;

export default ScrollIndicator;
