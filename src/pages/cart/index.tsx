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
  // const [instance, updateInstance] = usePDF({ document: PDFDocument });

  const { cartItems, isFetching, removeFromCart, totalCheckout } = useCart();

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
          {isFetching ? (
            <Loading />
          ) : (
            <Fragment>
              {cartItems &&
                cartItems.length > 0 &&
                cartItems.map((itemInList: CartItemProps, index: number) => {
                  return (
                    <S.Card key={`${itemInList.title} - ${index}`}>
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

                        <button
                          onClick={() => removeFromCart(itemInList.category)}
                        >
                          remove
                        </button>
                      </S.Info>
                    </S.Card>
                  );
                })}
            </Fragment>
          )}
        </S.Content>

        <S.Aside>
          <S.InfoAside>
            <span>Total: {totalCheckout.toFixed(2)}</span>

            <ul>
              <li>Maçã: [{appleQty.length}]</li>
              <li>Pêra: [{pearQty.length}]</li>
              <li>Abacaxi: [{pineapleQty.length}]</li>
              <li>Banana: [{bananaQty.length}]</li>
              <li>Manga: [{mangoQty.length}]</li>
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
