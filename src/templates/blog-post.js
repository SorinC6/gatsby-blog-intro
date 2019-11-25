import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const query = graphql`
  query($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`;

export function BlogPostTemplate(props) {
  //console.log(props);
  return (
    <>
      <h1></h1>
    </>
  );
}

BlogPostTemplate.propTypes = {};

function BlogPost(props) {
  console.log(props);
  return (
    <Layout>
      <BlogPostTemplate />
    </Layout>
  );
}

BlogPost.propTypes = {};

export default BlogPost;
