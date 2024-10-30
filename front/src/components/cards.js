import React from 'react';
import styles from '../assets/css/cards.css';

const CardConsulta = () => {
  return (
    <div className={styles['card-consulta']}>
      <h3><i className="fa-solid fa-magnifying-glass"></i> Consultar</h3>
      <h4>Consultar por Proprietário, Arma ou Documento de Publicação.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

const CardImprimir = () => {
  return (
    <div className={styles['card-imprimir']}>
      <h3><i className="fa-solid fa-print"></i> Imprimir</h3>
      <h4>Imprimir CRAF ou relatórios do sistema.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

const CardCadastrarArma = () => {
  return (
    <div className={styles['card-cadastrar-arma']}>
      <h3><i className="fa-solid fa-pen-to-square"></i> Cadastrar Armamento</h3>
      <h4>Cadastrar novo armamento.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

const CardReceberCRAF = () => {
  return (
    <div className={styles['card-receber-craf']}>
      <h3><i className="fa-solid fa-file"></i> Receber CRAF</h3>
      <h4>Receber Certificado de Registro de Arma de Fogo.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

const CardSlcCompra = () => {
  return (
    <div className={styles['card-solicitar-compra']}>
      <h3><i className="fa-solid fa-code-pull-request"></i> Solicitar Autorização de Compra</h3>
      <h4>Requerer autorização para a compra de armamento.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

const CardSlcCRAF = () => {
  return (
    <div className={styles['card-solicitar-craf']}>
      <h3><i className="fa-solid fa-code-pull-request"></i> Solicitar CRAF</h3>
      <h4>Requerer Certificado e Registro de Arma de Fogo.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

const CardSlcTransf = () => {
  return (
    <div className={styles['card-solicitar-transferencia']}>
      <h3><i className="fa-solid fa-right-left"></i> Solicitar Transferência</h3>
      <h4>Transferir um armamento jã vinculado.</h4>
      <p>Clique aqui <i className="fa-solid fa-arrow-right"></i></p>
    </div>
  );
};

export { CardConsulta, CardImprimir, CardCadastrarArma, CardReceberCRAF, CardSlcCompra, CardSlcCRAF, CardSlcTransf };