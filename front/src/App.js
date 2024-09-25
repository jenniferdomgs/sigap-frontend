import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from '../src/views/login';
import Main from '../src/views/main';

const App = () => {
  return (
    <Router>
      <Routes>  
        <Route path="/login" element={<Login />} />  
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
