import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";

const Hero = ({ heroData }) => {
  //console.log(heroData);
  return (
    <Root>
      <LeftSide>
        <h1>{heroData.heading}</h1>
        <p>{heroData.subheading}</p>
      </LeftSide>
      <ImageBox fluid={heroData.image.childImageSharp.fluid} alt="dd" />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 246px;

  @media (max-width: 400px) {
    margin-top: 176px;
  }
`;

const LeftSide = styled.div`
  max-width: 801px;
  h1 {
    width: 429px;
    height: 57px;
    letter-spacing: 0;
    color: #394e5d;
    font-size: 46px;
    font-style: SemiBold 46px/57px Montserrat;
    margin-bottom: 20.5px;
  }

  p {
    text-align: left;
    width: 545px;
    height: 70px;
    font-style: Regular 22px/27px Montserrat;
    color: #394e5d;
    font-size: 22px;
  }

  @media (max-width: 400px) {
    max-width: 100%;
    h1 {
      font-size: 32px;
      padding-left: 20px;
    }

    p {
      font-size: 18px;
      padding-left: 20px;
      width: 322px;
    }
  }
`;
const ImageBox = styled(Image)`
  width: 384px;
  height: 371px;
  background: transparent 0% 0% no-repeat padding-box;
  margin-left: 106px;

  @media (max-width: 400px) {
    width: 262px;
    height: 253px;
    margin: 0;
    margin-top: 67px;
  }
`;

export default Hero;
