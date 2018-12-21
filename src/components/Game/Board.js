import React, { Component } from "react";
import styled from "styled-components";

import Square from "./Square";

const Squares = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 223px;
  margin-left: -5px;
`;
// const Row = styled.div`
//   margin-left: -5px;
//   display: flex;
// `;
class Board extends Component {
  // renderSquare(i) {
  //   return (
  //     <Square
  //       value={this.props.squares[i]}
  //       onClick={() => this.props.onClick(i)}
  //     />
  //   );
  // }

  render() {
    console.log(this.props.line);

    return (
      <Squares>
        {this.props.squares.map((item, i) => {
          return (
            <Square
              key={i}
              value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)}
            />
          );
        })}
        {/* <Row>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </Row>
        <Row>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </Row>
        <Row>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </Row> */}
      </Squares>
    );
  }
}

export default Board;
