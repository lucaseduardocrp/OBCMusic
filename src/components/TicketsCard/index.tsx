import Button from "../Button";
import { CardContainer, Container } from "./styles";

import { TicketsInformations } from "@/modules/Tickets-Informations";

export default function TicketsCard() {
  return (
    <Container>
      {TicketsInformations.map((item, key) => 
        <CardContainer bordertop={item.cardBorderTop} emphasis={item.emphasis} key={key}>
          <div className="text-container">
            <h3>{item.title}</h3>
            <h1>{item.price}</h1>
          </div>
          <ul>
            <li>{item.list.map((listItem, key) => <p key={key}>{listItem.item}</p>)}</li>
          </ul>
          <Button href="" background={item.btnBG} border={item.btnBorder} color={item.color} >Saber mais</Button>
        </CardContainer>
      )}
    </Container>
  )
}