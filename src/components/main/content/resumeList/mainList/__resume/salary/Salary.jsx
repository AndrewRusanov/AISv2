import React from 'react';
import styles from './Salary.module.css';

const getSalary = salary => {
  if (salary === 0) {
    return <h4 className={styles.salary__title}>Не указано</h4>;
  } else {
    return <h4 className={styles.salary__title}>{salary} &#8381;</h4>;
  }
};

const Salary = props => {
  return getSalary(props.value);
};

export default Salary;
