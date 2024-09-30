import React from 'react';
import '../assets/css/main.css'
import '../assets/fonts/fontawesome/css/all.min.css'

const Main = () => {
  return (
    <div className='container-principal'>
      <div className='container-consulta'>
        <h3><i class="fa-solid fa-magnifying-glass"></i> Consultar</h3>
        <h4>Consultar por Proprietário, Arma ou Documento de Publicação.</h4>
        <p>Clique aqui  <i class="fa-solid fa-arrow-right"></i></p>
      </div>

      <div className='container-cadArma'>
        <h3><i class="fa-solid fa-pen-to-square"></i>  Cadastrar Armamento</h3>
        <h4>Cadastrar novo armamento.</h4>
        <p>Clique aqui  <i class="fa-solid fa-arrow-right"></i></p>
      </div>

      <div className='container-imprimir'>
        <h3><i class="fa-solid fa-print"></i> Imprimir</h3>
        <h4>Imprimir CRAF ou relatórios do sistema.</h4>
        <p>Clique aqui  <i class="fa-solid fa-arrow-right"></i></p>
      </div>
    </div>
  );
};

export default Main;
