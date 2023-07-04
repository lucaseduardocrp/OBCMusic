import { useState } from "react";
import HeartIconFill from "../Icons/HeartIconFill";
import HeartIcon from "../Icons/HeartIcon";
import { Container } from "./styles";
import { GaleryInfos } from "@/modules/GaleryInfos";

export default function Liked() { 
  //Random Numbers Generate Function
  const randomLikes = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // const randomLikes = Math.floor(Math.random() * (300 - 4000 + 1) + 300)

  const likesCount = GaleryInfos.map((info) => Number(info.like))

  const [like, setLike] = useState(likesCount.reduce((a, b) => a + b, 0))
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