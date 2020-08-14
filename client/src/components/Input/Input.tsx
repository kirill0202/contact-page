import React from 'react';

type InputTypes = {
    placeholder: any,
    classnamestyle: any;
    input: any,
    type: string,
    value: any,
    onChange: () => void,
    props: any,
    id: number,
    checked: boolean
}
const Input:React.FC<InputTypes> = ({ input, type, value, props, placeholder, id, classnamestyle, onChange, checked})=> {
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