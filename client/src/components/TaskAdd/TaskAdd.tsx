import React, { FC } from 'react';
import Button from '../Button/Button';
import { useState } from 'react';
import { actionAddTask } from '../../store/actions/actionsTask/actionAddTask';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { pathCategory } from '../../path/path';
import Input from '../Input/Input';
import './TaskAdd.scss';
import { AnyARecord } from 'dns';


type TaskAddProps = {
    props: any,
}


const TaskAdd: FC<TaskAddProps> = ({props}) => {
    const [value, setValue]= useState('');
    const match: any = useRouteMatch(pathCategory);
    const dispatch = useDispatch();

    const categoryId = match ? +match.params.id : match;


    const handlerInput = (event: any): void => {
        setValue(event.target.value)
    }
    const addnewTask = () => {
        if(!categoryId){
            return console.log('Категория должна быть выбранна')
        }
        const newTask: any ={
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
            <Input 
            placeholder="task add" 
            classnamestyle="task__input" 
            value={value} 
            {...props}
            onChange={handlerInput}/>
            <Button 
            {...props}
            title="Add" 
            classnamestyle="task__button" 
            onClick={addnewTask}
            />
        </div>
    )
}
export default TaskAdd;