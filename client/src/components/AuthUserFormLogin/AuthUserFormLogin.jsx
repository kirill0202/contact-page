import React from 'react';
import './AuthUserFormLogin.scss';
import AuthUserLoginContainer from './AuthUserLogin/AuthUserLogin';

const AuthUserFormLogin = () => {
    const handleAuthForm = (values)=> {
       const inputValueForm = {
           email: values.email,
           password: values.password
       }
       console.log(inputValueForm)
    }
    return (
        <div className="row form">
           <AuthUserLoginContainer onSubmit={handleAuthForm}/>
        </div>
    )
}
export default AuthUserFormLogin;