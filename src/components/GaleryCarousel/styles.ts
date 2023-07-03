import { FlexCSS, Paragraph } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 37rem;

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

export const Carousel = styled.div`

.carousel-container{
  ${FlexCSS}
  align-items: start;
  gap: 3rem;
}

.buttons-container{
  ${FlexCSS}
  justify-content: space-between;

  .arrow-left, .arrow-right{
    position: absolute;
  }
  .arrow-right{
    right: 15.7rem;
  }
  
  button{
    ${FlexCSS}
    background: ${({theme}) => theme.colors.white};
    width: 5.6rem;
    height: 5.6rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
}
`;