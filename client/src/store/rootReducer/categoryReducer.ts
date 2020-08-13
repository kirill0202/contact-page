import { ADD_CATEGORY } from "../types/types";


type initialStateType = typeof initialState

type categoryType = {
    title: string,
    categoryId: number
}
const initialState = {
    category: [
        {title: 'Покупки', categoryId: 1},
        {title: 'Фронденд', categoryId: 2}
    ] as Array<categoryType>,
};

const categoryReducer = (state = initialState, action: any):initialStateType  => {
    switch (action.type) {
        case ADD_CATEGORY: 
         return {...state, category: [...state.category, action.payload]}
        default:
            return state
    }
}
export default categoryReducer;