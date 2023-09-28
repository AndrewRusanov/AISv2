import React from 'react';
import styles from './ResumeList.module.css';
import Header from './header/Header';
import FilterList from './FilterLsit/FilterList';
import MainLsit from './mainList/MainList';
import ImportPopup from './importPopup/ImportPopup';

const ResumeList = () => {
  return (
    <section className={styles.resumeList_wrapper}>
      <Header />
      <FilterList />
      <MainLsit />
      {/* <ImportPopup /> */}
    </section>
  );
};

export default ResumeList;
