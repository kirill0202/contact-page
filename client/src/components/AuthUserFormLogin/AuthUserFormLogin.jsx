import React, { useEffect, useContext } from 'react';
import './AuthUserFormLogin.scss';
import AuthUserLoginContainer from './AuthUserLogin/AuthUserLogin';
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.errors';
import { AuthContext } from '../../context/AuthContext';

const AuthUserFormLogin = () => {
    const auth = useContext(AuthContext)
    const {loading, error, request, clearError} = useHttp();
    const message = useMessage();
    const handleAuthForm = async (values)=> {
       const inputValueForm = {
           email: values.email,
           password: values.password
       }
       try{
        const data = await request('/api/auth/login', 'POST', {...inputValueForm});
        auth.login(data.token, data.userId)
        message(data.message)
       }catch(e){}
    }
    useEffect(()=> {
        message(error)
        clearError()
      }, [error, clearError])
    return (
        <div className="row form">
           <AuthUserLoginContainer onSubmit={handleAuthForm} disabled={loading}/>
        </div>
    )
}
export default AuthUserFormLogin;