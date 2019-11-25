import React from "react";
import BlogPreview from "./BlogPreview";
import styled from "styled-components";
import Button from "../components/Button";

const BlogList = ({ blogData }) => {
  console.log(blogData);

  return (
    <>
      <Root>
        {blogData &&
          blogData.map(item => {
            return (
              <BlogPreview
                title={item.node.frontmatter.title}
                excerpt={item.node.frontmatter.excerpt}
                image={item.node.frontmatter.image}
              />
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
  justify-content: space-between;
  width: 1440px;
  margin-top: 200px;
`;
