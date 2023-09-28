import React from 'react';
import styles from './EmptyList.module.css';
import { NavLink } from 'react-router-dom';

const EmptyList = () => {
  return (
    <div className={styles.emptyList__container}>
      <h2>Список резюме пуст</h2>
      <p>
        Для отклика на вакансии и получения приглашений на интервью необходимо{' '}
        <NavLink to="/">создать резюме</NavLink>.
      </p>
    </div>
  );
};

export default EmptyList;
