import { Container, Grid, PhotoGrid } from "./styles";
import Image from "next/image";

export default function GridImages() {
  return (
    <Container>
      <Grid>
        <PhotoGrid className="imageOne">
          <Image alt="Artist Photo" src={'/grid-images/Img1.png'} width={350} height={250} quality={100} />
        </PhotoGrid>
        <PhotoGrid  className="imageTwo">
          <Image alt="Artist Photo" src={'/grid-images/Img2.png'} width={250} height={280} quality={100} />
        </PhotoGrid>
      </Grid>
      <Grid>
        <PhotoGrid className="imageThree">
          <Image alt="Artist Photo" src={'/grid-images/Img3.png'} width={250} height={280} quality={100} />
        </PhotoGrid>
        <PhotoGrid className="imageFour">
          <Image alt="Artist Photo" src={'/grid-images/Img4.png'} width={350} height={250} quality={100} />
        </PhotoGrid>
      </Grid>
    </Container>
  )
}