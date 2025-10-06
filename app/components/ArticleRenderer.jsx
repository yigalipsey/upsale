"use client";

import React from "react";
import NextImage from "next/image";

const ArticleRenderer = ({ articleData }) => {
  if (!articleData) {
    return <div>מאמר לא נמצא</div>;
  }

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case "paragraph":
          return (
            <p
              key={index}
              className="text-lg text-gray-700 mb-6 leading-relaxed"
            >
              {item.text}
            </p>
          );

        case "heading":
          const HeadingTag = `h${item.level}`;
          const headingClasses = {
            1: "text-4xl font-bold text-[#001c55] mb-6",
            2: "text-2xl font-bold text-[#001c55] mb-4 mt-8",
            3: "text-xl font-bold text-[#001c55] mb-3 mt-6",
          };
          return (
            <HeadingTag
              key={index}
              className={headingClasses[item.level] || headingClasses[2]}
            >
              {item.text}
            </HeadingTag>
          );

        case "divider":
          return <div key={index} className="border-t border-gray-300 my-8" />;

        case "benefit":
          return (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-bold text-[#001c55] mb-3">
                {item.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          );

        case "list":
          return (
            <ul key={index} className="list-disc list-inside mb-6 space-y-2">
              {item.items.map((listItem, listIndex) => (
                <li key={listIndex} className="text-lg text-gray-700">
                  {listItem}
                </li>
              ))}
            </ul>
          );

        case "quote":
          return (
            <div
              key={index}
              className="bg-blue-50 border-l-4 border-[#001c55] p-6 my-8 rounded-r-lg"
            >
              <p className="text-lg text-[#001c55] font-medium">{item.text}</p>
            </div>
          );

        case "image":
          return (
            <div key={index} className="mb-8">
              <NextImage
                src={item.src}
                alt={item.alt}
                width={item.width || 800}
                height={item.height || 300}
                className="w-full h-[300px] object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          );

        default:
          return null;
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* תמונת המאמר */}
      {articleData.metadata.image && (
        <div className="mb-8">
          <NextImage
            src={articleData.metadata.image}
            alt={articleData.title}
            width={800}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}

      {/* תוכן המאמר */}
      <div className="prose prose-lg max-w-none">
        {renderContent(articleData.content)}
      </div>

      {/* קישורים חיצוניים */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="space-y-2 mb-4">
          <a
            href="https://blog.hubspot.com/sales"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-600 hover:text-gray-800 transition-colors duration-200 text-sm"
          >
            <svg
              className="w-3 h-3 inline mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              />
            </svg>
            למאמרים בנושא מכירות במיקור חוץ ב-HubSpot
          </a>
          <a
            href="https://en.m.wikipedia.org/wiki/Sales_outsourcing"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-600 hover:text-gray-800 transition-colors duration-200 text-sm"
          >
            <svg
              className="w-3 h-3 inline mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              />
            </svg>
            למידע מקיף על מיקור חוץ במכירות ב-Wikipedia
          </a>
        </div>
      </div>

      {/* תגיות */}
      {articleData.metadata.tags && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">תגיות:</h3>
          <div className="flex flex-wrap gap-2">
            {articleData.metadata.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleRenderer;
