import React from 'react';
import styles from './Header.module.css';
import HeaderTitle from './__title/HeaderTitle';

const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderTitle />
    </div>
  );
};

export default Header;
