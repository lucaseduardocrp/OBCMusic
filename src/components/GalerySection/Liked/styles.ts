import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`
  ${FlexCSS}
  gap: 1rem;
  cursor: pointer;

  h5{
    font-size: var(--base);
    color: ${({theme}) => theme.colors.textColor};
  }
`;