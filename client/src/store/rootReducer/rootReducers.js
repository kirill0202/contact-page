import {combineReducers} from 'redux';
import { reducer as formReducer } from "redux-form";
import modalReducer from './modalReducer.ts';
import categoryReducer from './categoryReducer.ts';
import taskReducer from './taskReducer.ts';

export const rootReducers = combineReducers({
    modal: modalReducer,
    categoryReducer: categoryReducer,
    taskReducer: taskReducer,
    form: formReducer
})