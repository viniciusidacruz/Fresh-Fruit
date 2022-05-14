import { ReactNode } from "react";

interface SearchContextProps {
  searchFruit: string;
  setSearchFruit: (searchFruit: string) => void;
}

interface SearchProviderProps {
  children: ReactNode;
}

export { SearchContextProps, SearchProviderProps };
