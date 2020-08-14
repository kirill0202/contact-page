import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { pathLogin } from '../../../path/path';
import Input from '../../Input/Input';
import Button from '../../Button/Button';



const AuthUserRegisterForm = ({handleSubmit , disabled}) => {
   return (
       <form onSubmit={handleSubmit} className="card-panel teal lighten-2">
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
                  <Link to={pathLogin}>
                    <Button title={'Нажмите , чтобы войти в систему'} type="button"/>
                  </Link>
                    <Button title={'Регистрация'} classnamestyle={'cyan accent-4 form__button-sumbit'} disabled={disabled}/>
                </div>
            </div>
       </form>
   )
}
const AuthUserRegisterFormContainer = reduxForm({
    form: 'AuthUserRegisterForm'
})(AuthUserRegisterForm);

export default AuthUserRegisterFormContainer;