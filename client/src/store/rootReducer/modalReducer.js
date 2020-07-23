import { SHOW_MODAL, HIDE_MODAL } from "../types/types";


const initialState = [];

const modalReducer = (modal = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return [...modal, action.payload];
    case HIDE_MODAL:
      modal.splice(-1, 1);
      return [...modal];
    default:
      return modal;
  }
};
export default modalReducer;
