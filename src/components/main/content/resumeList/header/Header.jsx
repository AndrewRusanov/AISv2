import React from 'react';
import styles from './Header.module.css';
import HeaderTitle from './__title/HeaderTitle';
import HeaderInputbox from './__inputbox/HeaderInputbox';
import Tags from './__tags/HeaderTags';

const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderTitle />
      <HeaderInputbox />
      <Tags />
    </div>
  );
};

export default Header;
