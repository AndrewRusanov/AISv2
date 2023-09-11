import React from 'react';
import styles from './ResumeList.module.css';
import Header from './header/Header';
import FilterList from './FilterLsit/FilterList';
import MainLsit from './mainList/MainList';

const ResumeList = () => {
  return (
    <section className={styles.resumeList_wrapper}>
      {/* Тут будет все,что касается списка резюме */}
      <Header />
      <FilterList />
      <MainLsit />
    </section>
  );
};

export default ResumeList;
