import { FlexCSS, Paragraph, Title } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div``;

export const HomeSection = styled.section`
  ${FlexCSS}
  flex-direction: column;
  gap: 4rem;
  height: 100vh;
  text-align: center;
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(/HomeBackground.png);
  background-position: center;
  background-size: cover;

  >h1{
    ${Title};
    font-size: var(--5xl);
  }
  >p{
    ${Paragraph};
    font-size: var(--2xl);
    padding: 0 8rem;
  }

  .ButtonsContainer{
    ${FlexCSS};
    gap: 4rem;
  }

  @media (max-width: 64rem) {
    >p{
      padding: 0;
    }
  }
`;