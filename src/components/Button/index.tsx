import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps {
  children: ReactNode,
  href: string,
  background: 'Red' | 'Black' | 'Transparent' | 'White' | undefined,
  color?: 'Red' | 'White' | undefined,
  border?: 'Red' | 'Black' | undefined,
}

export default function Button({href, children, background, color, border}: ButtonProps) {
  return (
    <Container background={background} color={color} border={border} href={href}>
      {children}
    </Container>
  )
};