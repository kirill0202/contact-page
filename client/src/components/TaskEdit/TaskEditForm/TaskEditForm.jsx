import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Textarea from '../../Textarea/Textarea';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const TaskEditForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="form__task">
            <div className="form__button">
               <Button title="edit" classnamestyle="button__edit" />
               <Button title="canel" classnamestyle="button__edit button__canel" type="button"/>
            </div>
            <div className="form__input-title">
                <Field
                    component={Input}
                    name="formTitle"
                    placeholder="title"
                    classnamestyle="form__input"
                />
            </div>
            <div className="form__input-checkbox">
                <Field
                    component={Input}
                    type="checkbox"
                    name="formCheckbox"
                    
                />
            </div>
            <div className="form__input-texterea">
                <Field
                component={Textarea}
                name="formDescription"
                classnamestyle="form__texterea"
                />
            </div>
        </form>  )
}
const TaskEditFormContainer = reduxForm({
    form: 'TaskEditForm'
})(TaskEditForm);

export default TaskEditFormContainer