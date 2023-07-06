import Carousel from "../Carousel";
import GaleryCarousel from "./GaleryCarousel";
import { Container } from "./styles";

export default function GalerySection() {
  return (
    <Container>
      <h2>Galeria de Momentos Compartilhados</h2>

      {/* <GaleryCarousel /> */}
      <Carousel />
    </Container>
  )
}