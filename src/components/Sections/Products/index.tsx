import React, { Fragment } from "react";

import { useFetch } from "hooks/useFetch";
import { useSearch } from "hooks/useSearch";

import Product from "components/Product";
import Loading from "components/Loading";

import { ContentProductProps } from "./types";

import * as S from "./styles";

export default function ProductsSection() {
  const { searchFruit } = useSearch();
  const { data, isFetching } = useFetch("/products.json");

  return (
    <S.Content>
      <S.HeaderProducts>
        <h1>Produtos</h1>
        <h3>Frutas fresquinhas para sua casa</h3>
      </S.HeaderProducts>

      <S.Container>
        {isFetching ? (
          <Loading />
        ) : (
          <Fragment>
            {data
              .filter((fruit: ContentProductProps) => {
                if (searchFruit == "") {
                  return fruit;
                } else if (
                  fruit.title.toLowerCase().includes(searchFruit.toLowerCase())
                ) {
                  return fruit;
                }
              })
              .map((product: ContentProductProps) => (
                <Product key={product.id} data={product} />
              ))}
          </Fragment>
        )}
      </S.Container>
    </S.Content>
  );
}
