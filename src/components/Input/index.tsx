import React from "react";

import { InputProps } from "./types";

import * as S from "./styles";

export default function Input({ htmlFor, label, ...rest }: InputProps) {
  return (
    <S.Container>
      <S.Label htmlFor={htmlFor}>{label}</S.Label>
      <S.Input {...rest} />
    </S.Container>
  );
}
