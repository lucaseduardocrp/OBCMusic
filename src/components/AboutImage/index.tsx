import Image from 'next/image';
import { Container } from './styles';

export default function AboutImage() {
  return (
    <Container>
      <div className="imageOne">
        <Image alt='About Image' src={'/about-image/AboutOne.png'} width={460} height={480}/>
      </div>
      <div className="imageTwo">
        <Image alt='About Image' src={'/about-image/AboutTwo.png'} width={460} height={480}/>
      </div>
    </Container>
  )
}
 