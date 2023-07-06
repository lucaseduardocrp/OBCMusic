import { useRef } from "react";
import { GaleryInfos } from "@/modules/GaleryInfos";

import { Container, IconContainer, Carousel } from "./styles";
import Image from "next/image";

import Liked from "../Liked";
import MensageIcon from "@/components/Icons/MensageIcon";
import ArrowLeftIcon from "@/components/Icons/ArrowLeftIcon";
import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";

export default function GaleryCarousel() {
  const carousel = useRef<any>(null);

  const handleLeft = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRight = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <Carousel ref={carousel}>       
      {GaleryInfos.map((item, id) =>
        <Container key={id}>
          <div className="image">
            <Image
              src={item.image}
              alt={item.title}
              width={370}
              height={370}
            />
          </div>
          <IconContainer>
            <Liked liked={item.like} />

            <div className="feedback">
              <MensageIcon />
              <h5>{item.comment}</h5>
            </div>
          </IconContainer>
          <p>{item.title}</p>
          <span>{item.description}</span>
        </Container>
      )}

      <div className="buttons-container">
        <button className="arrow-left" onClick={handleLeft}><ArrowLeftIcon /></button>   

        <button className="arrow-right" onClick={handleRight}><ArrowRightIcon /></button>
      </div>
    </Carousel>
  )
};