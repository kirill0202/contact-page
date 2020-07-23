import React from 'react';


const Input = ({ input, type, props, placeholder, id, classnamestyle, value, onChange})=> {
    return(
        <input 
        {...props}
        {...input}
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={classnamestyle}
        />
    )
}
export default Input;