import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.section`
  ${FlexCSS}
  flex-direction: column;
  gap: 20rem;
  padding-top: 14rem;
  padding-bottom: 20rem;
  background: ${({theme}) => theme.colors.gray};

  .about-container{
    ${FlexCSS};
    gap: 7rem;

    .text{
      h2{
        padding-bottom: 3.2rem;
      }

      p{
        padding-bottom: 8rem;
      }
    }

    &:nth-child(even){
      flex-direction: row-reverse;
      gap: 4rem;
    }
  }

  @media (max-width: 64rem){
    .about-container{
      flex-wrap: wrap;

      .text{
        padding-bottom: 8rem;

        p{
          padding-bottom: 2rem;
        }
      }
    }
  }

  @media (max-width: 48rem){
    
    .about-container img{
      width: 32rem;
      height: 34rem;
    }
  }
`;