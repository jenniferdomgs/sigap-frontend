import React from 'react';
import styles from '../assets/css/CardReceberCRAF.module.css';

const CardReceberCRAF = () => {
  return (
    <div className={styles['card-receber-craf']}>
      <h3><i className="fa-solid fa-file"></i> Receber CRAF</h3>
      <h4>Receber Certificado de Registro de Arma de Fogo.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

export default CardReceberCRAF;