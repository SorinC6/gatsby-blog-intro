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
  width: 983px;
  margin: 0 auto;
  margin-top: 264.5px;
`;

const TopSection = styled.h2`
  width: 412px;
  height: 39px;
  text-align: center;
  font-style: Bold 32px/39px Montserrat;
  letter-spacing: 0;
  color: #394e5d;
  font-size: 32px;
`;

const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
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
    font-style: Bold 20px/24px Montserrat;
    letter-spacing: 0;
    color: #394e5d;
    font-size: 20px;
  }

  p {
    width: 445px;
    height: 249px;
    text-align: left;
    font: Regular 18px/33px Montserrat;
    color: #182333;
    font-size: 18px;
    line-height: 1.3;
  }
`;
const ImageBox = styled(Image)`
  width: 236px;
  height: 370px;
  background: transparent url("img/56217.png") 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-top: 55px;
`;

export default Intro;
