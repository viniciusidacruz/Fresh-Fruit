import React from "react";
import Image from "next/image";

import url from "assets/loading.gif";

export default function Loading() {
  return <Image src={url} alt="Uma maçã fazendo interação na tela" />;
}
