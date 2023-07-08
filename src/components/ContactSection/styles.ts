import { FlexCSS, Paragraph } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;

  .left-container{
    max-width: 84.5rem;
    min-height: 66.2rem;
    height: 100%;
    padding: 12rem 8rem;
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 4rem;
    background: ${({theme}) => theme.colors.dark};
    position: relative;

    >img{
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  .right-container{
    padding: 12rem 8rem;
    position: relative;

    >img{
      position: absolute;
      bottom: 0;
      right: 5.6rem;
    }
  }

  @media (max-width: 48rem){
    grid-template-columns: 1fr;

    .left-container, .right-container{
      padding: 8rem 4%;
    }
  }
`;

export const ContactContainer = styled.div`
  ${FlexCSS}
  gap: 0.8rem;

  h5{
    ${Paragraph}
    font-family: ${({theme}) => theme.fonts.headlines};
    font-weight: 700;
  }
`;