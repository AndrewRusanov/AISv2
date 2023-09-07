import React from 'react';
import styles from './MainPage.module.css';
import Sidebar from './sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Content from './content/Content';
import EntryPage from '../entry/EntryPage';

const MainPage = () => {
  return (
    <section className={styles.page}>
      <Sidebar />
      <Content />
      {/* Content (будет в руте, который должен быть в обертке) */}
      <Routes>
        <Route path="liked" />
        <Route exact={true} path="profile" element={<EntryPage />} />
      </Routes>
    </section>
  );
};

export default MainPage;
