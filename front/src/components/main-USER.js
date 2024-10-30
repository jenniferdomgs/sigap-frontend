import React from 'react';
import styles from '../assets/css/cards.css';
import { CardReceberCRAF, CardSlcCompra, CardSlcCRAF, CardSlcTransf } from './cards.js';

const mainUSER = () => {
  return (
    <div className={styles['user-grid']}>
      <CardSlcCompra />
      <CardSlcCRAF />
      <CardReceberCRAF />
      <CardSlcTransf />
    </div>
  );
};

export default mainUSER;