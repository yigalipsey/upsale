import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSales from "./components/AboutSales";
import AboutOutsourcing from "./components/AboutOutsourcing";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />

      <AboutOutsourcing />
      <WhyChooseUs />
      <AboutUs />
    </div>
  );
}
