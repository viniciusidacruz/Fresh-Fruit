import React from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

import Logo from "components/Logo";

import { useModal } from "hooks/useModal";
import { useChangeBackground } from "hooks/useChangeBackground";

import * as S from "./styles";

export function Header() {
  const router = useRouter();
  const { data } = useSession();
  const { handleCloseModal } = useModal();
  const haveBackground = useChangeBackground();

  const isAuthorized = data?.user?.email;
  const username = data?.user?.name;

  const signOutRemoveCredentials = () => {
    signOut();
  };

  return (
    <S.Content haveBackground={haveBackground}>
      <S.Container className="container">
        <Logo />

        {!isAuthorized ? (
          <S.Enter haveBackground={haveBackground} onClick={handleCloseModal}>
            <span>Entrar</span>

            <S.EnterIcon haveBackground={haveBackground} />
          </S.Enter>
        ) : (
          <S.Enter haveBackground={haveBackground}>
            <S.GroupPriceInfo>
              <span>{username}</span>
              <span>R$ 1541,00</span>
            </S.GroupPriceInfo>

            <S.GroupImage>
              <S.Cart haveBackground={haveBackground} />

              <div>
                <span>2</span>
              </div>
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
