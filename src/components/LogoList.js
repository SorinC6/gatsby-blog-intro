import React from "react";
import styled from "styled-components";

const LogoList = ({ logoData }) => {
  console.log(logoData);
  return (
    <Root>
      {logoData &&
        logoData.map((item, idx) => {
          //   return <Logo key={idx} image={item.image} link={item.link} />;
        })}
    </Root>
  );
};

export default LogoList;

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1440px;
  height: 145px;
  background: #f5f8fa 0% 0% no-repeat padding-box;
  margin-top: 231px;
`;
