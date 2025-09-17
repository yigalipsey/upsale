import NextImage from "next/image";
import Hero from "./components/Hero";
import NewNavbar from "./components/NewNavbar";
import AboutOutsourcing from "./components/AboutOutsourcing";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import ServicesSection from "./components/ServicesSection";
import CallToAction from "./components/CallToAction";
import FaqSection from "./components/FaqSection";
import FooterWithContact from "./components/FooterWithContact";
import ScrollIndicator from "./components/ScrollIndicator";

export const metadata = {
  title: "Upsale | המומחים במכירות במיקור חוץ",
  description:
    "הרחיבו את צוות המכירות שלכם עם מיקור חוץ איכותי! אנו מספקים צוותי מכירות מקצועיים עם ניהול צמוד, תסריטי שיחה מותאמים אישית וסדנאות מכירה קבועות.",
  openGraph: {
    title: "Upsale | המומחים במכירות במיקור חוץ",
    description: "הרחיבו את צוות המכירות שלכם עם מיקור חוץ איכותי!",
    url: "https://upsale.co.il",
    siteName: "Upsale",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Upsale - מיקור חוץ מכירות",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  alternates: {
    canonical: "https://upsale.co.il",
  },
};

export default function Home() {
  return (
    <div className="">
      <NewNavbar />
      <Hero />
      <AboutUs />
      <ServicesSection />
      <WhyChooseUs />
      <FeaturesSection />
      <AboutOutsourcing />

      <CallToAction />
      <FaqSection />
      <FooterWithContact />
      <ScrollIndicator />
    </div>
  );
}
