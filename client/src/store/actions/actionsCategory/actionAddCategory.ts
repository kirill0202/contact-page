import {ADD_CATEGORY} from '../../types/types';

type actionAddCategoryType = {
    type: typeof ADD_CATEGORY,
    payload: string | number,
}
export const actionAddCategory = (newCategory: any): actionAddCategoryType => {
    return {
        type: ADD_CATEGORY,
        payload: newCategory
    }
}