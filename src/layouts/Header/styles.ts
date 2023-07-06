import { FlexCSS } from './../../styles/Mixins';
import { css, styled } from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  z-index: 1000;
  
  .active{
    padding: 1rem 20%;
    background: ${({theme}) => theme.colors.gray};
    border-bottom: 0.1rem solid #565656;
  }
  
  
  nav{
    ${FlexCSS};
    justify-content: space-between;
    padding: 2.2rem 20%;
    position: relative;
    transition: all .25s ease;
    
    .Navlinks{
      ${FlexCSS};
      gap: 4rem;
      text-transform: uppercase;
    }
    
    
    li{
      &:last-child a {
        color: ${({theme}) => theme.colors.black};
      }
      
      a{
        ${({ theme }) => css`
          font-family: ${theme.fonts.headlines};
          font-size: var(--sm);
          font-weight: 600;
          color: ${({theme}) => theme.colors.white};
          transition: all .40s ease;
          
          &:hover{
            color: ${({theme}) => theme.colors.primary}
          }
        `}
      }
    }
  }
  
  @media (max-width: 90rem) {
    .active{
      padding: 2rem 4%;
    }

    nav{
      padding: 3.2rem 4%;
    }
  }

  @media (max-width: 64rem) {
    nav{
      .Navlinks{
        position: absolute;
        width: 100%;
        flex-direction: column;
        align-items: start;
        top: 7rem;
        left: 0;
        padding: 2.5rem;
        backdrop-filter: blur(1rem); 
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