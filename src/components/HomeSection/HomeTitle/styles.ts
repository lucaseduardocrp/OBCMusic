import { FlexCSS, Title } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`
  ${FlexCSS}
  flex-direction: column;

  b{
    color: ${({theme}) => theme.colors.primary};
  }

  h1, span{
    ${Title};
    padding-bottom: 0;
    font-size: var(--5xl);
    position: relative;
    z-index: 5;

    &::before, &::after{
      content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      top: 0;
    }

    &::before{
      left: 0;
      text-shadow: -0.2rem 0 0.2rem ${({theme}) => theme.colors.primary};
      animation: glitch-1 2s infinite reverse;
      z-index: -1;
    }
    
    &::after{
      left: 0;
      text-shadow: -0.2rem 0 0.2rem cyan;
      animation: glitch-2 5s linear infinite reverse;
      z-index: -2;
    }
  }

  span{
    &::before, &::after{
      color: ${({theme}) => theme.colors.primary};
    }
  }

@keyframes glitch-1{
  0% {
    clip: rect(13.2rem, auto, 10.1rem, 3rem);
  }
  5% {
    clip: rect(1.7rem, auto, 9.4rem, 3rem);
  }
  10% {
    clip: rect(4rem, auto, 6.6rem, 3rem);
  }
  15% {
    clip: rect(8.7rem, auto, 8.2rem, 3rem);
  }
  20% {
    clip: rect(13.7rem, auto, 6.1rem, 3rem);
  }
  25% {
    clip: rect(3.4rem, auto, 1.4rem, 3rem);
  }
  30% {
    clip: rect(13.3rem, auto, 7.4rem, 3rem);
  }
  35% {
    clip: rect(7.6rem, auto, 10.7rem, 3rem);
  }
  40% {
    clip: rect(5.9rem, auto, 13rem, 3rem);
  }
  45% {
    clip: rect(2.9rem, auto, 8.4rem, 3rem);
  }
  50% {
    clip: rect(2.2rem, auto, 6.7rem, 3rem);
  }
  55% {
    clip: rect(6.7rem, auto, 6.2rem, 3rem);
  }
  60% {
    clip: rect(1rem, auto, 10.5rem, 3rem);
  }
  65% {
    clip: rect(7.8rem, auto, 11.5rem, 3rem);
  }
  70% {
    clip: rect(10.5rem, auto, 1.3rem, 3rem);
  }
  75% {
    clip: rect(1.5rem, auto, 7.5rem, 3rem);
  }
  80% {
    clip: rect(6.6rem, auto, 3.9rem, 3rem);
  }
  85% {
    clip: rect(13.3rem, auto, 7.3rem, 3rem);
  }
  90% {
    clip: rect(3.6rem, auto, 12.8rem, 3rem);
  }
  95% {
    clip: rect(6.8rem, auto, 10.3rem, 3rem);
  }
  100% {
    clip: rect(1.4rem, auto, 10rem, 3rem);
  }
}

@keyframes glitch-2 {
  0% {
    clip: rect(12.9rem, auto, 3.6rem, 3rem);
  }
  5% {
    clip: rect(3.6rem, auto, 0.4rem, 3rem);
  }
  10% {
    clip: rect(8.5rem, auto, 6.6rem, 3rem);
  }
  15% {
    clip: rect(9.1rem, auto, 9.1rem, 3rem);
  }
  20% {
    clip: rect(14.8rem, auto, 13.8rem, 3rem);
  }
  25% {
    clip: rect(3.8rem, auto, 12.2rem, 3rem);
  }
  30% {
    clip: rect(6.9rem, auto, 5.4rem, 3rem);
  }
  35% {
    clip: rect(9.8rem, auto, 7.1rem, 3rem);
  }
  40% {
    clip: rect(14.6rem, auto, 3.4rem, 3rem);
  }
  45% {
    clip: rect(13.4rem, auto, 4.3rem, 3rem);
  }
  50% {
    clip: rect(10.2rem, auto, 8rem, 3rem);
  }
  55% {
    clip: rect(11.9rem, auto, 4.4rem, 3rem);
  }
  60% {
    clip: rect(10.6rem, auto, 9.9rem, 3rem);
  }
  65% {
    clip: rect(14.1rem, auto, 7.4rem, 3rem);
  }
  70% {
    clip: rect(2rem, auto, 7.8rem, 3rem);
  }
  75% {
    clip: rect(13.3rem, auto, 7.9rem, 3rem);
  }
  80% {
    clip: rect(7.8rem, auto, 5.2rem, 3rem);
  }
  85% {
    clip: rect(3.5rem, auto, 3.9rem, 3rem);
  }
  90% {
    clip: rect(6.7rem, auto, 7rem, 3rem);
  }
  95% {
    clip: rect(7.1rem, auto, 10.3rem, 3rem);
  }
  100% {
    clip: rect(8.3rem, auto, 4rem, 3rem);
  }
}
`;

