import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps {
  children: ReactNode,
  href: string,
  background: 'Red' | 'Black' | 'Transparent' | 'White',
  color?: 'Red' | 'White' | '',
  border?: 'Red' | 'Black',
  target?: string,
}

export default function Button({href, children, background, color, border, target}: ButtonProps) {
  return (
    <Container 
      background={background} 
      color={color} 
      border={border} 
      href={href}
      target={target}
    >
      {children}
    </Container>
  )
};