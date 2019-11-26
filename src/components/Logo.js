import React from "react";
import PropTypes from "prop-types";
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

Logo.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

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
