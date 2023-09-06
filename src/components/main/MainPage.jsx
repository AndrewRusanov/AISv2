import React from 'react';
import styles from './MainPage.module.css';
import Sidebar from './sidebar/Sidebar';

const MainPage = () => {
  return (
    <section className={styles.page}>
      <Sidebar />
      {/* Content (будет в руте) */}
    </section>
  );
};

export default MainPage;
