import React, { useState } from 'react';
import styles from './TotalPage.module.css';

const TotalPage = () => {
  const [value, setValue] = useState(10);

  return (
    <div className={styles.totalPage__wrapper}>
      <p className={styles.totalPage__text}>Количество карточек на странице</p>
      <input
        value={value}
        className={styles.totalPage__input}
        onChange={event => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export default TotalPage;
