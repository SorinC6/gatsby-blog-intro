import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
// import LogoSlider from "./LogoSlider";
import SliderTest from "./BackgroundSlider";

const LogoList = ({ logoData }) => {
  //console.log(logoData);
  return (
    <>
      <Root>
        {logoData &&
          logoData.map((item, idx) => {
            return <Logo key={idx} image={item.image} link={item.link} />;
          })}
      </Root>
      {/* <LogoSlider logoData={logoData} /> */}
      <SliderTest />
    </>
  );
};

export default LogoList;

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 145px;
  background: #f5f8fa 0% 0% no-repeat padding-box;
  margin-top: 231px;
  padding: 0 calc((100vw - 80vw) / 2);

  @media (max-width: 400px) {
    display: none;
  }
`;
