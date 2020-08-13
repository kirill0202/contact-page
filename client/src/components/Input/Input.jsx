import React from 'react';


const Input = ({ input, type, value, props, placeholder, id, classnamestyle, onChange, checked})=> {
    return(
        <input 
        {...props}
        value={value}
        checked={checked}
        onChange={onChange}
        {...input}
        type={type}
        id={id}
        placeholder={placeholder}
        className={classnamestyle}
        />
    )
}
export default Input;