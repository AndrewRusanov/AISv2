import React from 'react';
import styles from './Status.module.css';

const Status = () => {
  return (
    <div className={styles.status__container}>
      <div className={styles.status__circle}></div>
      <p className={styles.status__text}>Все</p>
    </div>
  );
};

export default Status;
