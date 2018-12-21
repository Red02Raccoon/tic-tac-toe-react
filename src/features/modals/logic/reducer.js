import * as types from "./types";

const initialState = {
  modalType: null,
  isOpen: false,
  modalProps: {}
};

function modal(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return { ...state, ...action.payload };
    case types.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}

export default modal;
