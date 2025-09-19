import React from "react";
import NextImage from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      title: "שירותי מכירות במיקור חוץ",
      description:
        "צוותי מכירה מקצועיים עם ניסיון של מעל 10 שנים, מתמחים במכירות B2B ו-B2C לעסקים קטנים ובינוניים",
      image: "/images/articles/sales/3.avif",
      link: "/services/sales-outsourcing",
    },
    {
      title: "שירותי טלמיטינג",
      description:
        "תיאום פגישות איכותיות עם לקוחות פוטנציאליים, בניית אמון וסגירת עסקאות בטלפון",
      image: "/images/articles/sales/1.avif",
      link: "/services/Telemeeting",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 px-6 lg:px-24 font-rubik bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* כותרת הסקציה */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001c55] mb-4">
            השירותים שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנו מציעים שירותי מכירות מקצועיים המותאמים במיוחד לעסקים קטנים
            ובינוניים
          </p>
        </div>

        {/* קוביות השירותים */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={service.link} className="block h-full">
                <div className="text-center h-full flex flex-col">
                  {/* תמונה */}
                  <div className="w-full mb-6">
                    <NextImage
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={200}
                      className="w-full h-[200px] object-cover rounded-lg"
                    />
                  </div>

                  {/* כותרת */}
                  <h3 className="text-2xl font-bold text-[#001c55] mb-4">
                    {service.title}
                  </h3>

                  {/* תיאור */}
                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* כפתור */}
                  <div className="mt-auto flex justify-center">
                    <div className="max-w-fit px-8 py-4 font-medium text-white bg-[#092274] rounded-lg hover:bg-[#001c55] transition-colors duration-200 text-center">
                      לפרטים נוספים
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
