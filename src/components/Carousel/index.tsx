import Image from "next/image";

import { GaleryInfos } from "@/modules/GaleryInfos";
import { Container, IconContainer, Post } from "./styles";

import Liked from "../GalerySection/Liked";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import MensageIcon from "../Icons/MensageIcon";
import { useEffect, useState } from "react";


export default function Carousel() {
  const [post, setPost] = useState(GaleryInfos)
  const [activePost, setActivePost] = useState<number[]>([])

  useEffect(() => {
    setActivePost(() => {
      const currentPost = Math.floor(GaleryInfos.length / 2);
      return [currentPost - 1, currentPost, currentPost + 1]
    })
  }, [post])

  const handlePrevPost = () => {
    setPost((currentPost) => {
      const [prevPost, ...updatePost] = currentPost;
      return [...updatePost, prevPost];
    });
  }

  const handleNextPost = () => {
    setPost((currentPost) => {
      const updatePost = [...currentPost];
      const nextPost = updatePost.pop()!;
      return [nextPost, ...updatePost];
    });
  }

  return (
    <Container>
       {post.map((item, id) => 
        <Post key={id}>
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
        </Post>
      )}

      <button className="arrow-left" onClick={handlePrevPost}><ArrowLeftIcon /></button>   
      <button className="arrow-right" onClick={handleNextPost}><ArrowRightIcon /></button>
    </Container>
  )
}