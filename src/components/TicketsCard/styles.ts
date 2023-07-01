import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`
  ${FlexCSS}
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;
  width: 37rem;
  text-align: center;

  background: ${({theme}) => theme.colors.white};
  border-radius: 2rem;

  .text-container{
    h1, h3{
      font-size: var(--2xl);
      font-family: ${({theme}) => theme.fonts.headlines};
      font-weight: 800;
    }
    
    h1{
      font-size: var(--4xl);
      margin-top: 1.5rem;
    }
  }

  ul li{
    margin-bottom: 1.5rem;

    p{
      color: ${({theme}) => theme.colors.black};
    }
  }
`;