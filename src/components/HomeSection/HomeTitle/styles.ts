import { FlexCSS, Title } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`
  ${FlexCSS}
  flex-direction: column;

  h1, span{
    ${Title};
    padding-bottom: 0;
    font-size: var(--5xl);
    position: relative;
    z-index: 10;

    &::before, &::after{
      content: 'A Sua Melhor Experiência';
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    &:hover::before{
      animation: glitch 0.3s linear 6;
      color: #e91e63;
      z-index: -2;
    }

    &:hover::after{
      animation: glitch 0.3s linear 6;
      color: #2196f3;
      z-index: -1;
    }
  }

span{
  &::before, &::after{
    content: 'Musical Digital';
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: ${({theme}) => theme.colors.primary};
    z-index: 1;
  }

  &:hover::before{
    animation: glitch 0.3s linear 6;
    color: #e91e63;
    z-index: -2;
  }

  &:hover::after{
    animation: glitch 0.3s linear 6;
    color: #2196f3;
    z-index: -1;
  }

  &:hover{
    color: ${({theme}) => theme.colors.primary};
  }
}

  @keyframes glitch {
    0%, 100%{
      top: 0;
      left: 0;
    }
    20%{
      top: 0;
      left: 0;
    }
    40%{
      top: 0.3rem;
      left: 0.3rem;
    }
    60%{
      top: -0.3rem;
      left: 0.3rem;
    }
    80%{
      top: 0.3rem;
      left: -0.3rem;
    }
  }
`;

export const Container2 = styled.div`
  ${FlexCSS}
  flex-direction: column;
  width: 100%;
  height: 100%;

  b{
    color: ${({theme}) => theme.colors.primary};
  }

  h1, span{
    ${Title};
    padding-bottom: 0;
    font-size: var(--5xl);
    position: relative;

    &::before, &::after{
      color: transparent;
      content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent;
      top: 0;
      left: 0;
      z-index: 10;
    }

    &::before{
      text-shadow: -0.2rem 0 0.3rem red;
      animation: glitch-1 2s infinite reverse;
      z-index: -1;
    }
    
    &::after{
      text-shadow: -0.2rem 0 0.3rem cyan;
      animation: glitch-2 2s linear infinite reverse;
      z-index: -2;
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

