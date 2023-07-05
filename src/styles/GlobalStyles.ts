import { createGlobalStyle } from "styled-components";
import { Paragraph, Title } from "./Mixins";

const GlobalStyles = createGlobalStyle`
  :root{
    --xs: 1.2rem;
    --sm: 1.4rem;
    --base: 1.6rem;
    --lg: 1.8rem;
    --xl: 2rem;
    --2xl: 2.4rem;
    --3xl: 3.4rem;
    --4xl: 6rem;
    --5xl: 7.2rem;
    --timer-size: 18rem;
  }

  ::-webkit-scrollbar{
      width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb{
      background: ${({theme}) => theme.colors.dark};
      border-radius: 3rem;
  }
  ::-webkit-scrollbar-track{
      background: ${({theme}) => theme.colors.gray};
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
    font-family: ${({ theme }) => theme.fonts.headlines};
  }
  
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  section{
    width: 100%;
    height: 100%;
    padding: 10rem 20%;
    background-color: ${({theme}) => theme.colors.gray};
  }

  h2{
    ${Title}
  }

  p{
    ${Paragraph}
  }

  b{
    color: ${({theme}) => theme.colors.primary};
  }

  @media (max-width: 90rem) {
    :root{
      --5xl: 6.2rem;
      --timer-size: 14rem;
    }
    
    section{
      padding: 3.2rem 4%;
    }
  }

  @media (max-width: 64rem) {
    :root{
      --2xl: 2rem;
      --5xl: 5rem;
      --timer-size: 6rem;
    }
  }

  @media (max-width: 26.563rem) {
    :root{
      --2xl: 1.6rem;
      --5xl: 4.2rem;
      --timer-size: 4rem;
    }
  }
`;


export default GlobalStyles;