import Button from "@/components/Button";
import { Container } from "./styles";

export default function Form() {
  return (
    <Container>
      <h3>Preencha com seus dados</h3>

      <form action="post" autoComplete="off">
        <input type="name" name="name" id="name" placeholder="Nome" />
        <input type="email" name="email" id="email" placeholder="Email"/>
        <input type="text" placeholder="Mensagem"/>
        <Button background="Red" color="White" href="">Enviar</Button>
      </form>
    </Container>
  )
};