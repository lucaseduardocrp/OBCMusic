import Image from "next/image";

import { Container } from "./styles";
import { aboutUsText } from "@/modules/aboutUsText";

import Button from "../Button";
import RightArrow from "../Icons/RightArrow";

export default function AboutSection() {
  return (
    <Container id="artists">
      {aboutUsText.map((index, key) =>
        <div className="about-container" key={key} data-aos="zoom-out-right">
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
            <Button href="#about" background="White">{index.buttonText} <RightArrow /></Button>
          </div>
        </div>
      )}
    </Container>
  )
}