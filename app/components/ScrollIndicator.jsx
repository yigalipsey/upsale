"use client";

import React from "react";

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <div className="text-white text-xs font-medium opacity-80">גלול</div>
      <div className="flex flex-col items-center gap-1">
        <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white opacity-50 animate-bounce" />
        <div
          className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white opacity-50 animate-bounce"
          style={{ animationDelay: "250ms" }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
