import { useState } from "react";
import useInterval from "@/hooks/useInterval";
import { Container } from "./styles";
import { timerCount } from "@/utils/timerCount";

interface Props {
  defaultTime: number,
}

export default function TimerCount(props: Props){
  const [eventData] = useState(new Date('2023-07-16'))
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  })
  const changeTimer = () => {
    setTimeLeft(timerCount(eventData))
  }
  useInterval(changeTimer, 1000)


  return (
    <Container 
      data-aos="fade-up"
    >
      <span>{timeLeft.dias}d</span>
      <span>{timeLeft.horas}h</span>
      <span>{timeLeft.minutos}m</span>
      <span>{timeLeft.segundos}s</span>
    </Container>
  )
}