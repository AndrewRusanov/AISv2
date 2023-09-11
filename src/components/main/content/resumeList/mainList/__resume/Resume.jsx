import React from 'react';
import styles from './Resume.module.css';
import NameContainer from './nameContainer/NameContainer';
import Experience from './experience/Experience';
import Contacts from './contacts/Contacts';
import Salary from './salary/Salary';

// TODO. Сделать массив-балванку, чтобы через map передавать туда нужные элементы

const Resume = () => {
  return (
    <div className={styles.resume__wrapper}>
      <NameContainer />
      <Experience />
      <Contacts />
      <Salary />
      {/* Статус */}
    </div>
  );
};

export default Resume;
