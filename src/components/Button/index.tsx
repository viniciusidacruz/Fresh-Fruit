import React from "react";

import { ButtonProps } from "./types";
import { Content } from "./styles";

export default function Button({ title, ...rest }: ButtonProps) {
  return <Content {...rest}>{title}</Content>;
}
