import { Container, Grid, PhotoGrid } from "./styles";
import Image from "next/image";

export default function GridImages() {
  return (
    <Container>
      <Grid>
        <PhotoGrid className="imageOne">
          <Image alt="Artist Photo" src={'/grid-images/Img1.png'} width={370} height={270} />
        </PhotoGrid>
        <PhotoGrid  className="imageTwo">
          <Image alt="Artist Photo" src={'/grid-images/Img2.png'} width={270} height={300} />
        </PhotoGrid>
      </Grid>
      <Grid>
        <PhotoGrid className="imageThree">
          <Image alt="Artist Photo" src={'/grid-images/Img3.png'} width={270} height={300} />
        </PhotoGrid>
        <PhotoGrid className="imageFour">
          <Image alt="Artist Photo" src={'/grid-images/Img4.png'} width={370} height={270} />
        </PhotoGrid>
      </Grid>
    </Container>
  )
}