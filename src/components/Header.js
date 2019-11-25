import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Icon from "../assets/logo.svg";

const Header = () => {
  return (
    <Root>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Icon />
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
    </Root>
  );
};

export default Header;

const Root = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 12px #0000001d;
`;

const Nav = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: space-between;
  a {
    text-decoration: none;
    width: 82px;
    height: 24px;
    color: #394e5d;
    font-style: SemiBold 20px/24px Montserrat;
  }
`;
