import Image from "next/image";
import { Container, IconContainer } from "./styles";
import { GaleryInfos } from "@/modules/GaleryInfos";
import HeartIcon from "../Icons/HeartIcon";
import MensageIcon from "../Icons/MensageIcon";

export default function GaleryCarousel() {
  return (
    <>
      {GaleryInfos.map((item, id) => 
        <Container key={id}>
          <Image src={item.image} alt={item.title} width={370} height={370} />
          <IconContainer>
            <div className="feedback">
              <HeartIcon />
              <h5>{item.like}</h5>
            </div>

            <div className="feedback">
              <MensageIcon />
              <h5>{item.comment}</h5>
            </div>
          </IconContainer>    
    
          <p>{item.title}</p>
          <span>{item.description}</span>
        </Container>
      )}
    </>
  )
}