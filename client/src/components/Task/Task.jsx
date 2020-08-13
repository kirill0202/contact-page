import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionUpdateTask } from '../../store/actions/actionsTask/actionUpdateTask.ts';
import { Link } from 'react-router-dom';
import './Task.scss';

const Task = ({ title, done, taskId }) => {
    const [checkend, setChekend] = useState(done);
    const dispatch = useDispatch();
    const handlerCheckend = () => {
        setChekend(!checkend)
    }
    const updateTaskCheckend = () => {
        const updateTask = {
            done: !checkend,
            taskId
        }
        dispatch(actionUpdateTask(updateTask))
    }
    return (
        <li className="task__list-item">
            <div className="list__content">
                <div className="list__item-checkbox" onClick={updateTaskCheckend}>
                    <Input type="checkbox" checked={checkend} onChange={handlerCheckend} />
                </div>
                <div className="list__item-title">
                    {title}
                </div>
                <div className="list__item-edit">
                    <Link to={`/home/Category/TaskEdit/${taskId}`}>
                        <Button title="edit" classnamestyle="list__item-button" />
                    </Link>
                </div>
            </div>
        </li>
    )
}
export default Task;