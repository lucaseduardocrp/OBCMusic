import { FlexCSS, Paragraph, Title } from "@/styles/Mixins";
import { styled } from "styled-components";

export const HomeSection = styled.section`
  ${FlexCSS}
  height: 100vh;
  flex-direction: column;
  padding: 0 0 14rem;
  gap: 6rem;
  text-align: center;
  background: linear-gradient(180deg, transparent 100%, black 100%), url(/HomeBackground.webp);
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;

  .home-text{
    ${FlexCSS}
    flex-direction: column;
    gap: 4rem;
    padding: 28rem 20% 0;

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
    gap: 2rem;
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

export const LightShow = styled.div`
  width: 100%;
  height: 100%;

  &::before, &::after{
    content: '';
    position: absolute;
    bottom: 0;
    right: 100rem;
    width: 4rem;
    height: 100%;
    background: linear-gradient(rgba(82, 116, 168, 0.5), rgba(82, 116, 168, 0.2), rgba(82, 116, 168, 0));
    z-index: 100;
    animation: light-motion 4s infinite;
  }

  &::before{
    
  }

  @keyframes light-motion {
   0%, 100%{
    transform: rotate(45deg);
   } 
  }
`;