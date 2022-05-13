import React from "react";
import Link from "next/link";
import Image from "next/image";

import urlLogo from "../../assets/svg/lemon.svg";

import { Content } from "./styles";

export default function Logo() {
  return (
    <Link href="/">
      <Content>
        <Image src={urlLogo} alt="Logo do Fresh Fruit" width={48} height={48} />

        <span>Logo</span>
      </Content>
    </Link>
  );
}
