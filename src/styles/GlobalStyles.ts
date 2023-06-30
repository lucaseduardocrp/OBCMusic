import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --xs: 1.2rem;
    --sm: 1.4rem;
    --base: 1.6rem;
    --lg: 1.8rem;
    --xl: 2rem;
    --2xl: 2.4rem;
    --3xl: 3.4rem;
    --4xl: 4.8rem;
    --5xl: 6.8rem;
    --timer-size: 14rem;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  
  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fonts.text };
  }
  
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  section{
    width: 100%;
    height: 100%;
    padding: 6rem 20%;
  }

  b{
    color: ${({theme}) => theme.colors.primary};
  }

  @media (max-width: 90rem) {
    :root{
      --5xl: 6.2rem;
      --timer-size: 12rem;
    }
    
    section{
      padding: 3.2rem 4%;
    }
  }

  @media (max-width: 64rem) {
    :root{
      --2xl: 2rem;
      --5xl: 5rem;
      --timer-size: 5rem;
    }
  }

  @media (max-width: 26.563rem) {
    :root{
      --2xl: 1.6rem;
      --5xl: 4.2rem;
      --timer-size: 3rem;
    }
  }
`;


export default GlobalStyles;