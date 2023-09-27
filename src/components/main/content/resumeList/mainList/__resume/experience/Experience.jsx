import React from 'react';
import styles from './Experience.module.css';
import Tag from '../../../header/__tags/tag/Tag';

const getExperience = props => {
  if (props.exp.companyName && props.exp.description) {
    return `${props.exp.companyName}. ${props.exp.description}`;
  } else if (!props.exp.companyName && props.exp.description) {
    return `${props.exp.description}`;
  } else if (props.exp.companyName && !props.exp.description) {
    return `${props.exp.companyName}`;
  }
};

const getYears = (startDate, endDate) => {
  const years = endDate.getFullYear() - startDate.getFullYear();
  if (years === 1) {
    return years + ' год';
  } else if (years >= 2 && years <= 4) {
    return years + ' года';
  } else {
    return years + ' лет';
  }
};

const getMonths = (startDate, endDate) => {
  const months = Math.abs(endDate.getMonth() - startDate.getMonth());
  if (months === 0) {
    return '';
  } else if (months === 1) {
    return months + ' месяц';
  } else if (months >= 2 && months <= 4) {
    return months + ' месяца';
  } else {
    return months + ' месяцев';
  }
};

const getWorkPeriod = object => {
  if (object?.startDate && object?.endDate) {
    const end = new Date(object.endDate);
    const start = new Date(object.startDate);
    return <Tag text="Стаж" count={`${getYears(start, end)} ${getMonths(start, end)}`} />;
  }
};

const Experience = props => {
  return (
    <div className={styles.experience__container}>
      <h4 className={styles.experience__title}>{props.position}</h4>
      <p className={styles.experience__subtitle}>{getExperience(props)}</p>
      {getWorkPeriod(props.exp)}
    </div>
  );
};

export default Experience;
