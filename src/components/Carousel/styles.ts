import { FlexCSS, Paragraph } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`
${FlexCSS}
  align-items: start;
  justify-content: start;
  gap: 3rem;
  width: 100%;
  overflow: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar-thumb{
    background: ${({theme}) => theme.colors.gray};
  }

  .current-item{
    opacity: 1;
  }

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
    width: 5.6rem;
    height: 5.6rem;
    background: ${({theme}) => theme.colors.white};
    border: none;
    border-radius: 50%;
    cursor: pointer;

    &:hover{
      opacity: 0.8;
    }
  }


@media (max-width: 64rem){
  button{
    display: none;
  }
}
`;

export const Post = styled.div`
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