import React, { Fragment } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import HeroSection from "components/Sections/Hero";
import { useModal } from "hooks/useModal";
import { ModalLogin } from "components/Modals/Login";

const Home: NextPage = () => {
  const { showModal } = useModal();

  return (
    <Fragment>
      <Head>
        <title>Fresh Fruit | Desenvolvido por Vinicius Italo</title>
      </Head>

      <HeroSection />

      {showModal && <ModalLogin />}
    </Fragment>
  );
};

export default Home;
