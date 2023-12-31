import { css } from "styled-components";

export const FlexCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = css`
  ${({ theme }) => css`
    font-size: var(--3xl);
    font-weight: 700;
    font-family: ${theme.fonts.headlines};
    color: ${theme.colors.white};
    line-height: 1.3;
    padding-bottom: 6rem;
  `}
`;

export const Paragraph = css`
  ${({ theme }) => css`
    font-size: var(--base);
    font-weight: 500;
    font-family: ${theme.fonts.text};
    color: ${theme.colors.paragraph};
    line-height: 1.6;
  `}
`;


export const ButtonText = css`
  font-size: var(--base);
  font-weight: 700;
  font-family: ${({theme}) => theme.fonts.headlines};
`;