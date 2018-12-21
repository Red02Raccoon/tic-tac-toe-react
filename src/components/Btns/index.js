import React from "react";
import styled from "styled-components";

import closeIcon from "../../images/icons/close_black.svg";

const Button = styled.button`
  width: 40px;
  height: 40px;
  padding: 10px;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CloseBtn = props => {
  return (
    <Button>
      <Icon src={closeIcon} />
    </Button>
  );
};
