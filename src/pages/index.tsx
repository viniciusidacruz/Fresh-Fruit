import React, { Fragment } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import { useModal } from "hooks/useModal";

import Search from "components/Search";
import ModalLogin from "components/Modals/Login";
import HeroSection from "components/Sections/Hero";
import ProductsSection from "components/Sections/Products";

const Home: NextPage = () => {
  const { showModal } = useModal();

  return (
    <Fragment>
      <Head>
        <title>Fresh Fruit | Desenvolvido por Vinicius Italo</title>
      </Head>

      <HeroSection />

      <Search />

      <ProductsSection />

      {showModal && <ModalLogin />}
    </Fragment>
  );
};

export default Home;
