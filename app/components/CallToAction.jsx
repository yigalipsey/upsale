"use client";
import React from "react";
import Loader from "./Loader";

const CallToAction = () => {
  return (
    <section className="relative w-[90%] md:w-[70%] lg:w-[50%] mx-auto my-10 bg-[#092274] text-white rounded-xl h-[300px] overflow-hidden">
      <Loader />
      <div className="absolute top-1/2 right-10 md:right-10 left-10 md:left-auto transform -translate-y-1/2 z-10 max-w-[600px] text-center md:text-right">
        <h2 className="text-[2.5rem] font-bold mb-2">בואו ניצור קשר</h2>
        <p className="text-[1.2rem] mb-4">
          רוצים לראות תוצאות כבר מהחודש הראשון?
          <br />
          השאירו פרטים ונצא לדרך.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg shadow-lg hover:brightness-110 transition"
          style={{
            background: "linear-gradient(to right, #FFC107, #FFD54F)",
            color: "#001c55",
          }}
          aria-label="קבעו שיחת גילוי"
          role="button"
        >
          צרו קשר{" "}
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
