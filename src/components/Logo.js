import React from "react";
import styled from "styled-components";
import Logos from "../assets/logos.svg";

const Logo = ({ image, link }) => {
  console.log(image);
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
 
  background: transparent url("img/Component 1 – 1.png") 0% 0% no-repeat
    padding-box;
  font-size: 30px;
  /* background-image:${props => `url(${props.image}`}  */
  a {
    display:flex;
    text-decoration: none;
    color: grey;
  }
`;

const SvgWrapper = styled(Logos)`
  font-size: 44px;
  width: 143px;
  height: 44px;
`;
