import React, { Component } from "react";
import styled from "styled-components";

import Board from "./Board";
// import History from "./History";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.no-active {
    pointer-events: none;
  }
`;

const BoardWrap = styled.div`
  padding: 10px 10px 5px;
  background-color: #00897b;
  border-radius: 10px;
  &.no-active {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Status = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

// const Step = styled.button`
//   padding: 5px 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   min-width: 150px;
//   display: inline-block;
//   &:hover {
//     background-color: #ccc;
//   }
// `;

// const StepItem = styled.li`
//   margin-bottom: 5px;
// `;
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // const moves = history.map((step, move) => {
    //   const desc = move ? "Go to move #" + move : "Go to game start";
    //   return (
    //     <StepItem key={move}>
    //       <Step onClick={() => this.jumpTo(move)}>{desc}</Step>
    //     </StepItem>
    //   );
    // });

    let status;
    let isActive = true;
    if (winner) {
      status = "Winner: " + winner;
      isActive = false;
    } else if (this.state.stepNumber !== 9) {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    } else {
      status = "The game is over";
      isActive = false;
    }

    return (
      <Block>
        <Status>{status}</Status>
        <BoardWrap className={!isActive && "no-active"}>
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </BoardWrap>

        {/* <History moves={moves} /> */}
      </Block>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default Game;
