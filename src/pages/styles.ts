import { FlexCSS, Paragraph, Title } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div``;

export const HomeSection = styled.section`
  ${FlexCSS}
  height: 100%;
  flex-direction: column;
  padding-top: 18rem;
  gap: 4rem;
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
    font-size: var(--xl);
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

export const AboutSection = styled.section`
  height: 100vh;
  background: ${({theme}) => theme.colors.gray};
`;