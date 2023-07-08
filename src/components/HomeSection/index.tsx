import { HomeSection } from "./styles";

import Button from "../Button";
import PlayIcon from "../Icons/PlayIcon";
import TimerCount from "../TimerCount";
import HomeTitle from "./HomeTitle";

export default function Home() {  

  return (
    <HomeSection id="home">
    <div className="home-text">
      <HomeTitle />
      <p data-aos="zoom-in">
        Prepare-se para uma experiência incrível e envolvente, onde a arte se une à performance para criar momentos inesquecíveis. Nossos shows artísticos são projetados para encantar, inspirar e transportar você para um mundo de criatividade e expressão.
      </p>
      <div className="ButtonsContainer" data-aos="zoom-in">
        <Button href="#ticket" background="Red" color="Alternative">Começar</Button>
        <Button href="https://www.youtube.com/@OneBitCode" target="_blank" background="" color="">
          <PlayIcon width="56" height="56"/> Assistir Video
        </Button>
      </div>
    </div>
    <TimerCount defaultTime={18400} />
  </HomeSection>
  )
}