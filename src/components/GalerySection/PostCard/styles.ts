import { FlexCSS, Paragraph } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 37rem;
  opacity: 0.5;

  img{
    margin-bottom: 4rem;
  }

  p{
    margin-bottom: 0.8rem;
  }

  span{
    ${Paragraph}
    color: ${({theme}) => theme.colors.gray100};
    opacity: 0.7;
  }

  @media (max-width: 64rem) {
    opacity: 1;
  }
`;

export const IconContainer = styled.div`
  ${FlexCSS}
  justify-content: start;
  gap: 4rem;
  margin-bottom: 0.8rem;

  .feedback{
    ${FlexCSS}
    gap: 1rem;

    h5{
      font-size: var(--base);
      color: ${({theme}) => theme.colors.textColor};
    }
  }
`;