import { useEffect, useState } from "react";
import { HeaderContainer, MobileMenu } from "./styles";

import Image from "next/image";
import Button from "@/components/Button";
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
        <a href="#home" aria-label="Logo Image">
          <Image src={'/Logo.png'} alt="Onebitmusic" width={153.46} height={29} />
        </a>

        <MobileMenu onClick={handleMenu}>
          {!active ? <BurgerMenuIcon /> : <CloseIcon />}
        </MobileMenu>

        <ul className={(active ? 'Navlinks' : 'Navlinks Close')} >
          <li>
            <a href='#home' data-aos="zoom-in">INÍCIO</a>
          </li>
          <li>
            <a href='#artists' data-aos="zoom-in">ARTISTAS</a>
          </li>
          <li>
            <a href='#schedule' data-aos="zoom-in">PROGRAMAÇÃO</a>
          </li>
          <li>
            <a href='#contact' data-aos="zoom-in">CONTATO</a>
          </li>
          
          <Button background="White" href="#ticket">COMPRAR INGRESSOS</Button>
        </ul>
      </nav>
    </HeaderContainer>
  )
}