import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './HomePage';
import Registration from '../components/Registration/Registration';
import Login from '../components/Login/Login';
import { pathHome, pathLogin, pathRegistation, pathTaskEdit } from '../path/path';
import TaskEditContainer from '../containers/TaskEditContainer';

export const useRoutes = isAuthorized => {
   if(isAuthorized){
       return(
           <Switch>
             <Route path={pathTaskEdit}>
               <TaskEditContainer/>
             </Route>
             <Route path={pathHome}> 
                 <HomePage/>
             </Route>
             <Redirect to={pathHome} />
           </Switch>
       )
   }
   return (
       <Switch>
            <Route path={pathLogin}>
                 <Login/>
            </Route>
            <Route path={pathRegistation}>
                  <Registration/>
            </Route>
            <Redirect to={pathLogin}/>
       </Switch>
   )
}