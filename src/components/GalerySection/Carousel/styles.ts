import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`
${FlexCSS}
  align-items: start;
  gap: 3rem;
  width: 100%;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  .active{
    opacity: 1;
  }

  &::-webkit-scrollbar-thumb{
    background: ${({theme}) => theme.colors.gray};
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
  .arrow-left, .arrow-right{
    top: 50%;
  }
  .arrow-left{
    left: 1rem;
  }
  .arrow-right{
    right: 1rem;
  }

  button{
    width: 3.6rem;
    height: 3.6rem;
  }
}
`;
