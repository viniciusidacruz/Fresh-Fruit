import React from "react";
import Link from "next/link";
import Image from "next/image";

import urlLogo from "../../assets/svg/lemon.svg";

import { useChangeBackground } from "hooks/useChangeBackground";

import { Content } from "./styles";

export default function Logo() {
  const haveBackground = useChangeBackground();

  return (
    <Link href="/">
      <Content haveBackground={haveBackground}>
        <Image src={urlLogo} alt="Logo do Fresh Fruit" width={48} height={48} />

        <span>Logo</span>
      </Content>
    </Link>
  );
}
