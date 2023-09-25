import React from 'react';
import styles from './MainLsit.module.css';
import Resume from './__resume/Resume';
import initialList from './InitialList';
import Navigate from './__navigate/Navigate';

const getContent = list => {
  if (!(list.length === 0)) {
    return (
      <section className={styles.resume__wrapper}>
        {list.map(item => {
          return <Resume info={item} />;
        })}
        <Navigate />
      </section>
    );
  } else {
    return (
      <section className={styles.resume__wrapper}>
        <div>Список резюме пуст</div>
      </section>
    );
  }
};

const MainLsit = () => {
  return <>{getContent(initialList)}</>;
};
export default MainLsit;
