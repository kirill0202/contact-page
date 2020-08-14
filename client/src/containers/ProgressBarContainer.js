import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from '../components/ProgressBar/ProgressBar';



const ProgressBarContainer = () => {
    const task = useSelector((state) => state.taskReducer.task);
    const taskFilterDone = task.filter((item) => item.done);
    const percentCompleted = (100 * taskFilterDone.length) / task.length;

    return <ProgressBar percentCompleted={percentCompleted}/>
}
export default ProgressBarContainer