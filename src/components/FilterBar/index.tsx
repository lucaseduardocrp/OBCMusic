import useFilter from "@/hooks/useFilter";
import { FilterBarContainer, FilterItem } from "./styles";
import { FilterType } from "@/types/FilterType";

export default function FilterBar() {
  const { type, setType } = useFilter();

  const handleChange = (value: FilterType) => {
    setType(value)
  };

  return (
    <FilterBarContainer>
      <FilterItem selected={type === FilterType.DAY} onClick={() => handleChange(FilterType.DAY)}>
        <h3>Dia 01</h3>
        <h4>23 setembro</h4>
      </FilterItem>
      <FilterItem selected={type === FilterType.DAYTWO} onClick={() => handleChange(FilterType.DAYTWO)}>
        <h3>Dia 02</h3>
        <h4>24 setembro</h4>
      </FilterItem>
      <FilterItem selected={type === FilterType.DAYTRHEE} onClick={() => handleChange(FilterType.DAYTRHEE)}>
        <h3>Dia 03</h3>
        <h4>25 setembro</h4>
      </FilterItem>
    </FilterBarContainer>
  )
};