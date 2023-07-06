import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.section`
  background: ${({theme}) => theme.colors.gray};

  .about-container{
    ${FlexCSS};
    gap: 7rem;
    overflow: hidden;
    
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
      width: 44rem;
      height: 40rem;
    }
  }
`;