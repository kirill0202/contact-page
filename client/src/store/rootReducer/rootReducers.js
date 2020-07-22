import {combineReducers} from 'redux';
import { reducer as formReducer } from "redux-form";
import contactReducer from './contactReducer';

export const rootReducers = combineReducers({
    contact: contactReducer,
    form: formReducer
})