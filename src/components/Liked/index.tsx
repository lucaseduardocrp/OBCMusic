import { useEffect, useState } from "react";
import HeartIconFill from "../Icons/HeartIconFill";
import HeartIcon from "../Icons/HeartIcon";
import { Container } from "./styles";

export default function Liked() { 
  const [like, setLike] = useState(Number)
  const [isLike, setIsLike] = useState(false)

  useEffect(() => {
    setLike(Math.floor(Math.random() * (4000 - 300 + 1) + 300))
  }, [])

  const onLikeButtonClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike)
  }
  
  return (
    <Container onClick={onLikeButtonClick}>
      {isLike ? <HeartIconFill /> : <HeartIcon />}
      <h5>{like}</h5>
    </Container>
  )
}