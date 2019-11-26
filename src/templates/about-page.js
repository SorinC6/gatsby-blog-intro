import React from "react";
import { Root } from "../components/~common/basicPageStyles";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "About us" } } }) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          html
        }
      }
    }
  }
`;

export function AboutPageTemplate(props) {
  console.log(props);
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
