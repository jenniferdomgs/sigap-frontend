import React from 'react';
import styles from '../assets/css/cards.css';
import { CardConsulta, CardImprimir, CardCadastrarArma } from './cards.js';


const mainADM = () => {
  return (
    <div className={styles['admin-grid']}>
      <CardConsulta />
      <CardImprimir />
      <CardCadastrarArma />
    </div>
  );
};

export default mainADM;