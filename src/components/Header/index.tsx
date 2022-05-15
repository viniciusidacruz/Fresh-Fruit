import React from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

import Logo from "components/Logo";

import { useModal } from "hooks/useModal";
import { useChangeBackground } from "hooks/useChangeBackground";

import * as S from "./styles";
import { useCart } from "hooks/useCart";
import { CartItemProps } from "./types";

export function Header() {
  const router = useRouter();
  const { data } = useSession();
  const { cartItems, totalCheckout } = useCart<CartItemProps>();
  const { handleCloseModal } = useModal();
  const haveBackground = useChangeBackground();

  const isAuthorized = data?.user?.email;
  const username = data?.user?.name;
  const count = cartItems && cartItems.length > 0 && cartItems.length;
  const total = totalCheckout > 0 ? totalCheckout.toFixed(2) : 0;

  const signOutRemoveCredentials = () => {
    signOut();

    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("@Cart");
    }
  };

  return (
    <S.Content haveBackground={haveBackground}>
      <S.Container className="container">
        <Logo full />

        {!isAuthorized ? (
          <S.Enter haveBackground={haveBackground} onClick={handleCloseModal}>
            <span>Entrar</span>

            <S.EnterIcon haveBackground={haveBackground} />
          </S.Enter>
        ) : (
          <S.Enter haveBackground={haveBackground}>
            <S.GroupPriceInfo>
              <span>{username}</span>
              <span>R$ {total}</span>
            </S.GroupPriceInfo>

            <S.GroupImage onClick={() => router.push("/cart")}>
              <S.Cart haveBackground={haveBackground} />

              {count && (
                <div>
                  <span>{count}</span>
                </div>
              )}
            </S.GroupImage>
            <S.Logout onClick={() => signOutRemoveCredentials()}>
              <S.SignOutIcon haveBackground={haveBackground} />
            </S.Logout>
          </S.Enter>
        )}
      </S.Container>
    </S.Content>
  );
}
