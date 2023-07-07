import { useState } from "react";
import HeartIconFill from "../../Icons/HeartIconFill";
import HeartIcon from "../../Icons/HeartIcon";
import { Container } from "./styles";

type Props = {
  like: number,
  isLike: boolean,
  onClick: () => void,
}

export default function Liked({like, isLike, onClick}: Props) {
  return (
    <Container onClick={onClick}>
      {isLike ? <HeartIconFill /> : <HeartIcon />}
      <h5>{like + (isLike ? 1 : 0)}</h5>
    </Container>
  )
}