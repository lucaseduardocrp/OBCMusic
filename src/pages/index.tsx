import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';


import FilterContextProvider from "@/context/filter-context";

import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection/intex";
import TicketsSection from "@/components/TicketsSection";
import CompaniesSection from "@/components/CompaniesSection/intex";
import MensagerSection from "@/components/MensagerSection";
import ContactSection from "@/components/ContactSection";
import GalerySection from "@/components/GalerySection";

export default function Home() {
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
    });
  }, [])

  return (
    <>
      <HomeSection />
      <AboutSection />

      <FilterContextProvider>
        <ScheduleSection />
      </FilterContextProvider>

      <TicketsSection />
      <CompaniesSection />
      <MensagerSection />
      <GalerySection />

      <ContactSection />
    </>
  )
}
