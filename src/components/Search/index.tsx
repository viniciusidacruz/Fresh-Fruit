import React from "react";

import Input from "components/Input";

import { Container } from "./styles";
import { useSearch } from "hooks/useSearch";

export default function Search() {
  const { searchFruit, setSearchFruit } = useSearch();

  return (
    <Container>
      <form className="container">
        <Input
          placeholder="O que você procura?"
          type="search"
          value={searchFruit}
          onChange={(event) => setSearchFruit(event.target.value)}
        />
      </form>
    </Container>
  );
}
