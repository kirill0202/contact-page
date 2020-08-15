import React, { FC } from 'react';
import TaskEditFormContainer from './TaskEditForm/TaskEditForm';
import CategoryContainer from '../../containers/CategoryContainer';
import { useDispatch } from 'react-redux';
import { actionUpdateTask } from '../../store/actions/actionsTask/actionUpdateTask';
import { useHistory } from 'react-router-dom';
import './TaskEdit.scss';

type TaskEditType = {
    title: string,
    description:string,
    done: boolean,
    taskId: number,
    categoryId: number
}
type TaskEditFormType = {
    title: string,
    description:string,
    done: boolean,
    taskId: number,
}
const TaskEdit: FC<TaskEditType & TaskEditFormType> = ({ title, description, done , taskId, categoryId}) => {
    const dispatch= useDispatch();
    const history = useHistory();

    const resetHandler = () => {
        history.push(`/home/category/${categoryId}`)
    }

    const handlerForm = (values: any): void => {
        const taskEditForm = {
            title: values.formTitle,
            done: values.formCheckbox,
            description: values.formDescription,
            taskId
        }
        dispatch(actionUpdateTask(taskEditForm));
        history.push(`/home/category/${categoryId}`)
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