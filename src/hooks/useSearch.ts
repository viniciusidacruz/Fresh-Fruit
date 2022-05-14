import { useContext } from "react";

import { SearchContext } from "contexts/search";

export const useSearch = () => {
  return useContext(SearchContext);
};
