import { SHOW_MODAL, HIDE_MODAL } from "../../types/types"



export const showModal = (showModal) => {
    return {
         type: SHOW_MODAL,
         payload: showModal
    }
}
export const hideModal = () => {
    return {
        type: HIDE_MODAL,
    }
}
