import Image from "next/image";
import { Container } from "./styles";

export default function GaleryCarousel() {
  return (
    <Container>
      <Image src={''} alt="" width={370} height={370} />
      <div className="heart-icon">

      </div>
      <div className="mensager-icon">

      </div>
      <p></p>
      <span></span>
    </Container>
  )
}