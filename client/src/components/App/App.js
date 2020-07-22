import React from 'react';
import 'materialize-css';
import './App.css';
import { useRoutes } from '../../pages/routes';

function App() {
  const routes = useRoutes(false)
  return (
    <div className="App">
     {routes}
    </div>
  );
}

export default App;
