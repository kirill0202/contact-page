import React from  'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { pathTaskEdit } from '../path/path';
import TaskEdit from '../components/TaskEdit/TaskEdit';



const TaskEditContainer = () => {
    const task = useSelector((state)=> state.taskReducer.task);
    const match = useRouteMatch(pathTaskEdit);
    const taskMatchId = match ?  +match.params.id : match;

    const taskData = task.find((item) => item.taskId === taskMatchId);

    return <TaskEdit {...taskData}/>
}
export default TaskEditContainer;