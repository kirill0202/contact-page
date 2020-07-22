import { ADD_CONTACT } from "../types/types"

export const actionAddContact  = (newContact) => {
    return {
        type: ADD_CONTACT,
        payload: newContact
    }
}