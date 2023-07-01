import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps {
  children: ReactNode,
  href: string,
  background: 'Red' | 'Black' | 'Transparent' | 'White',
  color?: 'White',
  
}

export default function Button({href, children, background, color}: ButtonProps) {
  return (
    <Container background={background} color={color} href={href}>
      {children}
    </Container>
  )
}