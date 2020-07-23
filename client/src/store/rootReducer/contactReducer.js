const { ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT } = require("../types/types");

const initialState = {
    contact: [{ title: 'contact-1', id: 1 }]
};


const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return { ...state, contact: [...state.contact, action.payload] }
        case REMOVE_CONTACT:
            return {...state, contact: state.contact.filter((item) => item.id !== action.payload)}
        case UPDATE_CONTACT:
            return {...state, contact: state.contact.map((contact) => contact.id === action.payload.id ? 
                {...contact, ...action.payload}
         : contact)}
        default:
            return state
    }
}
export default contactReducer;