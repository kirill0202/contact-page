import { REMOVE_CATEGORY } from "../../types/types"


type actionRemoveCategoryType = {
    type: typeof REMOVE_CATEGORY
    payload: number,
}
export const actionRemoveCategory = (categoryId: number): actionRemoveCategoryType => {
    return {
       type: REMOVE_CATEGORY,
       payload: categoryId
    }
}
