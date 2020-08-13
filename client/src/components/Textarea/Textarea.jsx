import React from 'react';


const Textarea = ({props,input, value, onChange, classnamestyle}) => {
    return (
        <textarea
        {...props}
        onChange={onChange}
        value={value}
        {...input}
        className={classnamestyle}
        />
    )
}
export default Textarea;
