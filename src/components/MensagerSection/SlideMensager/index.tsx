import Image from "next/image";
import { Container, Mensager, Text, FlexContainer } from "./styles";
import { PeopleReports } from "@/modules/PeopleReports";
import { useEffect, useState } from "react";
import QuotesOpenIcon from "@/components/Icons/QuotesOpenIcon";
import QuotesCloseIcon from "@/components/Icons/QuotesCloseIcon";

export default function SlideMensager() {
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
      {PeopleReports.map((item, i) =>  {
        const indexLeft = mod(index - 1, PeopleReports.length);
        const indexRight = mod(index + 1, PeopleReports.length);

        let className = 'active'

        if (i === index){
          className = 'active';
        } else if (i === indexRight) {
          className = 'active card-right'
        } else if (i === indexLeft) {
          className = 'active card-left'
        } else className = ''

        return(
          <Container key={item.name} className={className}>
            <Mensager>
              <div className="quoteOpen">
                <QuotesOpenIcon />
              </div>
              <Text key={item.people}>
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