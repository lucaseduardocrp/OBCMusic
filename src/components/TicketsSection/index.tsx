import TicketsCard from "./TicketsCard";
import { Container } from "./styles";

export default function TicketsSection() {
  return (
    <Container id="ticket">
    <h2>Escolha o tipo de ingresso</h2>
    
    <TicketsCard />
  </Container>
  )
}