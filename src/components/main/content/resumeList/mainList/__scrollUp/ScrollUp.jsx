import React from 'react';
import styles from './ScrollUp.module.css';
import image from '../../../../../../images/scrollUp_MainList.png';

const ScrollUp = () => {
  return (
    <button
      className={styles.scrollUp__button}
      type="button"
      onClick={() => {
        document.documentElement.scrollTop = 0;
      }}
    >
      <img src={image} />
    </button>
  );
};

export default ScrollUp;
