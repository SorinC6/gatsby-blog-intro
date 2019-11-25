import React, { useState, useEffect } from "react";
import BlogPreview from "./BlogPreview";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "gatsby";
//import { useSlug } from "../lib/hooks";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const BlogList = ({ blogData }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(2);
  const [desktopIndex, setDesktopIndex] = useState(4);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  //don't need a specific query for slug - get the slug from blogData
  //const slug = useSlug();
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    windowDimensions.width < 400 ? setIsMobile(true) : setIsMobile(false);
  }, [windowDimensions.width]);

  const handleClick = () => {
    setMobileIndex(mobileIndex + 2);
    setDesktopIndex(desktopIndex + 4);
  };

  return (
    <>
      <Root>
        {blogData &&
          blogData.map((item, index) => {
            if (index < desktopIndex && !isMobile) {
              const { title, excerpt, image } = item.node.frontmatter;
              const { slug } = item.node.fields;
              return (
                <Link to={slug} key={slug}>
                  <BlogPreview title={title} excerpt={excerpt} image={image} />
                </Link>
              );
            }
            if (index < mobileIndex && isMobile) {
              const { title, excerpt, image } = item.node.frontmatter;
              const { slug } = item.node.fields;
              return (
                <Link to={slug} key={slug}>
                  <BlogPreview title={title} excerpt={excerpt} image={image} />
                </Link>
              );
            }
          })}
      </Root>
      <Button handleClick={handleClick} />
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
