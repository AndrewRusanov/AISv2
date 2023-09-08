import React from 'react';
import styles from './Searchingbox.module.css';

const Searchingbox = () => {
  return (
    <div className={styles.searchingbox}>
      <input placeholder="Поиск" className={styles.input} />
      <button className={styles.searchbtn}>Найти</button>
    </div>
  );
};

export default Searchingbox;
