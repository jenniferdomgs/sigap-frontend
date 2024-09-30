import React from 'react';
import styles from '../assets/css/CardSlcTransf.module.css';

const CardSlcTransf = () => {
  return (
    <div className={styles['card-solicitar-transferencia']}>
      <h3><i className="fa-solid fa-right-left"></i> Solicitar Transferência</h3>
      <h4>Transferir um armamento jã vinculado.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

export default CardSlcTransf;