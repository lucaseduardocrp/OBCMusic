import { ButtonText, FlexCSS } from "@/styles/Mixins";
import { css } from "styled-components";
import { styled } from "styled-components";

type ContainerProps = {
  background?: 'Red' | 'Black' | 'Transparent' | 'White',
  border?: 'Red' | 'Black',
}

export const Container = styled.a<ContainerProps>`
  ${({ theme, background, color, border }) => css`
    ${FlexCSS}
    display: inline-flex;
    gap: 1.2rem;
    padding: 1.8rem 3.4rem;
    border-radius: 0.8rem;
    ${ButtonText};
    position: relative;

    background-color: ${
      background === 'Red' ? theme.colors.primary : 
      background === 'Black' ? theme.colors.dark : 
      background === 'Transparent' ? 'transparent' : theme.colors.white
    };

    border: 0.1rem solid ${border === 'Black' ? `${theme.colors.black}` : border === 'Red' ? `${theme.colors.primary}` : 'transparent'};
    
    color: ${color === 'White' ? theme.colors.white : color === 'Red' ? theme.colors.primary : theme.colors.dark};

    transition: all .30s ease;

    &:hover{
    }
  `}
`;
