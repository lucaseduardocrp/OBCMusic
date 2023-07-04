import { Title } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 57rem;

  h3{
    ${Title}
    font-size: var(--2xl);
    font-weight: 800;
    color: ${({theme}) => theme.colors.dark};
    padding-bottom: 4rem;
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 3rem;

    input{
      height: 5rem;
      background: transparent;
      color: ${({theme}) => theme.colors.white};
      border: none;
      border-bottom: 0.1rem solid ${({theme}) => theme.colors.gray100};
      padding-bottom: 2rem;
      
      &:focus{
        outline: 0;
      }
    }
  }
`;