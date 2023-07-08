import { styled } from "styled-components";

export const Container = styled.div`
  padding-top: 3rem;

  span{
    /* @font-face {
      font-family: timerFont;
      src: url(/fonts/Timerstyledfont-Regular.otf);
    } */
    /* font-family: timerFont; */
    font-family: ${({theme}) => theme.fonts.headlines};
    font-weight: 900;
    -webkit-text-stroke: 0.1rem;
    -webkit-text-stroke-color: #acacac;
    font-size: var(--timer-size);
    color: transparent;
    /* color: #acacac; */
    opacity: 0.6;
  }
`;