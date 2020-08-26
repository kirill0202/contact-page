import { SET_CATEGORY } from "../../types/types"


export const actionSetCategory = (setCategory) => {
    return {
      type: SET_CATEGORY,
      payload: setCategory
    }
}