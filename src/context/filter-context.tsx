import { FilterType } from "@/types/FilterType";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  type: FilterType.DAY,
  setPage: (value: string) => {},
})

interface ProviderProps {
  children: ReactNode,
}

export default function FilterContextProvider({children}: ProviderProps) {
  const [type, setType] = useState(FilterType.DAY)

  return (
    <FilterContext.Provider value={{type, setType}}>
      {children}
    </FilterContext.Provider>
  )
}