import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

import signInSvg from "assets/svg/login.svg";

import { useModal } from "hooks/useModal";

import * as S from "./styles";

export function ModalLogin() {
  const { handleCloseModal } = useModal();

  return (
    <S.Background>
      <S.Content>
        <S.GroupLeft>
          <Image src={signInSvg} width={400} height={400} alt="Teste" />
        </S.GroupLeft>

        <S.GroupRight>
          <S.CloseModal onClick={() => handleCloseModal()} />
          <S.Or>
            <span>Acesse com</span>
          </S.Or>

          <S.ButtonIcon onClick={() => signIn()}>
            <S.Icon />
            <span>Entrar com Github</span>
          </S.ButtonIcon>
        </S.GroupRight>
      </S.Content>
    </S.Background>
  );
}
