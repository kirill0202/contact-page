import React from 'react';
import { useSelector } from 'react-redux';
import Task from '../components/Task/Task';
import { useRouteMatch, useLocation } from 'react-router-dom';


const TaskContainer = () =>{
    const task = useSelector((state)=> state.taskReducer.task);
    const location = useLocation();
    const match = useRouteMatch("/home/category/:id/");

    const searchParams = new URLSearchParams(location.search);
    const matchCategoryId = match ? +match.params.id : match;
   
    const getParamsUrlSearch = searchParams.get('search');
    const filterTaskTitle = getParamsUrlSearch ? task.filter((item)=> item.title.toLowerCase().includes(getParamsUrlSearch.toLowerCase())) : task;
    
    const taskElements = filterTaskTitle.map((item)=> {
        const isMatchId = item.categoryId === matchCategoryId;
        return  isMatchId ?  <Task key={item.taskId} {...item}/> : isMatchId;
    })
   
    return <ul className="task__lists">
        {taskElements}
    </ul>;

}
export default TaskContainer;
