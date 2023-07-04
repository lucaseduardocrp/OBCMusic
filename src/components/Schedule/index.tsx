import Image from 'next/image';
import { Container, Grid } from './styles';
import { Programming } from '@/modules/Programming';

export default function Schedule() {
  return (
    <Container>
      <div className="content">
        <p>Hora</p>
        <p>Conteúdo</p>
        <p>Artistas</p>
      </div>

      {Programming.map((item, index) =>
        <Grid key={index}>
          <p>{item.hour}</p>
          <p>{item.description}</p>
          
          <div className="artist-container">
              {item.artists.map((artist) => (
                <div className="artist-box" key={artist.id}>
                  <Image src={artist.image} alt={artist.name} width={56} height={56} />
                  <div className='artist-info'>
                    <p>{artist.name}</p>
                    <span>{artist.id}</span>
                  </div>
                </div>
              ))}
          </div>

          <div className="preview-container">
            <p>{item.preview}</p>
            <Image src={item.icon} alt={item.preview} width={24} height={24}/>
          </div>
          </Grid>
        )}
    </Container>
  )
};