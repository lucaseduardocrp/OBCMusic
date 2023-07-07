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

    &::before, &::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: -3rem;
      right: -1.4rem;
      opacity: 0.3;
      z-index: -1;
      filter: blur(1.6rem);
      background: linear-gradient(-45deg, #7C2626 60%, #242424 40%, #c23d3d 100%);
    }
    &::after{
      top: -1.4rem;
      left: -1.4rem;
      border-radius: 25%;
      background: linear-gradient(-45deg, #7C2626 40%, #242424 40%, #c23d3d 100%);
      animation: flasher 3s infinite;
      opacity: 0.5;
    }

    @keyframes flasher {
      0%, 100% {
        opacity: 0.6;
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
      background: linear-gradient(145deg, #ff00c3 40%, #00f2ff 100%, #a400c3 30%);
    }
    &::after{
      background: linear-gradient(-45deg, #ff00c3 40%, #00f2ff 100%, #a400c3 30%);
    }
  }
  
  .imageThree{
    margin-top: 2rem; 
  
    &::before{
      background: linear-gradient(145deg, #393955 65%, #c23d3d 100%, #393955 40%)
    }
    &::after{
      background: linear-gradient(-45deg, #393955 65%, #c23d3d 100%, #393955 40%);
    }
  }

  .imageFour{
    &::before{
      background: linear-gradient(135deg, #EDEDA4 60%, #008080 90%, #EDEDA4 30%);
    }
    &::after{
      background: linear-gradient(-35deg, #EDEDA4 60%, #008080 90%, #EDEDA4 30%);
    }
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