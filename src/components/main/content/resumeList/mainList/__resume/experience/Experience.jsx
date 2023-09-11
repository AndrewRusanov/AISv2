import React from 'react';
import styles from './Experience.module.css';
import Tag from '../../../header/__tags/tag/Tag';

const Experience = () => {
  return (
    <div className={styles.experience__container}>
      <h4 className={styles.experience__title}>Java-разработчик</h4>
      <p className={styles.experience__subtitle}>
        ООО ТПК «Комфорт». Старший разработчик пользовательских интерфейсов R-Vision, Август 2020 —
        по настоящее время
      </p>
      <Tag text="Стаж" count="8 лет 5 месяцев" />
    </div>
  );
};

export default Experience;
