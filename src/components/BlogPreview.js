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
      <h6>{title}</h6>
      <p>{excerpt}</p>
    </Root>
  );
};

export default BlogPreview;

const Root = styled.article`
  width: 282px;
  font-style: SemiBold 20px/27px Montserrat;
  transition: 500ms;

  &:hover {
    box-shadow: 0px 2px 16px #394e5d36;
    cursor: pointer;
  }

  h6 {
    margin-top: 21px;
    font-size: 20px;
    padding: 4px;
  }

  p {
    font-size: 14px;
    color: #182333;
    padding: 4px;
  }
`;
