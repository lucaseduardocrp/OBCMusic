import { FlexCSS, Paragraph, Title } from "@/styles/Mixins";
import { styled } from "styled-components";

export const HomeSection = styled.section`
  ${FlexCSS}
  height: 100vh;
  flex-direction: column;
  padding: 0 0 14rem;
  gap: 4rem;
  text-align: center;
  background: linear-gradient(180deg, transparent 100%, black 100%), url(/HomeBackground.webp);
  background-position: center;
  background-size: cover;

  .home-text{
    ${FlexCSS}
    flex-direction: column;
    gap: 4rem;
    padding: 28rem 20% 0;

    h1{
      ${Title};
      padding-bottom: 0;
      font-size: var(--5xl);
    }

    p{
      ${Paragraph};
      font-size: var(--xl);
      padding: 0 10rem;
    }
  
    .ButtonsContainer{
      ${FlexCSS};
      gap: 4rem;
      margin-bottom: 1rem;
    }
  }
  
  @media (max-width: 90rem) {      
    .home-text{
      padding: 22rem 4% 0; 
    }
  }

  @media (max-width: 64rem) {
    height: 100%;

    .home-text{
      padding: 12rem 4% 0;

      >p{
        padding: 0;
      }
    }
  }
  
  @media (max-width: 26.563rem) {
    padding-top: 2rem;

    .ButtonsContainer{
      flex-direction: column;
      gap: 1rem;
    }
  }
`;