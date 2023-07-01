import { FlexCSS, Paragraph } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  border: 0.1rem solid ${({theme}) => theme.colors.gray100};
  border-radius: 2.4rem;

  .content{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    padding: 4rem;
    gap: 3rem;

    p{
      font-size: var(--2xl);
      font-weight: 700;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  padding: 4rem;
  gap: 3rem;

  &:nth-child(even){
    border-top: 0.1rem solid ${({theme}) => theme.colors.gray100};
    border-bottom: 0.1rem solid ${({theme}) => theme.colors.gray100};
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
          color: ${({theme}) => theme.colors.gray100};
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

  @media (max-width: 64rem) {
    grid-template-rows: auto;
  }
`;