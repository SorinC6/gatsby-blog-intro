import React from "react";
import styled from "styled-components";
import Logos from "../assets/logos.svg";

const Logo = ({ image, link }) => {
  return (
    <Root image={image}>
      <a href={link} target="_blank">
        <Logos />
      </a>
    </Root>
  );
};

export default Logo;

const Root = styled.div`
  font-size: 30px;
  a {
    display: flex;
    justify-content: center;
  }
`;

// const SvgWrapper = styled(Logos)`
//   /* font-size: 44px;
//   width: 143px;
//   height: 44px; */
//   background: red;
//   color: white;
// `;
