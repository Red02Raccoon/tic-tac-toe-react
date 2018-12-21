import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import * as types from "../../features/modals/logic/types";
import { showModal } from "../../features/modals/logic/actions";
import { calculateWinner } from "../../utils";

import Board from "./Board";
import History from "./History";

const Block = styled.div`
  position: relative;
  &.no-active {
    pointer-events: none;
  }
`;

const BoardBlock = styled.div`
  margin-right: 20px;
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

const HistoryBlock = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
`;

const Status = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

const Step = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-width: 150px;
  display: inline-block;
  &:hover {
    background-color: #ccc;
  }
`;

const StepItem = styled.li`
  margin-bottom: 5px;
`;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
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

  handleWinner = info => {
    const { line, winner } = info;
    setTimeout(() => {
      this.props.showModal({
        modalType: types.LETS_PLAY,
        isOpen: true,
        modalProps: { winner }
      });
    }, 300);
  };

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (
      (calculateWinner(squares) && calculateWinner(squares).winner) ||
      squares[i]
    ) {
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
    const winner =
      calculateWinner(current.squares) &&
      calculateWinner(current.squares).winner;
    const line =
      calculateWinner(current.squares) && calculateWinner(current.squares).line;

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <StepItem key={move}>
          <Step onClick={() => this.jumpTo(move)}>{desc}</Step>
        </StepItem>
      );
    });

    let status;
    let isActive = true;
    if (winner) {
      status = (
        <div>
          Winner: <b>{winner}</b>
        </div>
      );
      isActive = false;

      this.handleWinner(calculateWinner(current.squares));
    } else if (this.state.stepNumber !== 9) {
      status = (
        <div>
          Next player: <b>{this.state.xIsNext ? "X" : "O"}</b>
        </div>
      );
    } else {
      status = <b>The game is over</b>;
      isActive = false;
    }

    return (
      <Block>
        <BoardBlock>
          <Status>{status}</Status>
          <BoardWrap className={!isActive && "no-active"}>
            <Board
              line={!isActive && line}
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </BoardWrap>
        </BoardBlock>
        <HistoryBlock>
          <History moves={moves} />
        </HistoryBlock>
      </Block>
    );
  }
}

export default connect(
  null,
  { showModal }
)(Game);
