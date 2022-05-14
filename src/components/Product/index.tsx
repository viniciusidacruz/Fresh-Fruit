import React, { Fragment } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

import { useCart } from "hooks/useCart";
import { useModal } from "hooks/useModal";
import CartService from "common/services/ServiceClient";

import { ContentProductProps } from "./types";

import * as S from "./styles";

export default function Product({ data }: ContentProductProps) {
  const { addToCart } = useCart();
  const { handleCloseModal } = useModal();
  const { data: dataUser } = useSession();

  const isAuthorized = dataUser?.user?.email;
  const offer = data.prices.offer && data.prices.price + 1;

  const handleAddToCart = () => {
    if (isAuthorized) {
      addToCart(data);
    } else {
      handleCloseModal();
    }
  };

  return (
    <S.Content>
      <S.Container>
        <S.Thumbnail>
          <Fragment>
            {data.prices.offer && (
              <S.Offer>
                <span>10%</span>
              </S.Offer>
            )}

            <Image
              src={data.thumbnail.path}
              alt={data.thumbnail.alt}
              width={280}
              height={280}
            />
          </Fragment>
        </S.Thumbnail>
        <S.Info>
          <S.ProductName>{data.title}</S.ProductName>
          <S.ProductDescription>{data.category}</S.ProductDescription>

          <S.Prices>
            <S.InfoPrice>
              {data.prices.offer && <s>R$ {offer}</s>}
              <S.Price>R${data.prices.price}</S.Price>
              <span>Não parcelamos</span>
            </S.InfoPrice>

            <S.IconAdd onClick={() => handleAddToCart()} />
          </S.Prices>
        </S.Info>
      </S.Container>
    </S.Content>
  );
}
