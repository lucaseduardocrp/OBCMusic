import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean,
}

export const FilterBarContainer = styled.ul`
  ${FlexCSS}
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const FilterItem = styled.li<FilterItemProps>`
  width: 30rem;
  cursor: pointer;

  h3{
    font-size: var(--2xl);
    font-weight: 900;
    line-height: 1.8;
    color: ${props => props.selected ? '#000' : '#C9C9C9'};
  }
  
  h4{
    font-size: var(--base);
    font-weight: 700;
    opacity: ${props => props.selected ? '100%' : '30%'};
    border-bottom: ${props => props.selected ? '0.5rem solid black' : '0.5rem solid #333333'};
    padding-bottom: 2rem;
  }
`;
