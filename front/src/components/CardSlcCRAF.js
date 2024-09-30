import React from 'react';
import styles from '../assets/css/CardSlcCRAF.module.css';

const CardSlcCRAF = () => {
  return (
    <div className={styles['card-solicitar-craf']}>
      <h3><i className="fa-solid fa-code-pull-request"></i> Solicitar CRAF</h3>
      <h4>Requerer Certificado e Registro de Arma de Fogo.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

export default CardSlcCRAF;