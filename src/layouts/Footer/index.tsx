import Image from "next/image";
import { Container, SocialMedia, RightContent } from "./styles";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";

export default function Footer() {
  return(
    <Container>
      <a href="#home" aria-label="Logo Image"> 
        <Image src={'/Logo.png'} alt="Onebitmusic" width={153.46} height={29} />
      </a>

      <RightContent>
        <SocialMedia>
          <a href="https://www.facebook.com/onebitcode/" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="https://lucascrp.vercel.app/">
            <TwitterIcon />
          </a>
          <a href="https://www.linkedin.com/in/lucaseccarvalho/" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/lucaseduardo_crp/" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </SocialMedia>

        <a href="https://onebitcode.com/lp/" aria-label="One Bit Code">
          <p>© onebitcode.com, 2023 </p>
        </a>
      </RightContent>
    </Container>
  )
}