import { FlexCSS, Paragraph, Title } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div``;

export const HomeSection = styled.section`
  ${FlexCSS}
  flex-direction: column;
  gap: 4rem;
  height: 100vh;
  padding-top: 0;
  text-align: center;
  background: linear-gradient(180deg, transparent 100%, black 100%), url(/HomeBackground.png);
  background-position: center;
  background-size: cover;

  >h1{
    ${Title};
    font-size: var(--5xl);
  }
  >p{
    ${Paragraph};
    font-size: var(--2xl);
    padding: 0 10rem;
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
  
  @media (max-width: 26.563rem) {
    padding-top: 8rem;

    .ButtonsContainer{
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export const TimerContainer = styled.div`
  height: 40vh;
  background: linear-gradient(180deg, black 100%, black 100%);
`;