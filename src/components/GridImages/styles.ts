import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div``;

export const PhotoGrid = styled.div`
`;

export const Grid = styled.div`
  ${FlexCSS}
  align-items: start;
  gap: 3rem;
  flex-wrap: wrap;

  .imageOne, .imageTwo, .imageThree, .imageFour{
    position: relative;
    z-index: 2;

    &::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: url('/grid-images/ImgBlur.png');
      bottom: -3rem;
      z-index: -1;
      animation: flasher 2s infinite;
    }

    @keyframes flasher {
      0%, 100% {
        opacity: 1;
        filter: blur(1rem);
        transform: t;
      }
      50% {
        opacity: 0;
      }
    }
  }

  .imageOne{
    margin-bottom: 3rem;
  }

  .imageTwo{
    margin-top: -5rem;
  
    &::before{
      background: url('/grid-images/ImgBlur2.png');
    }
  }
  
  .imageThree{
    margin-top: 2rem; 
  
    &::before{
      background: url('/grid-images/ImgBlur3.png');
    }
  }

  .imageFour::before{
    background: url('/grid-images/ImgBlur4.png');
  }
  
  @media (max-width: 48rem) {
    .imageOne, .imageFour{
      img{
        width: 23.3rem;
        height: 17rem;
      }
    }
    .imageTwo, .imageThree{
      img{
        width: 18rem;
        height: 20rem;
      }
    }
  }
`;