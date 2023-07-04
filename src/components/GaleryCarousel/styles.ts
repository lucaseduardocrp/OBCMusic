import { FlexCSS, Paragraph } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Carousel = styled.div`
  ${FlexCSS}
  align-items: start;
  justify-content: start;
  gap: 3rem;
  width: 100%;
  overflow: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar{
    width: 0;
  }

.buttons-container{
  ${FlexCSS}
  justify-content: space-between;

  .arrow-left, .arrow-right{
    position: absolute;
    top: 46%;
  }
  .arrow-left{
    left: 11rem;
  }
  .arrow-right{
    right: 11rem;
  }
  
  button{
    ${FlexCSS}
    background: ${({theme}) => theme.colors.white};
    width: 5.6rem;
    height: 5.6rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    &:hover{
      opacity: 0.8;
    }
  }
}

@media (max-width: 64rem){
  .buttons-container button{
    display: none;
  }
}
`;

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
    cursor: pointer;

    h5{
      font-size: var(--base);
      color: ${({theme}) => theme.colors.textColor};
    }
  }
`;
