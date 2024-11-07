import React from 'react';
import '../assets/css/main.css';
import '../assets/fonts/fontawesome/css/all.min.css';
import MainUSER from '../components/main-USER'; 

const Main = () => { // add verificação quando db estiver pronto (main-USER or main-ADM)
  return (
    <div className='container-principal'> 
      <MainUSER /> 
    </div>
  );
};

export default Main;
