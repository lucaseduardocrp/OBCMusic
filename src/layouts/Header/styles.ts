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

    .Navlinks{
      ${FlexCSS};
      gap: 4rem;
      text-transform: uppercase;
    }
    
    a{
      ${({ theme }) => css`
        font-family: ${theme.fonts.headlines};
        font-size: ${theme.sizes.sm};
        font-weight: 600;
      `}
    }
    
    li > a{
      color: ${({theme}) => theme.colors.white};
      transition: all .30s ease;

      &:hover{
        color: ${({theme}) => theme.colors.primary}
      }
    }
  }
  
  @media (max-width: 90rem) {
    padding: 3.2rem 4%;
  }

  @media (max-width: 64rem) {
    nav{
      .Navlinks{
        position: absolute;
        width: 100%;
        flex-direction: column;
        align-items: start;
        top: 8rem;
        left: 0;
        padding: 2.5rem;
        backdrop-filter: blur(10px);
      }
      .Close{
        display: none;
      }
    }
  }
`;

//-----------------------------------

export const MobileMenu = styled.div`
  display: none;


  @media (max-width: 64rem) {
    display: block;
  }
`;