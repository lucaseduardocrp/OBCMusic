import Button from "../Button";
import { Container } from "./styles";

export default function TicketsCard() {
  return (
    <Container>
      <div className="text-container">
        <h3>Basico</h3>
        <h1>R$100</h1>
      </div>
      <ul>
        <li><p>Acesso aos shows digitais</p></li>
        <li><p>Experiência musical imersiva</p></li>
        <li><p>Preço acessível</p></li>
      </ul>
      <Button href="" background="Transparent"  >Saber mais</Button>
    </Container>
  )
}