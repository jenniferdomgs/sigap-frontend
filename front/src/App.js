import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/views/login';
import Main from './views/main';
import HeaderLogin from '../src/components/headerL';
import HeaderMain from '../src/components/headerM';
import SolicitarC from '../src/views/solicitarC';
import Perfil from '../src/views/perfil';
import PrivateRoute from '../src/components/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderLogin />
                <Login />
              </>
            }
          />
          <Route 
            path="/Principal" //existem 2 tipos de tela principal: add verificação
            element={
              <PrivateRoute element={
                <>
                  <HeaderMain />
                  <Main />
                </>
              } />
            }
          />
          <Route
            path='/SolicitarCompra'
            element={
              <PrivateRoute element={
                <>
                  <HeaderMain />
                  <SolicitarC />
                </>
              } />
            }
          />
          <Route
            path='/Perfil'
            element={
              <PrivateRoute element={
                <>
                  <HeaderMain />
                  <Perfil />
                </>
              } />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
