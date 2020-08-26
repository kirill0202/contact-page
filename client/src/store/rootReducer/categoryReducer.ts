import { ADD_CATEGORY, SET_CATEGORY } from "../types/types";


type initialStateType = typeof initialState

type categoryType = {
    title: string,
    categoryId: number
}
const initialState = {
    category: [
    ] as Array<categoryType>,
};

const categoryReducer = (state = initialState, action: any):initialStateType  => {
    switch (action.type) {
        case ADD_CATEGORY: 
         return {...state, category: [...state.category, action.payload]}
        case SET_CATEGORY: 
        return {...state, category: action.payload}
        default:
            return state
    }
}

export const categoryReducerThunk = (dispatch: any) => {
  
}
export default categoryReducer;