import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import moment from "moment";

export const query = graphql`
  query MyQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

export function BlogPostTemplate({ title, date, body }) {
  // not sure why post data its comming only in BlogPost component
  //console.log(props);
  return (
    <Root>
      <h1>{title}</h1>
      <h6>Posted on: {moment(date).format("MMMM Do YYYY, h:mm a")}</h6>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </Root>
  );
}

BlogPostTemplate.propTypes = {};

function BlogPost({ data }) {
  console.log(JSON.stringify(data, undefined, 4));
  const { title, date } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
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
