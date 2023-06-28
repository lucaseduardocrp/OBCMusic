import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components";

type ContainerProps = {
  background?: 'Red' | 'Black' | 'White',
}

export const Container = styled.a<ContainerProps>`
  ${FlexCSS};
  gap: 1.2rem;
  padding: 1.8rem 3.4rem;
  border-radius: 0.8rem;

  background-color: ${({ theme, background }) => background === 'Red' ? theme.colors.primary : background === 'Black' ? theme.colors.dark : theme.colors.white};
  color: ${({ theme, color }) => color === 'White' ? theme.colors.white : theme.colors.dark};

  transition: all .30s ease;

  &:hover{
    opacity: 85%;
    transform: scale(0.98);
  }
`;
