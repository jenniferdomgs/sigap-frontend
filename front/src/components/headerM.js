import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo-DTIC.png';
import '../assets/css/headerM.css';

const HeaderMain = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // removendo o token do localStorage
    navigate('/'); 
  };

  return (
    <div className='header-main'>
      <div className='logo'>
        <img src={logo} alt="Logo DTIC" /> 
          <div className='title'>
              <h3>SIGAP</h3>
              <p>Sistema de Gerenciamento de Armas Particulares</p>
          </div>
      </div>
      <div className='nav'>
        <button><i className="fa-solid fa-caret-down"></i></button>
        <button onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i></button>
      </div>
    </div>
  );
};

export default HeaderMain;
