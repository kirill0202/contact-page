import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './HomePage';
import AuthPage from './AuthPage';

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
            <Redirect to="/Login"/>
       </Switch>
   )
}