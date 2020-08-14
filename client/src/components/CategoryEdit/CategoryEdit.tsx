import React, { FC } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { actionUpdateTask } from '../../store/actions/actionsTask/actionUpdateTask';
import { useHistory } from 'react-router-dom';
import './CategoryEdit.scss';

type categoryTaskType = {
    title: string,
    categoryId: number,
    matchTaskId: number,
    props: any
}

const CategoryEdit: FC<categoryTaskType> = ({ title, categoryId, matchTaskId, props}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const moveCategoryHandler = ()=> {
        const moveTask: any = {
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
                   <Button title="move to category" classnamestyle="category__button-default" onClick={moveCategoryHandler} {...props}/>
                </div>
            </div>
        </li>
    )
}
export default CategoryEdit;