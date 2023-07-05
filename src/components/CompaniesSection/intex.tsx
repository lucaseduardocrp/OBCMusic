import { Container } from "./styles";

import Button from "../Button";
import CompaniesGrid from "./CompaniesGrid";

export default function CompaniesSection() {
  return (
    <Container>
    <h2>Nossos investidores</h2>
    
    <CompaniesGrid />
    <Button href="" background="White">Se torne um Investidor</Button>
  </Container>
  )
}