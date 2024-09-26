import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/views/login';
import Main from '../src/views/main';
import HeaderLogin from '../src/components/headerL';
import HeaderMain from '../src/components/headerM';

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
            path="/principal"
            element={
              <>
                <HeaderMain />
                <Main />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
