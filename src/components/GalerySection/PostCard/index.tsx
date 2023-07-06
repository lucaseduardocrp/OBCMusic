import { IconContainer, Container } from "./styles";

import Image from "next/image";

import MensageIcon from "@/components/Icons/MensageIcon";
import Liked from "../Liked";
import { GaleryPostTypes } from "@/modules/GaleryInfos";

type PostProps = {
  item: GaleryPostTypes,
  active?: boolean,
}

export default function PostCard({active, item}: PostProps) {
  return (
    <Container className={active ? 'active' : ''}>
      <Image
        src={item.image}
        alt={item.title}
        width={370}
        height={370}
      />
      <IconContainer>
        <Liked liked={item.like} />

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