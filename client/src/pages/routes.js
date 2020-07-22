import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './HomePage';
import AuthPage from './AuthPage';
import AuthUserRegisterForm from '../components/AuthUserRegister/AuthUserRegister';

export const useRoutes = isAuthorized => {
   if(isAuthorized){
       return(
           <Switch>
             <Route path={'/Home'} exact> 
                 <HomePage/>
             </Route>
             <Redirect to='/Home'/>
           </Switch>
       )
   }
   return (
       <Switch>
            <Route path='/Login'>
                <AuthPage/>
            </Route>
            <Route path='/Register'>
                  <AuthUserRegisterForm/>
            </Route>
            <Redirect to="/Login"/>
       </Switch>
   )
}