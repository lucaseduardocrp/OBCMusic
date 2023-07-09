import { ButtonText, Paragraph, Title } from "@/styles/Mixins";
import { css, styled } from "styled-components";

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
    ${({ theme}) => css`
      display: flex;
      flex-direction: column;

      label{
        ${Paragraph}
        font-weight: 700;
        opacity: 0.5;
      }

      input{
        font-size: var(--base);
        background: transparent;
        color: ${({theme}) => theme.colors.white};
        border: none;
        border-bottom: 0.1rem solid ${({theme}) => theme.colors.gray100};
        padding: 1rem 0;
        margin-bottom: 3rem;
        transition: all .30s ease;
  
        &:focus{
          outline: 0;
          border-color: ${({theme}) => theme.colors.primary};
        }
      }

      .submitBtn{
        padding: 1.8rem 3.4rem;
        border-radius: 0.8rem;
        ${ButtonText};
        position: relative;
        background-color: ${theme.colors.primary};
        border: none;
        color: ${theme.colors.white};
        transition: all .30s ease;
        margin-top: 1rem;

        &:disabled{
          cursor: wait;
          opacity: 0.6;
        }

        &:hover{
          box-shadow: 0 0 1rem ${theme.colors.primary};
        }
      }
    `}
  }
`;