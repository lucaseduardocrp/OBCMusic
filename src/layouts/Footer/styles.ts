import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components"

export const Container = styled.footer`
  ${FlexCSS}
  justify-content: space-between;
  padding: 2.2rem 20%;
  background: ${({theme}) => theme.colors.dark};

  p{
    opacity: 0.5;
  }

  @media (max-width: 90rem){
    padding: 2.2rem 4%;
  }

  @media (max-width: 48rem){
    flex-direction: column;
    gap: 4rem;
  }
`;

export const SocialMedia = styled.div`
  ${FlexCSS}
  gap: 3rem;
`;

export const RightContent = styled.div`
  ${FlexCSS}
  gap: 9.4rem;

  @media (max-width: 48rem){
    flex-direction: column;
    gap: 4rem;
  }
`;
