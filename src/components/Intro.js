import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";

const Intro = ({ introData }) => {
  return (
    <Root>
      <TopSection>{introData.heading}</TopSection>
      <MainSection>
        <ImageBox fluid={introData.image.childImageSharp.fluid} alt="dd" />
        <RightSide>
          <h3>{introData.subheading}</h3>
          <p>{introData.description}</p>
        </RightSide>
      </MainSection>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 264.5px;
  @media (max-width: 400px) {
    margin-top: 39px;
  }
`;

const TopSection = styled.h2`
  width: 412px;
  text-align: center;
  color: #394e5d;
  font-size: 32px;

  @media (max-width: 400px) {
    width: 334px;
    font-size: 26px;
    text-align: left;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 983px;
  justify-content: center;
  align-items: center;
  margin-top: 55px;

  @media (max-width: 400px) {
    width: 334px;
    padding: 0 20px;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 202px;
  h3 {
    width: 254px;
    height: 24px;
    text-align: left;
    color: #394e5d;
    font-size: 20px;
  }

  p {
    width: 445px;
    text-align: left;
    color: #182333;
    font-size: 18px;
    line-height: 1.5;
  }

  @media (max-width: 400px) {
    margin-left: 0;
    padding: 0 20px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
      width: 334px;
    }
  }
`;
const ImageBox = styled(Image)`
  width: 236px;
  height: 370px;
  background: transparent 0% 0% no-repeat padding-box;

  @media (max-width: 400px) {
    display: none;
  }
`;

export default Intro;
