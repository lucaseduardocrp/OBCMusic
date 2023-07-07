import { GaleryInfos } from "@/modules/GaleryInfos";
import { Container } from "./styles";

import ArrowLeftIcon from "../../Icons/ArrowLeftIcon";
import ArrowRightIcon from "../../Icons/ArrowRightIcon";
import { useEffect, useState } from "react";
import PostCard from "../PostCard";


export default function Carousel() {
  const [post, setPost] = useState(GaleryInfos)
  const [activePost, setActivePost] = useState<number[]>([])

  // index that returns from the carousel

  useEffect(() => {
    setActivePost(() => {
      const currentPost = Math.floor(GaleryInfos.length / 2);
      return [currentPost - 1, currentPost, currentPost + 1]
    })
  }, [post])

  // Carousel Change Function

  const handleNextPost = () => {
    setPost((currentPost) => {
      const [nextPost, ...updatePost] = currentPost;
      return [...updatePost, nextPost];
    });
  }

  const handlePrevPost = () => {
    setPost((currentPost) => {
      const updatePost = [...currentPost];
      const prevPost = updatePost.pop()!;
      return [prevPost, ...updatePost];
    });
  }

  //Like Function 
  
  const handleLike = (index: number) => {    
    setPost(currentPost  => {
      const postList = [...currentPost];
      const likedStatus = postList[index].liked;
    
      const updatedPost = { ...postList[index], liked: !likedStatus };
      postList[index] = updatedPost;
    
      return [...postList];
    })
  }

  return (
    <Container>
       {post.map((item, index) => 
        <PostCard 
          index={index}
          key={index} 
          item={item}
          onClickLike={() => {handleLike(index)}}
          active={activePost?.includes(index)}
        />  
      )}

      <button className="arrow-left" aria-label="Preview Galery Image" onClick={handlePrevPost}><ArrowLeftIcon /></button>   
      <button className="arrow-right" aria-label="Next Galery Image" onClick={handleNextPost}><ArrowRightIcon /></button>
    </Container>
  )
}