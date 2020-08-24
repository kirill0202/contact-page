import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../store/rootReducer/rootReducers';
import ProgressBar from '../components/ProgressBar/ProgressBar';



const ProgressBarContainer = () => {
    const task = useSelector((state: AppStateType) => state.taskReducer.task);
    const taskFilterDone = task.filter((item) => item.done);
    const percentCompleted: number = (100 * taskFilterDone.length) / task.length;

     return <ProgressBar percentCompleted={percentCompleted}/>
    
}
export default ProgressBarContainer;