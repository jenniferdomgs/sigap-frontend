import React from 'react';
import logo from '../assets/img/logo-DTIC.png';
import '../assets/css/headerM.css';

const HeaderMain = () => {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="Logo DTIC" /> 
          <div className='title'>
              <h3>SIGAP</h3>
              <p>Sistema de Gerenciamento de Armas Particulares</p>
          </div>
      </div>
      <div className='nav'>
        <button><i class="fa-solid fa-caret-down"></i></button>
        <button><i class="fa-solid fa-right-from-bracket"></i></button>
      </div>
    </header>
  );
};

export default HeaderMain;
