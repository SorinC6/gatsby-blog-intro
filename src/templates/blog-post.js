import React from "react";
import styled from "styled-components";
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

export function BlogPostTemplate({ title, date, body }) {
  // not sure why post data its comming only in BlogPost component
  //console.log(props);
  return (
    <Root>
      <h1>{title}</h1>
      <h6>{date}</h6>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </Root>
  );
}

BlogPostTemplate.propTypes = {};

function BlogPost({ data }) {
  const { title, date } = data.allMarkdownRemark.edges[0].node.frontmatter;
  const { html } = data.allMarkdownRemark.edges[0].node;
  return (
    <Layout>
      <BlogPostTemplate title={title} date={date} body={html} />
    </Layout>
  );
}

BlogPost.propTypes = {};

export default BlogPost;

const Root = styled.div`
  padding: 0 calc((100vw - 600px) / 2);

  h1,
  h2 {
    padding: 20px;
    margin-top: 10px;
  }

  h6 {
    text-align: center;
  }

  p {
    padding: 20px 5px;
    line-height: 1.4;
    text-align: justify;
    text-justify: inter-word;
  }

  img {
    border-radius: 5px;
  }
`;
