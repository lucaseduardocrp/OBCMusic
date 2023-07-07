import Image from "next/image";

import { Container } from "./styles";

import Button from "../Button";
import RightArrow from "../Icons/RightArrow";
import GridImages from "../GridImages";
import { aboutUsText } from "@/modules/aboutUsText";

const item = aboutUsText[0]
const item2 = aboutUsText[1]

export default function AboutSection() {
  return (
    <Container id="artists">
        <div className="about-container" data-aos="zoom-out-right">
          <Image 
            src={'/AboutImage2.png'}
            alt={item.title} 
            width={460} 
            height={480}
            quality={100}
          />
          <div className="text">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Button href="#about" background="White">{item.buttonText} <RightArrow /></Button>
          </div>
        </div>

        <div className="about-container" data-aos="zoom-out-right">
          <GridImages />
            <div className="text">
              <h2>{item2.title}</h2>
              <p>{item2.description}</p>
              <Button href="#about" background="White">{item2.buttonText} <RightArrow /></Button>
            </div>
        </div>
    </Container>
  )
}