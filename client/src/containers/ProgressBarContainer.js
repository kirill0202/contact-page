import React from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { useSelector } from 'react-redux';



const ProgressBarContainer = () => {
    const task = useSelector((state) => state.taskReducer.task);
    const taskFilterDone = task.filter((item) => item.done);
    const percentCompleted = (100 * taskFilterDone.length) / task.length;
    return <ProgressBar percentCompleted={percentCompleted}/>
}
export default ProgressBarContainer