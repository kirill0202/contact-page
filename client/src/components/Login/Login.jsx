import React, { useEffect, useContext, FC } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.errors';
import { AuthContext } from '../../context/AuthContext';
import LoginFormContainer from './LoginForm/LoginForm';
import './Login.scss';



const Login = () => {
    const {login} = useContext(AuthContext);

    const {loading, error, request, clearError} = useHttp();
    const message = useMessage();
    
    const handleAuthForm = async (values)=> {
       const inputValueForm = {
           email: values.email,
           password: values.password
       }
       try{
        const data = await request('/api/auth/login', 'POST', {...inputValueForm});
        const {token, userId} = data
        login(token, userId)
        message(data.message)
       }catch(e){}
    }
    useEffect(()=> {
        message(error)
        clearError()
      }, [error, clearError])
    return (
        <div className="row form">
           <LoginFormContainer onSubmit={handleAuthForm} disabled={loading}/>
        </div>
    )
}
export default Login;