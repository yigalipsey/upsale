import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSales from "./components/AboutSales";
import AboutOutsourcing from "./components/AboutOutsourcing";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import FaqSection from "./components/FaqSection";
import FooterWithContact from "./components/FooterWithContact";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <AboutOutsourcing />
      <FaqSection />
      <FooterWithContact />
    </div>
  );
}
