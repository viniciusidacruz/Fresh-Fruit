import React from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

import { HeaderProps } from "./types";

import * as S from "./styles";
import Logo from "components/Logo";

export function Header({ toggleSignIn }: HeaderProps) {
  const router = useRouter();
  const { data } = useSession();

  const isAuthorized = data?.user?.email;
  const username = data?.user?.name;

  const signOutRemoveCredentials = () => {
    signOut();
  };

  return (
    <S.Content>
      <S.Container className="container">
        <Logo />

        {!isAuthorized ? (
          <S.Enter onClick={toggleSignIn}>
            <span>Entrar</span>

            <S.EnterIcon />
          </S.Enter>
        ) : (
          <S.Enter>
            <S.GroupPriceInfo>
              <span>{username}</span>
              <span>R$ 1541,00</span>
            </S.GroupPriceInfo>

            <S.GroupImage>
              <S.Cart />

              <div>
                <span>2</span>
              </div>
            </S.GroupImage>
            <S.Logout onClick={() => signOutRemoveCredentials()}>
              <S.SignOutIcon />
            </S.Logout>
          </S.Enter>
        )}
      </S.Container>
    </S.Content>
  );
}
