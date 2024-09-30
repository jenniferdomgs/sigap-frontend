import React from 'react';
import styles from '../assets/css/main.module.css';
import '../assets/fonts/fontawesome/css/all.min.css';
import CardConsulta from '../components/CardConsulta';
import CardCadastrarArma from '../components/CardCadastrarArma';
import CardImprimir from '../components/CardImprimir';

const Main = () => {
  return (
    <div className={styles['container-principal']}>
      <div className={styles['card-container.top']}>
        <CardConsulta />
        <CardCadastrarArma />
      </div>
      <div className={styles['card-container']}>
        <CardImprimir />
      </div>
    </div>
  );
};

export default Main;