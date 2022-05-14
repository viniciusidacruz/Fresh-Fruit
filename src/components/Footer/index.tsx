import React, { Fragment } from "react";

import Logo from "components/Logo";

import * as S from "./styles";

export function Footer() {
  return (
    <Fragment>
      <S.Content>
        <S.Container>
          <Logo />
        </S.Container>
      </S.Content>

      <S.Copy>
        <p>Alguns direitos reservados</p>
      </S.Copy>
    </Fragment>
  );
}
