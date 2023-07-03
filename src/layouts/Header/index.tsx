import Image from "next/image";
import { HeaderContainer, MobileMenu } from "./styles";
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
        <a href="#home">
          <Image src={'/Logo.png'} alt="Onebitmusic" width={153.46} height={29} />
        </a>

        <MobileMenu onClick={handleMenu}>
          {!active ? 
            (<Image src={'/MenuIcon.svg'} alt="MobileMenu" width={30} height={30} />) :
            (<Image src={'/CloseIcon.svg'} alt="CloseMobileMenu" width={30} height={30} />)
          }
        </MobileMenu>

        <ul className={active ? 'Navlinks' : 'Navlinks Close'}>
          <li>
            <a href='#home'>INÍCIO</a>
          </li>
          <li>
            <a href='#artists'>ARTISTAS</a>
          </li>
          <li>
            <a href='#schedule'>PROGRAMAÇÃO</a>
          </li>
          <li>
            <a href='#contact'>CONTATO</a>
          </li>
          
          <Button background="White" href="#ticket">COMPRAR INGRESSOS</Button>
        </ul>
      </nav>
    </HeaderContainer>
  )
}