import React from 'react';
import 'materialize-css';
import './App.css';
import { useRoutes } from '../../pages/routes';
import { useAuthorized } from '../../hooks/authorized';
import { AuthContext } from '../../context/AuthContext';
import Modal from '../Modal/Modal';


function App() {
  const { token, login, userId, logout } = useAuthorized();
  const isAuthorized = !!token;
  const routes = useRoutes(isAuthorized);

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthorized
    }}>
      
      <div className="App container">
        {routes}
        <Modal/>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
