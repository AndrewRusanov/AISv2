import React from 'react';
import styles from './MainLsit.module.css';
import Resume from './__resume/Resume';
import initialList from './InitialList';

const MainLsit = () => {
  return (
    <section className={styles.resume__wrapper}>
      {initialList.map(item => {
        return <Resume info={item} />;
      })}
    </section>
  );
};
export default MainLsit;
