import * as types from './types';

export function hideModal(payload) {
  return {
    type: types.HIDE_MODAL,
    payload: payload
  };
}

export function showModal(payload) {
  return {
    type: types.SHOW_MODAL,
    payload: payload
  };
}