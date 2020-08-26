import React from 'react';
import CategoryAdd from '../CategoryAdd/CategoryAdd';
import TaskAdd from '../TaskAdd/TaskAdd';
import ProgressBarContainer from '../../containers/ProgressBarContainer';
import TaskContainer from '../../containers/TaskContainer';
import CategoryContainer from '../../containers/CategoryContainer';
import './Main.scss';




const Main = () => {
    return (
        <main className="container">
            <div className="todo__wrapper">
                <div className="todo__progressbar">
                    <ProgressBarContainer />
                </div>
                <div className="todo__group-add">
                    <CategoryAdd />
                    <TaskAdd />
                </div>
                <div className="todo__group">
                    <CategoryContainer/>
                    <TaskContainer />
                </div>
            </div>
        </main>
    )
}
export default Main;