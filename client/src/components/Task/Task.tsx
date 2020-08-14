import React from 'react';
import Button from '../Button/Button';
import { useState } from 'react';
import { actionUpdateTask } from '../../store/actions/actionsTask/actionUpdateTask';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import './Task.scss';


type taskPropsType = {
    title: string,
    done: boolean,
    taskId: number,
    props: any
}

const Task: React.FC<taskPropsType> = ({ title, done, taskId, props }) => {

    const [checkend, setChekend] = useState(done);
    const dispatch = useDispatch();
    const handlerCheckend = () => {
        setChekend(!checkend)
    }
    const updateTaskCheckend = () => {
        const updateTask: any = {
            done: !checkend,
            taskId
        }
        dispatch(actionUpdateTask(updateTask))
    }
    return (
        <li className="task__list-item">
            <div className="list__content">
                <div className="list__item-checkbox" onClick={updateTaskCheckend}>
                    <Input type="checkbox" checked={checkend} onChange={handlerCheckend} {...props}/>
                </div>
                <div className="list__item-title">
                    {title}
                </div>
                <div className="list__item-edit">
                    <Link to={`/home/category/taskEdit/${taskId}`}>
                        <Button title="edit" classnamestyle="list__item-button" {...props}/>
                    </Link>
                </div>
            </div>
        </li>
    )
}
export default Task;