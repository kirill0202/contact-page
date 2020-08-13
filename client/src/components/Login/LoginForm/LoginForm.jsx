import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import { pathRegistation } from '../../../path/path';

const LoginForm = ({ handleSubmit, disabled}) => {
    return (
        <form className="card-panel teal lighten-2" onSubmit={handleSubmit}>
            <div className="row form__content">
                <div className="row">
                    <div className="input-field col s12">
                        <Field
                            component={Input}
                            id="email"
                            type="email"
                            name="email"
                            classnamestyle="validate form__content-input"
                        />
                        <label htmlFor="email" className="form__content-label">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <Field
                            component={Input}
                            id='password'
                            type='password'
                            name="password"
                            classnamestyle='validate  form__content-input'
                        />
                        <label htmlFor="password" className="form__content-label">Password</label>
                    </div>
                </div>
                <div className="row col s12">
                    <Button title={'Войти'} disabled={disabled}/>
                    <Link to={pathRegistation}>
                        <Button title={'Зарегистрироваться?'} classnamestyle={'cyan accent-4 form__button-sumbit'} type="button" />
                    </Link>
                </div>
            </div>
        </form>
    )
}
const LoginFormContainer = reduxForm({
    form: 'LoginForm'
})(LoginForm);
export default LoginFormContainer;