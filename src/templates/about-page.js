import React from "react";
import { Root } from "../components/~common/basicPageStyles";
import Layout from "../components/Layout";
import { useAboutData } from "../lib/hooks";

export function AboutPageTemplate(props) {
  const data = useAboutData();
  // const { title } = data.frontmatter;
  const { html } = data;
  return (
    <Root>
      {/* <h1>{title}</h1> */}
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
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
