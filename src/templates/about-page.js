import React from "react";
import { Root } from "../components/~common/basicPageStyles";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { useAboutData } from "../lib/hooks";

export function AboutPageTemplate(props) {
  const data = useAboutData();
  console.log(data);
  return (
    <Root>
      <h1>About Page</h1>
    </Root>
  );
}

AboutPageTemplate.propTypes = {};

function AboutPage(props) {
  console.log(props);
  return (
    <Layout>
      <AboutPageTemplate />
    </Layout>
  );
}

AboutPage.propTypes = {};

export default AboutPage;
