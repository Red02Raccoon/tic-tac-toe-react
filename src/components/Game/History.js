import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div``;
const BtnSeeMore = styled.button`
  border: 1px solid #ccc;
  padding: 2px 4px;
  border-radius: 5px;
  min-width: 70px;
`;
const List = styled.ol`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;
  &.open {
    max-height: 350px;
  }
`;
class GameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { moves } = this.props;

    return (
      <Fragment>
        <Header>
          <Title>History</Title>
          <BtnSeeMore onClick={this.handleClick}>
            {this.state.isOpen ? "hide" : "see more"}
          </BtnSeeMore>
        </Header>
        <List className={this.state.isOpen && "open"}>{moves}</List>
      </Fragment>
    );
  }
}

export default GameInfo;
