import React from 'react';
import styles from '../assets/css/CardConsulta.module.css';

const CardConsulta = () => {
  return (
    <div className={styles['card-consulta']}>
      <h3><i className="fa-solid fa-magnifying-glass"></i> Consultar</h3>
      <h4>Consultar por Proprietário, Arma ou Documento de Publicação.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

export default CardConsulta;
