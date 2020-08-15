import {combineReducers} from 'redux';
import { reducer as formReducer } from "redux-form";
import modalReducer from './modalReducer';
import categoryReducer from './categoryReducer';
import taskReducer from './taskReducer';
import { FC } from 'react';



export const rootReducers = combineReducers({
    modal: modalReducer,
    categoryReducer: categoryReducer,
    taskReducer: taskReducer,
    form: formReducer
})