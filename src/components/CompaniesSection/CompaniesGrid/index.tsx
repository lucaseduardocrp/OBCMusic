import Image from "next/image";
import { Container } from "./styles";
import { CompaniesImages } from "@/modules/CompaniesImages";

export default function CompaniesGrid() {
  return(
    <Container data-aos="zoom-in">
      {CompaniesImages.map((item, id) => 
        <Image src={item.src} alt={item.alt} width={item.width} height={item.height} key={id}  data-aos="fade-up"/>
      )}
    </Container>
  )
};