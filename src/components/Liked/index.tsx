
import { useState } from "react";
import HeartIconFill from "../Icons/HeartIconFill";
import HeartIcon from "../Icons/HeartIcon";
import { Container } from "./styles";

export default function Liked() {
  const min = 300;
  const max = 4000;

  const randomLikes = Math.floor(Math.random() * (max - min + 1) + min)
  
  const [like, setLike] = useState(randomLikes)
  const [isLike, setIsLike] = useState(false)

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