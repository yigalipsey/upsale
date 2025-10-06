import NextImage from "next/image";
import Hero from "./components/Hero";
import NewNavbar from "./components/NewNavbar";
import AboutOutsourcing from "./components/AboutOutsourcing";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import ServicesSection from "./components/ServicesSection";
import HowItWorks from "./components/HowItWorks";
import CallToAction from "./components/CallToAction";
import FaqSection from "./components/FaqSection";
import ArticlesSection from "./components/ArticlesSection";
import FooterWithContact from "./components/FooterWithContact";
import WhatsAppButton from "./components/WhatsAppButton";

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
      <CallToAction />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturesSection />

      <AboutOutsourcing />
      <ArticlesSection />
      <FaqSection />
      <FooterWithContact />
      <WhatsAppButton />
    </div>
  );
}
