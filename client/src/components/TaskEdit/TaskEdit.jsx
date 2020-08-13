import React from 'react';
import TaskEditFormContainer from './TaskEditForm/TaskEditForm';
import CategoryContainer from '../../containers/CategoryContainer';
import { useDispatch } from 'react-redux';
import './TaskEdit.scss';
import { actionUpdateTask } from '../../store/actions/actionsTask/actionUpdateTask.ts';
import { useHistory } from 'react-router-dom';

const TaskEdit = ({ title, description, done , taskId, categoryId}) => {
    const dispatch= useDispatch();
    const history = useHistory();

    const resetHandler = () => {
        history.push(`/home/category/${categoryId}`)
    }

    const handlerForm = (values) => {
        const taskEditForm = {
            title: values.formTitle,
            done: values.formCheckbox,
            description: values.formDescription,
            taskId
        }
        dispatch(actionUpdateTask(taskEditForm));
        history.push(`/home/Category/${categoryId}`)
    }
    return (
        <div className="task__edit container">
            <div className="task__edit-cactegory">
                <CategoryContainer />
            </div>
            <div className="task__edit-form">
                <TaskEditFormContainer
                    onClick={resetHandler}
                    onSubmit={handlerForm}
                    initialValues={{
                        formTitle: title,
                        formDescription: description,
                        formCheckbox: done
                    }} />
            </div>
        </div>
    )
}
export default TaskEdit;