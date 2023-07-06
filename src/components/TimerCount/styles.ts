import { styled } from "styled-components";

export const Container = styled.div`
  padding-top: 3rem;

  span{
    @font-face {
      font-family: timerFont;
      src: url(/fonts/Timerstyledfont-Regular.otf);
    }
    font-family: timerFont;
    font-size: var(--timer-size);
    color: #acacac;
    opacity: 0.6;
  }
`;