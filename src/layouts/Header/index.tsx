import Image from "next/image";
import { HeaderContainer, MobileMenu } from "./styles";
import Link from "next/link";
import Button from "@/components/Button";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive(!active)
  }

  return (
    <HeaderContainer>
      <nav>
        <Image src={'/Logo.png'} alt="Onebitmusic" width={153.46} height={29} />

        <MobileMenu onClick={handleMenu}>
          {!active ? 
            (<Image src={'/MenuIcon.svg'} alt="MobileMenu" width={30} height={30} />) :
            (<Image src={'/CloseIcon.svg'} alt="CloseMobileMenu" width={30} height={30} />)
          }
        </MobileMenu>

        <ul className={active ? 'Navlinks' : 'Navlinks Close'}>
          <li>
            <Link href={'/'}>INÍCIO</Link>
          </li>
          <li>
            <Link href={'/artists'}>ARTISTAS</Link>
          </li>
          <li>
            <Link href={'/schedule'}>PROGRAMAÇÃO</Link>
          </li>
          <li>
            <Link href={'/contact'}>CONTATO</Link>
          </li>
          
          <Button background="White" href="/ticket">COMPRAR INGRESSOS</Button>
        </ul>
      </nav>
    </HeaderContainer>
  )
}