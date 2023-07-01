import Image from "next/image";
import QuotesCloseIcon from "../Icons/QuotesCloseIcon";
import QuotesOpenIcon from "../Icons/QuotesOpenIcon";
import { Container, Mensager, Text, FlexContainer } from "./styles";
import { PeopleReports } from "@/modules/PeopleReports";
import { useEffect, useState } from "react";

export default function CarouselMensager() {
  const [index, setIndex] = useState(0);

  const mod = (n: number, m: number) => {
    let result = n % m;

    //return positive value
    return result >= 0 ? result : result + m;
  }; 

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % PeopleReports.length )
    }, 3000)
  }, [index])

  return (
    <FlexContainer>
      {PeopleReports.map((item, id) =>  {
        const indexLeft = mod(index - 1, PeopleReports.length);
        const indexRight = mod(index + 1, PeopleReports.length);

        return(
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
        )})}
    </FlexContainer>
  )
}