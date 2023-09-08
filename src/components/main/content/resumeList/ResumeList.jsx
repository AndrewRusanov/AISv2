import React from 'react';
import styles from './ResumeList.module.css';
import Header from './header/Header';
import FilterList from './FilterLsit/FilterList';

const ResumeList = () => {
  return (
    <section className={styles.resumeList_wrapper}>
      {/* Тут будет все,что касается списка резюме */}
      <Header />
      <FilterList />
      {/* Content */}
    </section>
  );
};

export default ResumeList;
