import { FlexCSS } from "@/styles/Mixins";
import { css, styled } from "styled-components";

type Props = { 
  bordertop: 'Black' | '',
  emphasis: boolean,
}

export const Container = styled.div`
  ${FlexCSS}
  gap: 3rem;

@media (max-width: 90rem){
  flex-wrap: wrap;
}
`;

export const CardContainer = styled.div<Props>`
  ${({theme, bordertop, emphasis}) => css`
    ${FlexCSS}
    flex-direction: column;
    gap: 3rem;
    padding: 3rem;
    width: 37rem;
    height: 40rem;
    text-align: center;
    background: ${theme.colors.white};
    border-radius: 2rem;
    border-top: 0.5rem solid ${bordertop === 'Black' ? theme.colors.black : theme.colors.primary};
  
    .text-container{
      h1, h3{
        font-size: var(--2xl);
        font-family: ${theme.fonts.headlines};
        font-weight: 800;
        color: ${emphasis === true && theme.colors.primary};
      }
      
      h1{
        font-size: var(--4xl);
        margin-top: 1.5rem;
      }
    }

    ul li p{
      color: ${emphasis === true ? theme.colors.primary : theme.colors.black};
      margin-bottom: 1.5rem;
    }
  `}

@media (max-width: 90rem){
    width: 34rem;
}
`;