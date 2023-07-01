import { FlexCSS, Paragraph, Title } from "@/styles/Mixins";
import { styled } from "styled-components";

export const FlexContainer = styled.div`
  ${FlexCSS}
  justify-content: center;
  gap: 3rem;

  .active{
    opacity: 1;
    margin-top: 0;
  }

.card-left {
  transform: translateX(-125%) scale(0.8);
}

.card-right {
  transform: translateX(125%) scale(0.8);
}
`;

export const Container = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0rem;
  opacity: 40%;
  margin-top: 2.6rem;
  transition: 500ms;

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
  height: 23rem;
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