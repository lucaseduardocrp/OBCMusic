import { styled } from "styled-components";

export const Container = styled.div`
  min-width: 53rem;
  min-height: 55rem;
  position: relative;
  animation: floating 3s infinite;
  
  &:hover{
    .imageTwo{
      transition: all 1s ease-in-out;
      z-index: 10;
      opacity: 1;
    }
    .imageOne{
      transition: all 1s ease-in-out;
      opacity: 0.3;
    }
  }
  
  .imageOne, .imageTwo{
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
  }

  .imageTwo{
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.3;

    &::before{
      content: '';
      position: absolute;
      top: -1rem;
      left: -1rem;
      filter: blur(2rem);
      opacity: 0.2;
      background: #798fba;
      width: 80%;
      height: 80%;
      z-index: -1;
      animation: change 3s infinite;
    }
  }

  @keyframes change {
    0%, 100%{
      opacity: 1;
    }
    50%{
      opacity: 0.5;
    }
  }

  @keyframes floating {
    0%, 100%{
      transform: translateY(0.6rem);
    }
    50%{
      transform: translateY(-0.6rem);
    }
  }

  @media (max-width: 48rem) {
    min-width: 32rem;
    min-height: 34rem;

    .imageOne, .imageTwo{
      img{
        width: 28rem;
        height: 30rem;
      }
    }
  }
`;