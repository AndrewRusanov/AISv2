import React from 'react';
import styles from './Salary.module.css';

const getCurrency = str => {
  switch (str) {
    case 'рубли':
      return <>&#8381;</>;
    case 'доллары':
      return <>&#36;</>;
    case 'евро':
      return <>&#8364;</>;
    default:
      return <>&#8381;</>;
  }
};

const getSalary = (salary, currency) => {
  if (!salary) {
    return <h4 className={styles.salary__title}>Не указано</h4>;
  } else {
    return (
      <h4 className={styles.salary__title}>
        {salary} {getCurrency(currency)}
      </h4>
    );
  }
};

const Salary = props => {
  return getSalary(props.value, props.currency);
};

export default Salary;
