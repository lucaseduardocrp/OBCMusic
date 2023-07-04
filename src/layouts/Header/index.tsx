import Image from "next/image";
import { HeaderContainer, MobileMenu } from "./styles";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import BurgerMenuIcon from "@/components/Icons/BurgerMenuIcon";
import CloseIcon from "@/components/Icons/CloseIcon";

export default function Header() {
  const [active, setActive] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleMenu = () => {
    setActive(!active)
  }

  useEffect(() => {
    const changeBackground = () => {
      if(window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    };

    const clickCloseMenu = () => {
      setActive(false);
    }
    
    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', clickCloseMenu);

    return() => {
      window.removeEventListener('scroll', changeBackground);
      window.addEventListener('scroll', clickCloseMenu);
    };
  }, [])



  return (
    <HeaderContainer>
      <nav className={navbar ? 'active' : ''}>
        <a href="#home">
          <Image src={'/Logo.png'} alt="Onebitmusic" width={153.46} height={29} />
        </a>

        <MobileMenu onClick={handleMenu}>
          {!active ? <BurgerMenuIcon width='30' height='30'/> : <CloseIcon width='30' height='30' />}
        </MobileMenu>

        <ul className={(active ? 'Navlinks' : 'Navlinks Close')}>
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