import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`

`;

export const Mensager = styled.div`
  width: 77rem;
  height: 23rem;
  ${FlexCSS}
  background: ${({theme}) => theme.colors.blackOpacity};
  padding: 3rem;
  width: 70rem;
  position: relative;

  .quoteOpen, .quoteClose{
    position: absolute;
  }

  .quoteOpen{
    top: 3rem;
    left: 3rem;
  }
  .quoteClose{
    bottom: 3rem;
    right: 3rem;
  }
`;