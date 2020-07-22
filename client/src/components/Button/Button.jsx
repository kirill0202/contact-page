import React from 'react';
import classNames from 'classnames';


const Button = ({ title , classnamestyle, type , disabled}) => {
    return (
        <button
         type={type}
         className={classNames("btn waves-effect waves-light", classnamestyle)} 
         type="submit" 
         disabled={disabled}
         name="action">
             {title} 
        </button>
    )
}
export default Button;