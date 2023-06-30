import Button from "@/components/Button";
import { Container, HomeSection, AboutSection, ProgrammingSection } from "./styles";
import PlayIcon from "@/components/Icons/PlayIcon";
import TimerCount from "@/components/TimerCount";
import Image from "next/image";
import { aboutUsText } from "@/modules/aboutUsText";
import RightArrow from "@/components/Icons/RightArrow";
import Schedule from "@/components/Schedule";
import FilterContextProvider from "@/context/filter-context";
import FilterBar from "@/components/FilterBar";

export default function Home() {
  return (
    <Container>
      <HomeSection>
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
      
      <AboutSection>
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
        <ProgrammingSection>
          <h2>Nossa programação</h2>

          <div className="filter-container">
            <FilterBar />
          </div>
          <Schedule />

        </ProgrammingSection>
      </FilterContextProvider>
    </Container>
  )
}
