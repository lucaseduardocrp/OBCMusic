import { styled } from "styled-components";

export const Container = styled.section`
  background: url(/GaleryBG.svg);
  background-repeat: no-repeat;
  background-color: ${({theme}) => theme.colors.gray};
  padding: 10rem 0 0;
  position: relative;

  h2{
    padding: 6rem 20%;
  }

  @media (max-width: 48rem){
    h2{
      padding: 0 4% 6rem;
    }
  }
`;