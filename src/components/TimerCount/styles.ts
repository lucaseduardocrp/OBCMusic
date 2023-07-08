import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`
  padding-top: 3rem;
  ${FlexCSS}
  gap: 13.1rem;
  flex-wrap: wrap;

  span{
    font-family: ${({theme}) => theme.fonts.headlines};
    font-weight: 900;
    -webkit-text-stroke: 0.1rem;
    -webkit-text-stroke-color: #acacac;
    font-size: var(--timer-size);
    color: transparent;
    opacity: 0.6;
    display: inline-block;
    min-width: 27rem;
  }

  @media (max-width: 90rem) {
    gap: 6rem;

    span{
      min-width: 10rem;
    }
  }
  
  @media (max-width: 48rem) {
    gap: 2rem;

    span{
      min-width: 6rem;
    }
  }
`;