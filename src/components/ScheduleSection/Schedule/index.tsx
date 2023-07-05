import { useState } from 'react';
import { Programming } from '@/modules/Programming';
import { Container, FilterBarContainer, FilterItem, Grid } from './styles';

import Image from 'next/image';
import useFilter from '@/hooks/useFilter';
import { FilterType } from '@/types/FilterType';

export default function Schedule() {
  const { type, setType } = useFilter();
  const [day, setDay] = useState(Programming.dayOne)
  
  const changePage = (day: 'dayOne' | 'dayTwo' | 'dayThree') => {
    setDay(Programming[day])
  }

  const handleChangeFilter = (value: FilterType) => {
    setType(value)
  };
  return (
    <>
      <FilterBarContainer data-aos="zoom-in">
        <FilterItem selected={type === FilterType.DAY} 
          onClick={() => {
            handleChangeFilter(FilterType.DAY)
            changePage('dayOne')
          }
        }>
          <h3>Dia 01</h3>
          <h4>23 setembro</h4>
        </FilterItem>
        <FilterItem selected={type === FilterType.DAYTWO} 
          onClick={() => {
            handleChangeFilter(FilterType.DAYTWO)
            changePage('dayTwo')
            } 
        }>
          <h3>Dia 02</h3>
          <h4>24 setembro</h4>
        </FilterItem>
        <FilterItem selected={type === FilterType.DAYTRHEE}
          onClick={() => {
            handleChangeFilter(FilterType.DAYTRHEE)
            changePage('dayThree')
          } 
        }>
          <h3>Dia 03</h3>
          <h4>25 setembro</h4>
        </FilterItem>
      </FilterBarContainer>
        
      <Container data-aos="zoom-in">
        <div className="content">
          <p>Hora</p>
          <p>Conteúdo</p>
          <p>Artistas</p>
        </div>

        {day.map((item, index) =>
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
    </>
  )
};