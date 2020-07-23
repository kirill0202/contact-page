import React from 'react';
import classNames from 'classnames';


const Button = ({ title , classnamestyle, type , disabled, onClick}) => {
    return (
        <button
         type={type}
         className={classNames("btn waves-effect waves-light", classnamestyle)} 
         type="submit" 
         onClick={onClick}
         disabled={disabled}
         name="action">
             {title} 
        </button>
    )
}
export default Button;