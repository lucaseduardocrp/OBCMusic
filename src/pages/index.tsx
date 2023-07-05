import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

import { Container } from "./_styles";

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
    AOS.init({ duration: 800 });
  }, [])

  return (
    <Container>
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
    </Container>
  )
}
