import { FlexCSS, Title } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div``;

export const HomeSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(/HomeBackground.png);
  background-position: center;
  background-size: cover;

  >h1{
    ${Title};
    font-size: var(--5xl);
  }

  .ButtonsContainer{
    ${FlexCSS};
  }
`;