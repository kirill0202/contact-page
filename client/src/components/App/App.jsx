import React from 'react';
import { useRoutes } from '../../pages/routes';
import { useAuthorized } from '../../hooks/authorized';
import { AuthContext } from '../../context/AuthContext';
import Modal from '../Modal/Modal';
import './App.scss';

function App() {
  const { token, login, userId, logout } = useAuthorized();
  const isAuthorized = !!token;
  const routes = useRoutes(true);
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthorized
    }}>
      <div className="app">
        {routes}
        <Modal/>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
