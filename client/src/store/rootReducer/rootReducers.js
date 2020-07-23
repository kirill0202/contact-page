import {combineReducers} from 'redux';
import { reducer as formReducer } from "redux-form";
import contactReducer from './contactReducer';
import modalReducer from './modalReducer';

export const rootReducers = combineReducers({
    contactReducer: contactReducer,
    modal: modalReducer,
    form: formReducer
})