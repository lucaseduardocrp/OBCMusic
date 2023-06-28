import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
`;

export default GlobalStyles;