import React from 'react';
import styles from '../assets/css/CardSlcCompra.module.css';

const CardSlcCompra = () => {
  return (
    <div className={styles['card-solicitar-compra']}>
      <h3><i className="fa-solid fa-code-pull-request"></i> Solicitar Autorização de Compra</h3>
      <h4>Requerer autorização para a compra de armamento.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

export default CardSlcCompra;