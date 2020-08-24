import React, { FC } from  'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { pathTaskEdit } from '../path/path';
import { AppStateType } from '../store/rootReducer/rootReducers';
import TaskEdit from '../components/TaskEdit/TaskEdit';


const TaskEditContainer = () => {
    const task = useSelector((state: AppStateType)=> state.taskReducer.task);
    const match: any = useRouteMatch(pathTaskEdit);
    const taskMatchId = match ?  +match.params.id : match;

    const taskData = task.find((item) => item.taskId === taskMatchId);

    return <TaskEdit {...taskData as any}/>
}
export default TaskEditContainer;