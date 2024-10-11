import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/views/login';
import Main from '../src/views/main';
import HeaderLogin from '../src/components/headerL';
import HeaderMain from '../src/components/headerM';
import SolicitarC from '../src/views/solicitarC';
import Perfil from '../src/views/perfil';


function App() {
  return (
    <Router>
      <div>
        <Routes> AUTORIZAÇÃO DE COMPRA
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
            path="/principal"
            element={
              <>
                <HeaderMain />
                <Main />
              </>
            }
          />
          <Route
            path='/SolicitarCompra'
            element={
              <>
                <HeaderMain />
                <SolicitarC />
              </>
            }
          />
          <Route
            path='/Perfil'
            element={
              <>
                <HeaderMain />
                <Perfil />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
