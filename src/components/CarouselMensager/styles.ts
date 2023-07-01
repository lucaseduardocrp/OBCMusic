import { styled } from "styled-components";

export const Container = styled.div`

`;

export const Mensager = styled.div`
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
`;