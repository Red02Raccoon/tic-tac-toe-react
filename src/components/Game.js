import React, { Component } from "react";
import styled from "styled-components";

import Board from "./Board";
import GameInfo from "./GameInfo";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Game extends Component {
  render() {
    return (
      <Block>
        <Board />
        <GameInfo />
      </Block>
    );
  }
}

export default Game;
