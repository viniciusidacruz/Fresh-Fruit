import React from "react";
import Link from "next/link";
import Image from "next/image";

import urlLogo from "../../assets/svg/lemon.svg";

import { useChangeBackground } from "hooks/useChangeBackground";

import { Content } from "./styles";

interface LogoProps {
  full?: boolean;
}

export default function Logo({ full }: LogoProps) {
  const haveBackground = useChangeBackground();

  return (
    <Link href="/">
      <Content haveBackground={haveBackground}>
        <Image src={urlLogo} alt="Logo do Fresh Fruit" width={48} height={48} />

        {full && <span>Logo</span>}
      </Content>
    </Link>
  );
}
