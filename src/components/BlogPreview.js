import React from "react";
import styled from "styled-components";
import PreviewCompatibleImage from "../lib/PreviewCompatibleImage";

const BlogPreview = ({ title, excerpt, image }) => {
  console.log(title, excerpt, image);

  const imageObject = {
    image,
    childImageSharp: image.childImageSharp,
    alt: "title"
  };
  return (
    <Root>
      <PreviewCompatibleImage imageInfo={imageObject} />
      <h4>{title}</h4>
      <p>{excerpt}</p>
    </Root>
  );
};

export default BlogPreview;

const Root = styled.article`
  width: 282px;
  height: 255px;
  font-style: SemiBold 20px/27px Montserrat;

  h4 {
    margin-top: 21px;
    font-size: 24px;
  }

  p {
    font-size: 16px;
    color: #182333;
  }
`;
