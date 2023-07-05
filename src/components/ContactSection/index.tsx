import { ContactContainer, Container } from "./styles";

import Image from "next/image";

import LetterIcon from "../Icons/LetterIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import Form from "./Form";

export default function ContactSection() {
  return (
    <Container id="contact">
      <div className="left-container">
        <h2>Nos contate</h2>


        <ContactContainer>
          <PhoneIcon />
          <h5>+55 99823-3232</h5>
        </ContactContainer>

        <ContactContainer>
          <LetterIcon />
          <h5>contato@onebitmusic.com</h5>
        </ContactContainer>

        <Image 
          src={'/FormImage.svg'} 
          alt="Abstract Image" 
          width={224} 
          height={232}
        />
      </div>

    <div className="right-container">
      <Form />
      <Image src={'/Shape.svg'} alt="Abstract Image" width={72} height={48} />
    </div>
  </Container>     
  )
} 