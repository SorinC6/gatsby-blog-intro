import React from "react";
import Layout from "../components/Layout";
import { useHeroData, useIntroData } from "../lib/hooks";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

export function IndexPageTemplate({}) {
  const heroData = useHeroData();
  const introData = useIntroData();
  //console.log(introData);
  return (
    <>
      <Hero heroData={heroData} />
      <Intro introData={introData} />
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
