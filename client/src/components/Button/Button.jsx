import React from 'react';
import classNames from 'classnames';


const Button = ({ title , classnamestyle}) => {
    return (
        <button className={classNames("btn waves-effect waves-light", classnamestyle)} type="submit" name="action">{title}
        </button>
    )
}
export default Button;