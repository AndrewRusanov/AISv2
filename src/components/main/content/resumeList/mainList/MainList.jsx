import React from 'react';
import styles from './MainLsit.module.css';
import Resume from './__resume/Resume';
import initialList from './InitialList.js';
import initialObject from './InitialObject.js';
import Navigate from './__navigate/Navigate';

const getObject = initObject => {
  if (initObject) {
    return (
      <section className={styles.resume__wrapper}>
        {initObject.content.map(item => {
          return <Resume info={item} />;
        })}
        <Navigate />
      </section>
    );
  } else {
    return <section className={styles.resume__wrapper}>Список резюме пуст</section>;
  }
};

const MainLsit = () => {
  return <>{getObject(initialObject)}</>;
};
export default MainLsit;
