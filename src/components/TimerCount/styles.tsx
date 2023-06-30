import { styled } from "styled-components";

export const Container = styled.div`
  padding-top: 4rem;

  span{
    @font-face {
      font-family: timerFont;
      src: url(/Timerstyledfont-Regular.otf);
    }
    font-family: timerFont;
    font-size: var(--timer-size);
    -webkit-text-stroke-color: #acacac;
    -webkit-text-stroke-width: 0.1rem;    
  }
`;