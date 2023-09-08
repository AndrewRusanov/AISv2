import React from 'react';
import styles from './Tag.module.css';

const Tag = props => {
  return (
    <button className={styles.tag}>
      <p className={styles.tag__text}>{props.text}</p>
      <p className={styles.tag__text}>{props.count}</p>
    </button>
  );
};

export default Tag;
