import React, { createContext, useState } from "react";
import { SearchContextProps, SearchProviderProps } from "./types";

export const SearchContext = createContext({} as SearchContextProps);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchFruit, setSearchFruit] = useState("");

  return (
    <SearchContext.Provider value={{ searchFruit, setSearchFruit }}>
      {children}
    </SearchContext.Provider>
  );
};
