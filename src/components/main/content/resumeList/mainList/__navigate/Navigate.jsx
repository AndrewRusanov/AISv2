import React from 'react';
import styles from './Navigate.module.css';
import PageList from './__pageLsit/PageList';
import TotalPage from './__totalPage/TotalPage';

const Navigate = () => {
  return (
    <div className={styles.navigate__wrapper}>
      <PageList />
      <TotalPage />
    </div>
  );
};

export default Navigate;
