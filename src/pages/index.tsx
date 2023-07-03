import Button from "@/components/Button";
import { 
  Container,
  HomeSection,
  AboutSection,
  ProgrammingSection,
  TicketsSection,
  PartnerCompaniesSection,
  ReportsSection,
  GalerySection,
  ContactSection,
  ContactContainer,   
} from "./styles";

import PlayIcon from "@/components/Icons/PlayIcon";
import TimerCount from "@/components/TimerCount";
import Image from "next/image";
import { aboutUsText } from "@/modules/aboutUsText";
import RightArrow from "@/components/Icons/RightArrow";
import Schedule from "@/components/Schedule";
import FilterContextProvider from "@/context/filter-context";
import FilterBar from "@/components/FilterBar";
import TicketsCard from "@/components/TicketsCard";
import CompaniesGrid from "@/components/CompaniesGrid";
import SlideMensager from "@/components/SlideMensager";
import GaleryCarousel from "@/components/GaleryCarousel";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import LetterIcon from "@/components/Icons/LetterIcon";
import Form from "@/components/Form";

export default function Home() {
  return (
    <Container>
      <HomeSection id="home">
        <h1>A Sua Melhor Experiência <b>Musical Digital</b></h1>
        <p>
          Prepare-se para uma experiência incrível e envolvente, onde a arte se une à performance para criar momentos inesquecíveis. Nossos shows artísticos são projetados para encantar, inspirar e transportar você para um mundo de criatividade e expressão.
        </p>
        <div className="ButtonsContainer">
          <Button href="" background="Red" color="White">Começar</Button>
          <Button href="" background="Transparent" color="White">
            <PlayIcon width="56" height="56"/> Assistir Video
          </Button>
        </div>
        <TimerCount defaultTime={518400}/>
      </HomeSection>
      
      <AboutSection id="artists">
        {aboutUsText.map((index, key) =>
          <div className="about-container" key={key}>
            <Image 
              src={index.src}
              alt={index.title} 
              width={index.width} 
              height={index.height}
              quality={100}
            />
            <div className="text">
              <h2>{index.title}</h2>
              <p>{index.description}</p>
              <Button href="" background="White">{index.buttonText} <RightArrow /></Button>
            </div>
          </div>
        )}
      </AboutSection>

      <FilterContextProvider>
        <ProgrammingSection id="schedule">
          <h2>Nossa programação</h2>

          <div className="filter-container">
            <FilterBar />
          </div>
          <Schedule />

        </ProgrammingSection>
      </FilterContextProvider>

      <TicketsSection id="ticket">
        <h2>Escolha o tipo de ingresso</h2>
        
        <TicketsCard />
      </TicketsSection>

      <PartnerCompaniesSection>
        <h2>Nossos investidores</h2>
        <CompaniesGrid />
        <Button href="" background="White">Se torne um Investidor</Button>
      </PartnerCompaniesSection>

      <ReportsSection>
        <h2>Relatos</h2>
        
        <SlideMensager />
      </ReportsSection>

      <GalerySection>
        <h2>Galeria de Momentos Compartilhados</h2>

        <div className="grid-container">
          {/* <GaleryCarousel /> */}
        </div>
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
