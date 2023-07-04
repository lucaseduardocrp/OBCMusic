import Image from "next/image";
import { Container, SocialMedia, RightContent } from "./styles";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";

export default function Footer() {
  return(
    <Container>
      <a href="#home">
        <Image src={'/Logo.png'} alt="Onebitmusic" width={153.46} height={29} />
      </a>

      <RightContent>
        <SocialMedia>
          <a href="https://www.facebook.com/onebitcode/">
            <FacebookIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="https://www.linkedin.com/school/onebitcode/">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/onebitcode/">
            <InstagramIcon />
          </a>
        </SocialMedia>

        <a href="https://onebitcode.com/lp/">
          <p>© onebitcode.com, 2023 </p>
        </a>
      </RightContent>
    </Container>
  )
}