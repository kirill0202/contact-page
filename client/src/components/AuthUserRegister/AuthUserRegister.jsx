import React, { useEffect } from 'react';
import './AuthUserRegister.scss';
import {useMessage} from '../../hooks/message.errors';
import AuthUserRegisterFormContainer from './AuthUserRegisterForm/AuthUserRegisterForm';
import { useHttp } from '../../hooks/http.hook';


const AuthUserRegisterForm = () => {
     const message = useMessage();
     const {loading, error, request, clearError} = useHttp();
     const handleRegisterForm = async (values)=> {
          const registerFormValue = {
               email: values.email,
               password: values.password
          }
      try{
          const data = await request('/api/auth/register', 'POST', {...registerFormValue})
          message(data.message)
      }catch(e){}

     }
     useEffect(()=> {
       message(error)
       clearError()
     }, [error, clearError])
     return(
        <div className="row form">
          <AuthUserRegisterFormContainer onSubmit={handleRegisterForm} disabled={loading}/>
       </div>
     )
}
export default  AuthUserRegisterForm;