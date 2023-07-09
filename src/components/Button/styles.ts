import { ButtonText, FlexCSS } from "@/styles/Mixins";
import { css } from "styled-components";
import { styled } from "styled-components";

type ContainerProps = {
  background?: 'Red' | 'Black' | 'Transparent' | 'White' | '',
  border?: 'Red' | 'Black',
}

export const Container = styled.a<ContainerProps>`
  ${({ theme, background, color, border }) => css`
    ${FlexCSS}
    position: relative;
    display: inline-flex;
    gap: 1.2rem;
    padding: 1.8rem 3.4rem;
    border-radius: 0.8rem;
    ${ButtonText};
    background-color: ${`
      ${
        background === 'Red' ? theme.colors.primary : 
        background === 'Black' ? theme.colors.dark : 
        background === 'White' ? theme.colors.white :
        background === '' && 'transparent'
      }`  
    };
    color: ${
      color === 'White' ? theme.colors.white : 
      color === 'Red' ? theme.colors.primary : 
      color === 'Alternative' ? theme.colors.white :
      color === '' ? theme.colors.white : theme.colors.dark
    };
    border: 0.1rem solid ${border === 'Black' ? `${theme.colors.black}` : border === 'Red' ? `${theme.colors.primary}` : 'transparent'};
    transition: all .30s ease;

    &:hover {
      color: ${`
        ${
          color === 'Black' ? theme.colors.white : 
          color === 'Red' ? theme.colors.white : 
          color === 'White' ? theme.colors.black : 
          color === 'Alternative' ? theme.colors.white :
          color === '' ? theme.colors.white : ''
        } !important`
      };
      background: ${
        background === 'Black' ? theme.colors.white : 
        background === 'Transparent' ? theme.colors.primary :
        background === 'White' ? theme.colors.dark :
        background === '' && 'transparent'
      };
      box-shadow: ${background === '' ? '' : `-0.55rem 0.55rem ${theme.colors.black}`};
      border-color: ${
        background === '' ? 'none' : 
        background === 'White' ? theme.colors.white : 
        background === 'Black' ? theme.colors.black : ''
      };
      transform: translate(0.25rem,-0.25rem);
    }

    &:active {
      transform: translate(0);
      box-shadow: none;
    }
  `}
`;
