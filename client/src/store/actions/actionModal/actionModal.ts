import { SHOW_MODAL, HIDE_MODAL } from "../../types/types"


type initialActionType = {
    type: typeof SHOW_MODAL,
    payload: any
}

export const showModal = (showModal: any): initialActionType => {
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
