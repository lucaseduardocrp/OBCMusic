import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div``;

export const PhotoGrid = styled.div`
`;

export const Grid = styled.div`
  ${FlexCSS}
  align-items: start;
  gap: 3rem;

  
  .imageOne, .imageTwo, .imageThree, .imageFour{
    position: relative;
    z-index: 2;

    img{
      transition: all .40s ease;

      &:hover{
        transform: scale(1.05);
      }
    }


    &::before, &::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: -2rem;
      right: -1rem;
      opacity: 0.3;
      z-index: -1;
      filter: blur(1.4rem);
      background: linear-gradient(-45deg, #ce0521 60%, #242424 100%, #c23d3d 100%);
    }
    &::after{
      top: -1.6rem;
      left: -1.6rem;
      border-radius: 25%;
      background: linear-gradient(-45deg, #c9594c 90%, #242424 90%, #c23d3d 30%);
      animation: flasher 3s infinite;
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
    animation: floatingOne 3s infinite;

    @keyframes floatingOne {
      0%, 100% {
        transform: translateY(0.6rem);
      }
      50% {
        transform: translateY(-0.6rem);
      }
    }
  }

  .imageTwo{
    margin-top: -5rem;
    animation: floatingOne 3s infinite;
  
    &::before{
      background: linear-gradient(105deg, #ff00c3 10%, #00f2ff 100%, #a400c3 30%);
    }
    &::after{
      background: linear-gradient(-45deg, #ff00c3 40%, #00f2ff 100%, #a400c3 30%);
    }
  }
  
  .imageThree{
    margin-top: 2rem;
    animation: floatingOne 3s infinite; 
  
    &::before{
      background: linear-gradient(105deg, #196a9a 45%, #c23d3d 40%, #000 100%)
    }
    &::after{
      background: linear-gradient(-45deg, #196a9a 35%, #c23d3d 100%, #196a9a 85%);
    }
  }

  .imageFour{
    animation: floatingFour 3s infinite;

    @keyframes floatingFour {
      0%, 100% {
        transform: translateY(0.6rem);
      }
      50% {
        transform: translateY(-0.6rem);
      }
    }

    &::before{
      background: linear-gradient(135deg, #EDEDA4 60%, #008080 90%, #EDEDA4 30%);
    }
    &::after{
      background: linear-gradient(-35deg, #EDEDA4 60%, #008080 90%, #EDEDA4 30%);
    }
  }
  
  @media (max-width: 48rem) {
    flex-wrap: wrap;

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