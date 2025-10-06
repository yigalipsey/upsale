import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import NewNavbar from "./components/NewNavbar";
import AboutUs from "./components/AboutUs";
import CallToAction from "./components/CallToAction";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import FeaturesSection from "./components/FeaturesSection";
import AboutOutsourcing from "./components/AboutOutsourcing";
import ArticlesSection from "./components/ArticlesSection";
import FooterWithContact from "./components/FooterWithContact";

// Lazy load components that are not critical for initial render
const FaqSection = dynamic(() => import("./components/FaqSection"), {
  loading: () => <div className="py-16 bg-gray-50 animate-pulse" />,
});
const WhatsAppButton = dynamic(() => import("./components/WhatsAppButton"), {
  loading: () => null,
});

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
