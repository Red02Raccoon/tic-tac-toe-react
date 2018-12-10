import React from "react";
import styled from "styled-components";

const Square = styled.button`
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 5px;
  font-size: 30px;
  line-height: 70px;
  height: 70px;
  width: 70px;
  margin: 5px;
  margin-right: -1px;
  margin-top: -1px;
  text-align: center;
  transition: background-color 0.3s;
  &:hover {
    background-color: #b2dfdb;
  }
`;

export default props => {
  return <Square onClick={props.onClick}>{props.value}</Square>;
};
