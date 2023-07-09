import { Container } from "./styles";

import Button from "../Button";
import RightArrow from "../Icons/RightArrow";
import { aboutUsText } from "@/modules/aboutUsText";
import AboutImage from "./AboutImage";
import GridImages from "./GridImages";

const item = aboutUsText[0]
const item2 = aboutUsText[1]

export default function AboutSection() {
  return (
    <Container id="artists">
        <div className="about-container" data-aos="zoom-out-right">
          <AboutImage />
          <div className="text" data-aos="fade-left">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Button color="Black" href="#about" background="White">{item.buttonText} <RightArrow /></Button>
          </div>
        </div>

        <div className="about-container" data-aos="zoom-out-right">
          <GridImages />
            <div className="text">
              <h2>{item2.title}</h2>
              <p>{item2.description}</p>
              <Button color="Black" href="#about" background="White">{item2.buttonText} <RightArrow /></Button>
            </div>
        </div>
    </Container>
  )
}