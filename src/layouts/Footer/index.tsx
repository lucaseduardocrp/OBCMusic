import Image from "next/image";
import { Container, SocialMedia, RightContent } from "./styles";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";

export default function Footer() {
  return(
    <Container>
      <Image src={'/Logo.png'} alt="Onebitmusic" width={153.46} height={29} />

      <RightContent>
        <SocialMedia>
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
        </SocialMedia>

        <p>© onebitcode.com, 2023 </p>
      </RightContent>
    </Container>
  )
}