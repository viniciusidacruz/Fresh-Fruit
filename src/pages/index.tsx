import Head from "next/head";
import { Fragment } from "react";
import type { NextPage } from "next";

import HeroSection from "components/Sections/Hero";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Fresh Fruit | Desenvolvido por Vinicius Italo</title>
      </Head>

      <HeroSection />
    </Fragment>
  );
};

export default Home;
