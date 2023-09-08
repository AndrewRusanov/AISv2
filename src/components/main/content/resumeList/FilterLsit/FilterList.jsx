import React from 'react';
import styles from './FilterList.module.css';
import FilterListItem from './__item/FilterListItem';

const FilterList = () => {
  return (
    <div className={styles.filterlist}>
      <FilterListItem value="Имя" />
      <FilterListItem value="Должность и стаж" />
      <FilterListItem value="Контакты" />
      <FilterListItem value="Желаемая ЗП" />
      <FilterListItem value="Статус" />
    </div>
  );
};

export default FilterList;
