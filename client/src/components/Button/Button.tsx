import React, { FC } from 'react';
import classNames from 'classnames';

type buttonTypes  = {
    title: string,
    classnamestyle: string,
    type: any,
    disabled: boolean,
    onClick: ()=> void;
}
const Button: FC<buttonTypes> = ({ title , classnamestyle, type , disabled, onClick}) => {
    return (
        <button
         type={type}
         className={classNames("btn waves-effect waves-light", classnamestyle)} 
         onClick={onClick}
         disabled={disabled}
         name="action">
             {title} 
        </button>
    )
}
export default Button;