import React from 'react';
import styles from './MainPage.module.css';
import Sidebar from './sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <section className={styles.page}>
      <Sidebar />
      <Outlet />
    </section>
  );
};

export default MainPage;
