import React, { FC } from 'react';
import './ProgressBar.scss';

type ProgressBarType = {
    percentCompleted: number;
}
const ProgressBar: FC<ProgressBarType> = ({percentCompleted}) => {
    return (
        <div className="progressbar">
            <div className="progressbar__active" style={{ width: `${percentCompleted}%` }}>
            </div>
        </div>
    )
}
export default ProgressBar;