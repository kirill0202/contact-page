import { SHOW_MODAL, HIDE_MODAL } from "../types/types";

type modalType = [];

const initialState = [] as Array<modalType>;
type initialStateType = typeof initialState;

const modalReducer = (modal = initialState, action: any): initialStateType => {
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
