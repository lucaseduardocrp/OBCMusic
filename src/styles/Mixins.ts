import { css } from "styled-components";

export const FlexCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = css`
  font-size: 3.4rem;
  font-weight: 700;
  font-family: ${({theme}) => theme.fonts.headlines};
  line-height: 1.3;
`;

export const ButtonText = css`
  font-size: 1.6rem;
  font-weight: 700;
  font-family: ${({theme}) => theme.fonts.headlines};
`;