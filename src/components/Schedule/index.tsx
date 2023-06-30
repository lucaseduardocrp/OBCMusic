import Image from 'next/image';
import { Container, Grid } from './styles';

export default function Schedule() {
  return (
    <Container>
      <div className="content">
        <p>Hora</p>
        <p>Conteúdo</p>
        <p>Artistas</p>
      </div>

      <Grid>
        <p>11:00 AM to 12:00 PM</p>
        <p>
          Desfrute de uma performance emocionante com Yui Ronald, um artista solo que encanta o público com sua voz cativante e letras inspiradoras. Prepare-se    para uma noite de músicas envolventes e momentos emocionantes. 
        </p>
        <div className="artist-container">
          <Image src={'/Yui.png'} alt='Yui' width={56} height={56} />
          <div className='artist-info'>
            <p>Yui Ronald</p>
            <span>Both 2F12</span>
          </div>
        </div>
        <div className="preview-container">
          <p>Previa</p>
          <Image src={'/svg/Icons-Play.svg'} alt='Play Icon' width={24} height={24}/>
        </div>
      </Grid>
    </Container>
  )
}