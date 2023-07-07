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

