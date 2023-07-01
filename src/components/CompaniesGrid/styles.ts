import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  place-items: center;
  gap: 6rem;
  margin-bottom: 8rem;

  @media (max-width: 64rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 26.563rem) {
   grid-template-columns: 1fr;
  }
`;