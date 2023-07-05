import useFilter from "@/hooks/useFilter";
import { FilterBarContainer, FilterItem } from "./styles";
import { FilterType } from "@/types/FilterType";
import { useState } from "react";
import { Programming } from "@/modules/Programming";

export default function FilterBar() {
  const { type, setType } = useFilter();
  const [day, setDay] = useState(Programming.dayOne)
  
  const changePage = (day: 'dayOne' | 'dayTwo' | 'dayThree') => {
    setDay(Programming[day])
  }

  const handleChangeFilter = (value: FilterType) => {
    setType(value)
  };

  return (
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
          handleChangeFilter(FilterType.DAYTWO)
          changePage('dayThree')
        } 
      }>
        <h3>Dia 03</h3>
        <h4>25 setembro</h4>
      </FilterItem>
    </FilterBarContainer>
  )
};