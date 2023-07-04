import { useState } from "react";
import useInterval from "@/hooks/useInterval";
import { secondsToTime } from "@/utils/seconds-to-time";
import { Container } from "./styles";

interface Props {
  defaultTime: number,
}

export default function TimerCount(props: Props){
  const [mainTime, setMainTime] = useState(props.defaultTime)
  
  useInterval(() => {
    setMainTime(mainTime - 1)
  }, 1000)

  return (
    <Container>
      <span>{secondsToTime(mainTime)}</span>
    </Container>
  )
}