import { useEffect, useState } from "react";
import HeartIconFill from "../../Icons/HeartIconFill";
import HeartIcon from "../../Icons/HeartIcon";
import { Container } from "./styles";

type Props = {
  liked: number;
}

export default function Liked({liked}: Props) { 
  const [isLike, setIsLike] = useState(false)

  const onLikeButtonClick = () => {
    setIsLike(!isLike)
  }
  
  return (
    <Container onClick={onLikeButtonClick}>
      {isLike ? <HeartIconFill /> : <HeartIcon />}
      <h5>{liked + (isLike ? 1 : 0)}</h5>
    </Container>
  )
}