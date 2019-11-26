import React from "react";
import { Root } from "../components/~common/basicPageStyles";
import Layout from "../components/Layout";

export function AboutPageTemplate({}) {
  return (
    <Root>
      <h1>About Page</h1>
    </Root>
  );
}

AboutPageTemplate.propTypes = {};

function AboutPage() {
  return (
    <Layout>
      <AboutPageTemplate />
    </Layout>
  );
}

AboutPage.propTypes = {};

export default AboutPage;
