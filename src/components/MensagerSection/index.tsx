import SlideMensager from "./SlideMensager";
import { Container } from "./styles";

export default function MensagerSection() {
  return (
    <Container>
      <h2>Relatos</h2>
    
      <div data-aos="zoom-in">
        <SlideMensager />
      </div>
  </Container>
  )
}