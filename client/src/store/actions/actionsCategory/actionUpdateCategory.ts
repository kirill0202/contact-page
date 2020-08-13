import { UPDATE_CATEGORY } from "../../types/types"


type actionUpdateCategoryType = {
    type: typeof UPDATE_CATEGORY,
    payload: string
}
export const actionUpdateCategory = (updateCategory: string):actionUpdateCategoryType  => {
    return {
        type: UPDATE_CATEGORY,
        payload: updateCategory
    }
}