import React, { Component } from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import styled from "styled-components";

import { hideModal } from "../logic/actions";
import { CloseBtn } from "../../../components/Btns";

ReactModal.setAppElement("#root");

const CloseBtnModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

class Modal extends Component {
  render() {
    const { isOpen, hideModal } = this.props;

    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel="Контент модального окна"
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
        onRequestClose={hideModal}
        shouldFocusAfterRender
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(185, 185, 185, 0.75)"
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
            minWidth: "400px"
          }
        }}
      >
        {this.props.children}
        <CloseBtnModal onClick={hideModal} title="Закрыть (Esc)">
          <CloseBtn />
        </CloseBtnModal>
      </ReactModal>
    );
  }
}

export default connect(
  null,
  { hideModal }
)(Modal);
