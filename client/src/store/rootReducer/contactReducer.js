const { ADD_CONTACT } = require("../types/types");

const initialState = [];


const contactReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return state
        default:
            return state
    }
}
export default contactReducer;