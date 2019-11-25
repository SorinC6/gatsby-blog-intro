import React, { useState } from "react";
import { Link } from "gatsby";
import { HamburgerSpin } from "react-animated-burgers";
import styled from "styled-components";
import Icon from "../assets/logo.svg";

const Header = () => {
  const [activ, setIsActiv] = useState(false);
  const toggleButton = () => {
    setIsActiv(!activ);
  };

  console.log(activ);
  return (
    <>
      <Root>
        <Nav>
          <HamburgerMenu isActive={activ} toggleButton={toggleButton} />
          <NavLink to="/" activeClassName="current-page">
            Home
          </NavLink>
          <NavLink to="/product" activeClassName="current-page">
            Products
          </NavLink>
          <Icon />
          <NavLink to="/blog" activeClassName="current-page">
            Blog
          </NavLink>
          <NavLink to="/contact" activeClassName="current-page">
            Contact
          </NavLink>
        </Nav>
      </Root>
      {activ && (
        <MobileNavigation>
          <Wrapper>
            <NavLink to="/" activeClassName="current-page">
              Home
            </NavLink>
          </Wrapper>
          <NavLink to="/product" activeClassName="current-page">
            Products
          </NavLink>
          <NavLink to="/blog" activeClassName="current-page">
            Blog
          </NavLink>
          <NavLink to="/contact" activeClassName="current-page">
            Contact
          </NavLink>
        </MobileNavigation>
      )}
    </>
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

  @media (max-width: 400px) {
    display: flex;
    justify-content: center;
    position: relative;
    a {
      display: none;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  width: 82px;
  height: 24px;
  color: #394e5d;
  font-style: SemiBold 20px/24px Montserrat;
  &.current-page {
    color: grey;
    /* border: 3px solid rgb(1, 1, 1);
    border-top-left-radius: 100% 200%;
    border-top-right-radius: 100% 200%;
    margin-top: 30px; */
  }
`;

const HamburgerMenu = styled(HamburgerSpin)`
  position: absolute;
  left: 0;
  outline: none;
  display: none;
  @media (max-width: 400px) {
    display: block;
  }
`;

const MobileNavigation = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  height: 250px;
  width: 100%;
  height: 100vh;
  background: white;
  opacity: 0.9;
  z-index: 2;

  a {
    margin-bottom: 32px;
    font-size: 20px;
    font-weight: bold;
  }
`;
