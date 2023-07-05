import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

import { Container, GalerySection, ContactSection, ContactContainer } from "./styles";

import Image from "next/image";

import FilterContextProvider from "@/context/filter-context";
import GaleryCarousel from "@/components/GaleryCarousel";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import LetterIcon from "@/components/Icons/LetterIcon";
import Form from "@/components/Form";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection/intex";
import TicketsSection from "@/components/TicketsSection";
import CompaniesSection from "@/components/CompaniesSection/intex";
import MensagerSection from "@/components/MensagerSection";

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

      <GalerySection>
        <h2>Galeria de Momentos Compartilhados</h2>

        <GaleryCarousel />
      </GalerySection>

      <ContactSection id="contact">
        <div className="left-container">
          <h2>Nos contate</h2>


          <ContactContainer>
            <PhoneIcon />
            <h5>+55 99823-3232</h5>
          </ContactContainer>

          <ContactContainer>
            <LetterIcon />
            <h5>contato@onebitmusic.com</h5>
          </ContactContainer>

          <Image 
            src={'/FormImage.svg'} 
            alt="Abstract Image" 
            width={224} 
            height={232}
          />
        </div>

        <div className="right-container">
          <Form />
          <Image src={'/Shape.svg'} alt="Abstract Image" width={72} height={48} />
        </div>
      </ContactSection>     
    </Container>
  )
}
