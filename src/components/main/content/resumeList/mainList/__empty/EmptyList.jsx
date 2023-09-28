import React from 'react';
import styles from './EmptyList.module.css';
import { NavLink } from 'react-router-dom';

const EmptyList = () => {
  return (
    <div className={styles.emptyList__container}>
      <h2 className={styles.emptyList__title}>Список резюме пуст</h2>
      <p className={styles.emptyList__subtitle}>
        Для отклика на вакансии и получения приглашений на интервью необходимо{' '}
        <NavLink to="/" className={styles.emptyList__link}>
          создать резюме
        </NavLink>
        .
      </p>
    </div>
  );
};

export default EmptyList;
