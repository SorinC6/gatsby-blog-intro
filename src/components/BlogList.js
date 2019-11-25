import React from "react";
import BlogPreview from "./BlogPreview";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "gatsby";
//import { useSlug } from "../lib/hooks";

const BlogList = ({ blogData }) => {
  //don't need a specific query for slug - get the slug from blogData
  //const slug = useSlug();

  return (
    <>
      <Root>
        {blogData &&
          blogData.map(item => {
            const { title, excerpt, image } = item.node.frontmatter;
            const { slug } = item.node.fields;
            return (
              <Link to={slug} key={slug}>
                <BlogPreview title={title} excerpt={excerpt} image={image} />
              </Link>
            );
          })}
      </Root>
      <Button />
    </>
  );
};

export default BlogList;

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 200px;
  padding: 0 calc((100vw - 80vw) / 2);

  a {
    text-decoration: none;
  }

  @media (max-width: 400px) {
    margin-top: 50px;
    padding: 0 20px;
  }
`;
