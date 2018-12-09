import React, { Component } from "react";
import styled from "styled-components";

const Block = styled.div`
  margin-top: 20px;
`;

class GameInfo extends Component {
  render() {
    return (
      <Block>
        <div>
          there will be some info about game
          {
            //TODO: status
          }
        </div>
        <ol>
          {
            //TODO: history
          }
        </ol>
      </Block>
    );
  }
}

export default GameInfo;
