import React from "react";
import styled, { css } from "styled-components";

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: ${p => p.mB && p.mB};
  ${p => {
    return (
      p.textCenter &&
      css`
        text-align: center;
      `
    );
  }};
`;

export const Text = styled.div`
  font-size: 12px;
  font-weight: 400;
`;
