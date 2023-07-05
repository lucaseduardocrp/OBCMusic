import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

import Button from "@/components/Button";
import { Container, PartnerCompaniesSection, ReportsSection, GalerySection, ContactSection, ContactContainer } from "./styles";

import Image from "next/image";

import FilterContextProvider from "@/context/filter-context";
import CompaniesGrid from "@/components/CompaniesGrid";
import SlideMensager from "@/components/SlideMensager";
import GaleryCarousel from "@/components/GaleryCarousel";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import LetterIcon from "@/components/Icons/LetterIcon";
import Form from "@/components/Form";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection/intex";
import TicketsSection from "@/components/TicketsSection";

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

      <PartnerCompaniesSection>
        <h2>Nossos investidores</h2>
        
        <CompaniesGrid />
        <Button href="" background="White">Se torne um Investidor</Button>
      </PartnerCompaniesSection>

      <ReportsSection>
        <h2>Relatos</h2>
        
        <div data-aos="zoom-in">
          <SlideMensager />
        </div>
      </ReportsSection>

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
