import React from 'react';
import styles from './Experience.module.css';
import Tag from '../../../header/__tags/tag/Tag';

const Experience = props => {
  return (
    <div className={styles.experience__container}>
      <h4 className={styles.experience__title}>{props.jobTitle}</h4>
      <p className={styles.experience__subtitle}>{props.experience}</p>
      <Tag text="Стаж" count="8 лет 5 месяцев" />
    </div>
  );
};

export default Experience;
