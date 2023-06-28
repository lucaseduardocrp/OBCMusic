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
    --5xl: 6rem;
  }
  s
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
    section{
      padding: 3.2rem 4%;
    }
  }
`;


export default GlobalStyles;