import React from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { actionUpdateTask } from '../../store/actions/actionsTask/actionUpdateTask.ts';
import { useHistory } from 'react-router-dom';
import './CategoryEdit.scss';

const CategoryEdit = ({ title, categoryId, matchTaskId}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const moveCategoryHandler = () => {
        const moveTask = {
            taskId: matchTaskId,
            categoryId
        }
        history.push(`/home/category/${categoryId}`);
        dispatch(actionUpdateTask(moveTask));
    }
    return (
        <li className="category__list-edit">
            <div className="category__inner">
                <div className="category__content">
                    {title}
                </div>
                <div className="category__control">
                   <Button title="move to category" classnamestyle="category__button-default" onClick={moveCategoryHandler}/>
                </div>
            </div>
        </li>
    )
}
export default CategoryEdit;