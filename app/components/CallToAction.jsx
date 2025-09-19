"use client";
import React from "react";
import Loader from "./Loader";
import CenteredRadialPattern from "./CenteredPattern";

const CallToAction = () => {
  return (
    <a
      href="#contact"
      className="block relative w-[90%] md:w-[70%] lg:w-[50%] mx-auto my-10 bg-[#092274] md:bg-[#092274] text-white rounded-xl h-[300px] overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-102 hover:shadow-lg"
    >
      {/* רקע במובייל - CenteredRadialPattern, בדסקטופ - Loader */}
      <div className="block md:hidden">
        <CenteredRadialPattern />
      </div>
      <div className="hidden md:block">
        <Loader />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 max-w-[600px] text-center">
        <h2 className="text-[2.5rem] font-bold mb-2 text-white transition-all duration-300 group-hover:text-yellow-200">
          דברו איתנו{" "}
        </h2>
        <p className="text-[1.2rem] lg:text-[1.2rem] mb-4 leading-tight text-white transition-all duration-300 group-hover:text-blue-100">
          רוצים לראות תוצאות{" "}
          <span className="block lg:inline">כבר מהחודש הראשון?</span>
          <br className="block lg:hidden" />
          <br className="hidden lg:block" />
          השאירו פרטים ונצא לדרך.
        </p>
        <div
          className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg shadow-lg transition-all duration-300 hover:brightness-105 hover:scale-102"
          style={{
            background: "linear-gradient(to right, #FFC107, #FFD54F)",
            color: "#001c55",
          }}
        >
          צרו קשר{" "}
        </div>
      </div>
    </a>
  );
};

export default CallToAction;
