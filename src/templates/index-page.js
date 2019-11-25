import React from "react";
import Layout from "../components/Layout";
import { useHeroData, useIntroData, useLogoData } from "../lib/hooks";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import LogoList from "../components/LogoList";

export function IndexPageTemplate({}) {
  const heroData = useHeroData();
  const introData = useIntroData();
  const logoData = useLogoData();
  //console.log(logoData);
  return (
    <>
      <Hero heroData={heroData} />
      <Intro introData={introData} />
      <LogoList logoData={logoData} />
    </>
  );
}

IndexPageTemplate.propTypes = {};

function IndexPage() {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
}

IndexPage.propTypes = {};

export default IndexPage;
