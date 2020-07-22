import React from 'react';


const Input = ({ input, type, props, placeholder, id, classnamestyle, value})=> {
    return(
        <input 
        {...props}
        {...input}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        className={classnamestyle}
        />
    )
}
export default Input;