import { FlexCSS, Paragraph, Title } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div`
  text-align: center;

  .people-reports{
    margin-top: -0.5rem;

    h4{
      ${Title}
      font-size: var(--xl);
      padding-bottom: 0.2rem;
    }
    span{
      ${Paragraph}
      opacity: 70%;
    }
  }
`;

export const Mensager = styled.div`
  ${FlexCSS}
  background: ${({theme}) => theme.colors.blackOpacity};
  padding: 6rem;
  width: 70rem;
  position: relative;

  .quoteOpen, .quoteClose{
    position: absolute;
  }

  .quoteOpen{
    top: 3rem;
    left: 3rem;
  }
  .quoteClose{
    bottom: 3rem;
    right: 3rem;
  }

  @media (max-width: 48rem){
    width: 34rem;
    padding: 2rem;

  .quoteOpen{
    top: 1rem;
    left: 1rem;
  }
  .quoteClose{
    bottom: 1rem;
    right: 1rem;
  }
  }
`;

export const Text = styled.p`
  opacity: 70%;
`;