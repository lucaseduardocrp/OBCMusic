import { useContext } from 'react';
import { FilterContext } from '../context/filter-context';

export default function useFilter() {
  return useContext(FilterContext)
}