import React from 'react';
import styles from '../assets/css/CardCadastrarArma.module.css';

const CardCadastrarArma = () => {
  return (
    <div className={styles['card-cadastrar-arma']}>
      <h3><i className="fa-solid fa-pen-to-square"></i> Cadastrar Armamento</h3>
      <h4>Cadastrar novo armamento.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

export default CardCadastrarArma;
