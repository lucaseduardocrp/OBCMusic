import { FlexCSS, Paragraph } from "@/styles/Mixins";
import { css, styled } from "styled-components";

export const Container = styled.div`
  ${({theme}) => css`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 0.1rem solid ${theme.colors.gray100};
    border-radius: 2.4rem;

    .content{
      display: grid;
      grid-template-columns: 1fr 2fr 1fr 1fr;
      padding: 4rem;
      gap: 3rem;
      border-bottom: 0.1rem solid ${theme.colors.gray100};

      p{
        font-size: var(--2xl);
        font-weight: 700;
      }
    }
  `}
`;

export const Grid = styled.div`
  ${({theme}) => css`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    padding: 4rem;
    gap: 3rem;

    &:nth-child(odd){
      border-top: 0.1rem solid ${theme.colors.gray100};
      border-bottom: 0.1rem solid ${theme.colors.gray100};
    }

    .artist-container .artist-box{
      ${FlexCSS}
      justify-content: start;
      gap: 1rem;
      margin-bottom: 3.2rem;
        
      .artist-info{
        p{
          font-weight: 700;
        }

        span{
          ${Paragraph}
          font-weight: 400;
          color: ${theme.colors.gray100};
        }
      }
    }

    .preview-container{
      ${FlexCSS}
      gap: 0.8rem;

      p{
        font-weight: 700;
      }
    }
  `}

  @media (max-width: 64rem) {
    grid-template-columns: 1fr;
  }
`;