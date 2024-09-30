import React from 'react';
import logo from '../assets/img/logo-DTIC.png';
import '../assets/css/headerL.css';

const HeaderLogin = () => {
  return (
    <header>
        <img src={logo} alt="Logo DTIC" /> 
        <h3>SIGAP</h3>
    </header>
  );
};

export default HeaderLogin;
