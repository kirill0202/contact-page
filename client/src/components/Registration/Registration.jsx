import React, { useEffect } from 'react'
import {useMessage} from '../../hooks/message.errors';
import Registration from './RegistrationForm/RegistrationForm';
import { useHttp } from '../../hooks/http.hook';
import './Registration.scss';


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
          <Registration onSubmit={handleRegisterForm} disabled={loading}/>
       </div>
     )
}
export default  AuthUserRegisterForm;