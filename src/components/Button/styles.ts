import { ButtonText, FlexCSS } from "@/styles/Mixins";
import { css } from "styled-components";
import { styled } from "styled-components";

type ContainerProps = {
  background?: 'Red' | 'Black' | 'Transparent' | 'White',
}

export const Container = styled.a<ContainerProps>`
  ${({ theme, background, color }) => css`
    ${FlexCSS};
    gap: 1.2rem;
    padding: 1.8rem 3.4rem;
    border-radius: 0.8rem;
  
    ${ButtonText};

    background-color: ${
      background === 'Red' ? theme.colors.primary : 
      background === 'Black' ? theme.colors.dark : 
      background === 'Transparent' ? 'transparent' : theme.colors.white
    };
    
    color: ${color === 'White' ? theme.colors.white : theme.colors.dark};

    transition: all .30s ease;

    &:hover{
      opacity: 80%;
      transform: scale(0.98);
    }
  `}
`;
