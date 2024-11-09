import React from 'react';
import styles from '../assets/css/cards.module.css';
import { CardReceberCRAF, CardSlcCompra, CardSlcCRAF, CardSlcTransf } from './cards.js';

const MainUSER = () => {
  return (
    <div className={styles['container-cards']}>
      <div className={styles['cards-grid']}>
        <CardSlcCompra />
        <CardSlcCRAF />
        <CardReceberCRAF />
        <CardSlcTransf />
      </div>
    </div>
  );
};

export default MainUSER;