import { FlexCSS } from './../../styles/Mixins';
import { css, styled } from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  height: 9.8rem;
  padding: 3.2rem 20%;
  background-color: transparent;

  nav{
    ${FlexCSS};
    justify-content: space-between;
  }
`;

export const Navlinks = styled.ul`
  ${FlexCSS};
  gap: 4rem;

  a{
   ${({ theme }) => css`
      font-family: ${theme.fonts.headlines};
      font-size: ${theme.sizes.sm};
      font-weight: 600;
      text-transform: uppercase;
    `}
  }
`;