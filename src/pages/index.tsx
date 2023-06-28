import Button from "@/components/Button";
import { Container, HomeSection } from "./styles";
import PlayIcon from "@/components/Icons/PlayIcon";

export default function Home() {
  return (
    <Container>
      <HomeSection>
        <h1>
          A Sua Melhor Experiência <br /> 
          <b>Musical Digital</b>
        </h1>
        <p>
          Prepare-se para uma experiência incrível e envolvente, onde a arte se une à performance para criar momentos inesquecíveis. Nossos shows artísticos são projetados para encantar, inspirar e transportar você para um mundo de criatividade e expressão.
        </p>
        <div className="ButtonsContainer">
          <Button href="" background="Red" color="White">Começar</Button>
          <Button href="" background="Transparent" color="White">
            <PlayIcon width="40" height="40"/> Assistir Video
          </Button>
        </div>
      </HomeSection>
      <section></section>
    </Container>
  )
}
