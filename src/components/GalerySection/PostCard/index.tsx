import { IconContainer, Container } from "./styles";

import Image from "next/image";

import MensageIcon from "@/components/Icons/MensageIcon";
import Liked from "../Liked";
import { GaleryPostTypes } from "@/modules/GaleryInfos";
import { Dispatch, SetStateAction } from "react";

type PostProps = {
  item: GaleryPostTypes,
  active?: boolean,
  index: number,
  onClickLike: () => void,
}

export default function PostCard({active, item, index, onClickLike}: PostProps) {
  return (
    <Container className={active ? 'active' : ''}>
      <Image
        src={item.image}
        alt={item.title}
        width={370}
        height={370}
      />
      <IconContainer>
        <Liked
          key={item.id}
          isLike={item.liked}
          onClick={() => onClickLike()}
          like={item.like} 
        />

        <div className="feedback">
          <MensageIcon />
          <h5>{item.comment}</h5>
        </div>
      </IconContainer>
      <p>{item.title}</p>
      <span>{item.description}</span>
    </Container>
  )
}