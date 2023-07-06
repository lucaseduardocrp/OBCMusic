import { styled } from "styled-components";

export const Container = styled.section`
  text-align: center;
  overflow: hidden;
  position: relative;
  height: 100%;

  @media (max-width: 48rem) {
    height: 100vh;
  }
`;
