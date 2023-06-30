import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`
  padding-top: 4rem;

  span{
    @font-face {
      font-family: timerFont;
      src: url(./fonts/TimerStyledFont.ttf);
    }
    font-family: timerFont;
    font-size: var(--timer-size);
    font-weight: 900;
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 0.1rem;    
  }
`;