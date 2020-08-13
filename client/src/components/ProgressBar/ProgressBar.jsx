import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({percentCompleted}) => {
    return (
        <div className="progressbar">
            <div className="progressbar__active" style={{ width: `${percentCompleted}%` }}>
            </div>
        </div>
    )
}
export default ProgressBar;