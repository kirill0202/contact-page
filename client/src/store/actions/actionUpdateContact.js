import { UPDATE_CONTACT } from "../types/types"

export const actionUpdateContact = (updateContact) => {
    return {
        type: UPDATE_CONTACT,
        payload: updateContact
    }
}