import React from "react";
import styled from "styled-components";
import Logos from "../assets/logos.svg";

const Logo = ({ image, link }) => {
  return (
    <Root image={image}>
      <a href={link} target="_blank">
        <SvgWrapper />
      </a>
    </Root>
  );
};

export default Logo;

const Root = styled.div`
 
  background: transparent ;
  font-size: 30px;
  /* background-image:${props => `url(${props.image}`}  */
  a {
    display:flex;
    justify-content:center;
    text-decoration: none;
    color: grey;
  }
`;

const SvgWrapper = styled(Logos)`
  font-size: 44px;
  width: 143px;
  height: 44px;

  @media (max-width: 400px) {
    font-size: 24px;
  }
`;
