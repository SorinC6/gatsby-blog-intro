import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <Root>
      <Btn>Read More</Btn>
    </Root>
  );
};

export default Button;

const Root = styled.div`
  text-align: center;
`;

const Btn = styled.button`
  width: 140px;
  height: 38px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #3d86bf;
  border-radius: 32px;
  color: #3d86bf;
  text-align: center;
  font-size: 14px;
  margin-top: 100px;
  cursor: pointer;
`;