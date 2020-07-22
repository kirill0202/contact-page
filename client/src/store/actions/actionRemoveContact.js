import { REMOVE_CONTACT } from "../types/types"

export const actionRemoveContact = (contactId) => {
    return {
       type: REMOVE_CONTACT,
       payload: contactId
    }
}