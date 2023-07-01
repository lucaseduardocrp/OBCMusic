import Image from "next/image";
import QuotesCloseIcon from "../Icons/QuotesCloseIcon";
import QuotesOpenIcon from "../Icons/QuotesOpenIcon";
import { Container, Mensager, Text, FlexContainer } from "./styles";
import { PeopleReports } from "@/modules/PeopleReports";

export default function CarouselMensager() {
  return (
    <FlexContainer>
      {PeopleReports.map((item, id) => 
        <Container key={id}>
          <Mensager>
            <div className="quoteOpen">
              <QuotesOpenIcon />
            </div>
            <Text key={id}>
              {item.description}
            </Text>
            <div className="quoteClose">
              <QuotesCloseIcon />
            </div>
          </Mensager>
          <div className="people-reports">
            <Image src={item.people} alt={item.name} width={120} height={120} />
            <h4>{item.name}</h4>
            <span>{item.local}</span>
          </div>
        </Container>
      )}
    </FlexContainer>
  )
}