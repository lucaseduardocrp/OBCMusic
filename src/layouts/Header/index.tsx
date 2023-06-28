import Image from "next/image";
import { HeaderContainer, Navlinks } from "./styles";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderContainer>
      <nav>
        <Image src={'/Logo.png'} alt="Onebitmusic" width={153.46} height={29} />

        <Navlinks>
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
        </Navlinks>
      </nav>
    </HeaderContainer>
  )
}