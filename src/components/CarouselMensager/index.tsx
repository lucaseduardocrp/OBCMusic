import Image from "next/image";
import QuotesCloseIcon from "../Icons/QuotesCloseIcon";
import QuotesOpenIcon from "../Icons/QuotesOpenIcon";
import { Container, Mensager, Text } from "./styles";
import { PeopleReports } from "@/modules/PeopleReports";

export default function CarouselMensager() {
  return (
    <Container>
      <Mensager>
        <div className="quoteOpen">
          <QuotesOpenIcon />
        </div>
          {PeopleReports.map((item, id) => 
            <Text key={id}>
              {item.description}
            </Text>
          )}
          <div className="quoteClose">
            <QuotesCloseIcon />
          </div>
      </Mensager>
      {PeopleReports.map((item, id) => 
        <div className="people-reports" key={id}>
          <Image src={item.people} alt={item.name} width={120} height={120} />
          <h4>{item.name}</h4>
          <span>{item.local}</span>
        </div>
      )}
    </Container>
  )
}