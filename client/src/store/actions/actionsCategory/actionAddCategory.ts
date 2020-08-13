import {ADD_CATEGORY} from '../../types/types';

type actionAddCategoryType = {
    type: typeof ADD_CATEGORY,
    payload: string
}
export const actionAddCategory = (newCategory: string): actionAddCategoryType => {
    return {
        type: ADD_CATEGORY,
        payload: newCategory
    }
}