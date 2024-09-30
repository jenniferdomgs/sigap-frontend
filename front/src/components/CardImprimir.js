import React from 'react';
import styles from '../assets/css/CardImprimir.module.css';

const CardImprimir = () => {
  return (
    <div className={styles['card-imprimir']}>
      <h3><i className="fa-solid fa-print"></i> Imprimir</h3>
      <h4>Imprimir CRAF ou relatórios do sistema.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

export default CardImprimir;
