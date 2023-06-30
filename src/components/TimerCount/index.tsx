import { useState } from "react";
import { Container } from "./styles";
import useInterval from "@/hooks/useInterval";
import { secondsToTime } from "@/utils/seconds-to-time";

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