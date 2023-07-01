import QuotesCloseIcon from "../Icons/QuotesCloseIcon";
import QuotesOpenIcon from "../Icons/QuotesOpenIcon";
import { Container, Mensager } from "./styles";

export default function CarouselMensager() {
  return (
    <Container>
      <Mensager>
        <div className="quoteOpen">
          <QuotesOpenIcon />
        </div>
          <div className="text">
            <p>
              Através dos shows digitais e da tecnologia de realidade virtual da OneBitMusic, pude mergulhar em um universo musical fascinante. Os visuais deslumbrantes, a qualidade do áudio e a interatividade oferecida pela plataforma me deixaram maravilhado. A OneBitMusic realmente entende como proporcionar experiências musicais únicas e memoráveis.
            </p>
          </div>
          <div className="quoteClose">
            <QuotesCloseIcon />
          </div>
      </Mensager>
    </Container>
  )
}