import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useState } from 'react';
import { actionAddTask } from '../../store/actions/actionsTask/actionAddTask.ts';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import './TaskAdd.scss';


const TaskAdd = () => {
    const [value, setValue]= useState('');
    const match = useRouteMatch('/home/category/:id');
    const dispatch = useDispatch();

    const categoryId = match ?  +match.params.id : match;


    const handlerInput = (event)=> {
        setValue(event.target.value)
    }
    const addnewTask = () => {
        const newTask = {
            title: value,
            taskId: Date.now(),
            description: '',
            done: false,
            categoryId
        }
        dispatch(actionAddTask(newTask));
        setValue('')
    }
    return (
        <div>
            <Input placeholder="task add" 
            classnamestyle="task__input" 
            value={value} 
            onChange={handlerInput}/>
            <Button 
            title="Add" 
            classnamestyle="task__button" 
            onClick={addnewTask}/>
        </div>
    )
}
export default TaskAdd;