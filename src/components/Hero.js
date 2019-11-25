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
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 246px;
`;

const LeftSide = styled.div`
  max-width: 801px;
  h1 {
    width: 429px;
    height: 57px;
    letter-spacing: 0;
    color: #394e5d;
    font-size: 46px;
    font-family: SemiBold 46px/57px Montserrat;
    margin-bottom: 20.5px;
  }

  p {
    text-align: left;
    width: 545px;
    height: 70px;
    font-family: Regular 22px/27px Montserrat;
    color: #394e5d;
    font-size: 22px;
  }
`;
const ImageBox = styled(Image)`
  width: 384px;
  height: 371px;
  background: transparent url("img/56256.png") 0% 0% no-repeat padding-box;
  margin-left: 106px;
`;

export default Hero;
