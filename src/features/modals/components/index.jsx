import React, { Component } from "react";
import { connect } from "react-redux";

import * as types from "../logic/types";
import LetsPlay from "../components/LetsPlay";

const MODAL_TYPES = {
  [types.LETS_PLAY]: LetsPlay
};

class RootModal extends Component {
  render() {
    const { modalType, isOpen, modalProps } = this.props;

    if (!modalType) {
      return null;
    }

    const ModalContent = MODAL_TYPES[modalType];

    return <ModalContent {...modalProps} isOpen={isOpen} />;
  }
}

export default connect(state => state.modal)(RootModal);
