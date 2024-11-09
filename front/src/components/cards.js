import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/cards.module.css';

const CardConsulta = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/'); // add rota quando pronta

  return (
    <div className={styles['card']}>
      <h3><i className="fa-solid fa-magnifying-glass"></i> Consultar</h3>
      <h4>Consultar por Proprietário, Arma ou Documento de Publicação.</h4>
      <button onClick={handleNavigate} className={styles['card-button']}>
        Clique aqui <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

const CardImprimir = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/'); // add rota quando pronta

  return (
    <div className={styles['card']}>
      <h3><i className="fa-solid fa-print"></i> Imprimir</h3>
      <h4>Imprimir CRAF ou relatórios do sistema.</h4>
      <button onClick={handleNavigate} className={styles['card-button']}>
        Clique aqui <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

const CardCadastrarArma = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/'); // add rota quando pronta

  return (
    <div className={styles['card']}>
      <h3><i className="fa-solid fa-pen-to-square"></i> Cadastrar Armamento</h3>
      <h4>Cadastrar novo armamento.</h4>
      <button onClick={handleNavigate} className={styles['card-button']}>
        Clique aqui <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

const CardReceberCRAF = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/receber-craf'); // add rota quando pronta

  return (
    <div className={styles['card']}>
      <h3><i className="fa-solid fa-file"></i> Receber CRAF</h3>
      <h4>Receber Certificado de Registro de Arma de Fogo.</h4>
      <button onClick={handleNavigate} className={styles['card-button']}>
        Clique aqui <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

const CardSlcCompra = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/SolicitarCompra'); 

  return (
    <div className={styles['card']}>
      <h3><i className="fa-solid fa-code-pull-request"></i> Solicitar Autorização de Compra</h3>
      <h4>Requerer autorização para a compra de armamento.</h4>
      <button onClick={handleNavigate} className={styles['card-button']}>
        Clique aqui <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

const CardSlcCRAF = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/SolicitarCRAF'); 

  return (
    <div className={styles['card']}>
      <h3><i className="fa-solid fa-code-pull-request"></i> Solicitar CRAF</h3>
      <h4>Requerer Certificado e Registro de Arma de Fogo.</h4>
      <button onClick={handleNavigate} className={styles['card-button']}>
        Clique aqui <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

const CardSlcTransf = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/'); // add rota quando pronta

  return (
    <div className={styles['card']}>
      <h3><i className="fa-solid fa-right-left"></i> Solicitar Transferência</h3>
      <h4>Transferir um armamento já vinculado.</h4>
      <button onClick={handleNavigate} className={styles['card-button']}>
        Clique aqui <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export { CardConsulta, CardImprimir, CardCadastrarArma, CardReceberCRAF, CardSlcCompra, CardSlcCRAF, CardSlcTransf };
