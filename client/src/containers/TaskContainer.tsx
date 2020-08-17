import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Task from '../components/Task/Task';
import { AppStateType } from '../store/rootReducer/rootReducers';
import { useRouteMatch, useLocation } from 'react-router-dom';


type UsersType = [];

type TaskContainerType ={
    filterTaskTitle: Array<UsersType>
    props: any

}
const TaskContainer: FC<TaskContainerType> = ({props}) =>{
    const task = useSelector((state: AppStateType)=> state.taskReducer.task);
    const location = useLocation();
    const match: any = useRouteMatch("/home/category/:id/");

    const searchParams = new URLSearchParams(location.search);
    const matchCategoryId = match ? +match.params.id : match;
   
    const getParamsUrlSearch = searchParams.get('search');
    const filterTaskTitle = getParamsUrlSearch ? task.filter((item)=> item.title.toLowerCase().includes(getParamsUrlSearch.toLowerCase())) : task;
    
    const taskElements = filterTaskTitle.map((item)=> {
        const isMatchId = item.categoryId === matchCategoryId;
        return  isMatchId ?  <Task key = {item.taskId} {...item} {...props}/> : isMatchId;
    })
   
    return <ul className="task__lists">
        {taskElements}
    </ul>;

}
export default TaskContainer;
