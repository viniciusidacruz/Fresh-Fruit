import React, { Fragment } from "react";
import Image from "next/image";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { useCart } from "hooks/useCart";

import Button from "components/Button";
import Loading from "components/Loading";
import PDFDocument from "components/PDFDocument";

import { CartItemProps } from "./types";

import * as S from "./styles";

export default function Cart() {
  const { cartItems, removeFromCart, totalCheckout } = useCart();

  const appleQty =
    cartItems &&
    cartItems.length > 0 &&
    cartItems.filter((fruit: CartItemProps) => fruit.title === "Maçã");

  const pineapleQty =
    cartItems &&
    cartItems.length > 0 &&
    cartItems.filter((fruit: CartItemProps) => fruit.title === "Abacaxi");

  const bananaQty =
    cartItems &&
    cartItems.length > 0 &&
    cartItems.filter((fruit: CartItemProps) => fruit.title === "Banana");

  const mangoQty =
    cartItems &&
    cartItems.length > 0 &&
    cartItems.filter((fruit: CartItemProps) => fruit.title === "Manga");

  const pearQty =
    cartItems &&
    cartItems.length > 0 &&
    cartItems.filter((fruit: CartItemProps) => fruit.title === "Pêra");

  return (
    <S.Main>
      <div className="container">
        <S.Content>
          {cartItems.length > 0 ? (
            <Fragment>
              {cartItems?.map((itemInList: CartItemProps, index: number) => {
                return (
                  <S.Card key={itemInList.id}>
                    <Image
                      src={itemInList.thumbnail.path}
                      alt={itemInList.thumbnail.path}
                      width={200}
                      height={200}
                    />

                    <S.Info>
                      <div>
                        <h2>{itemInList.title}</h2>
                        <h3>Tipo: {itemInList.category}</h3>
                      </div>

                      <button onClick={() => removeFromCart(index)}>
                        remove
                      </button>
                    </S.Info>
                  </S.Card>
                );
              })}
            </Fragment>
          ) : (
            <S.NotFound>
              <h3>Não tem produto</h3>
            </S.NotFound>
          )}
        </S.Content>

        <S.Aside>
          <S.InfoAside>
            <span>Total: {totalCheckout.toFixed(2)}</span>

            <ul>
              <li>Maçã: [{appleQty ? appleQty.length : "0"}]</li>
              <li>Pêra: [{pearQty ? pearQty.length : "0"}]</li>
              <li>Abacaxi: [{pineapleQty ? pineapleQty.length : "0"}]</li>
              <li>Banana: [{bananaQty ? bananaQty.length : "0"}]</li>
              <li>Manga: [{mangoQty ? mangoQty.length : "0"}]</li>
            </ul>
          </S.InfoAside>

          <PDFDownloadLink
            document={
              <PDFDocument
                cartItems={cartItems}
                totalCheckout={totalCheckout}
              />
            }
            fileName="boleto.pdf"
          >
            {({ blob, url, loading, error }) => (
              <Button title={loading ? "Carregando PDF" : "Finalizar compra"} />
            )}
          </PDFDownloadLink>
        </S.Aside>
      </div>
    </S.Main>
  );
}
