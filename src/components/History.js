import React, { Component } from "react";
import styled from "styled-components";

const Block = styled.div`
  margin-top: 20px;
`;

class GameInfo extends Component {
  render() {
    const { moves } = this.props;

    return (
      <Block>
        <div>History</div>
        <ol>{moves}</ol>
      </Block>
    );
  }
}

export default GameInfo;
