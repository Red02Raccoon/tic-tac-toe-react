import React from "react";
import styled from "styled-components";

const Square = styled.button`
  background: #fff;
  border: 1px solid #999;
  border-radius: 5px;
  margin: 5px;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  &:hover {
    background: #ddd;
  }
  &:focus {
    outline: none;
  }
`;

export default props => {
  return (
    <Square className="square" onClick={props.onClick}>
      {props.value}
    </Square>
  );
};
