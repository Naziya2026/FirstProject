import React from "react";
import HeroSlider from "../components/HeroSlider";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
