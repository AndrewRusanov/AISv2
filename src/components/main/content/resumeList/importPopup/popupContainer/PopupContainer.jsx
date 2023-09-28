import React from 'react';
import styles from './PopupContainer.module.css';

const PopupContainer = () => {
  return (
    <div className={styles.popup__container}>
      <h2>Импортировать резюме</h2>
      <h3>Укажите источник для загрузки резюме и загрузите необходимые файлы</h3>
      <p>Источник</p>
      <div></div>
    </div>
  );
};

export default PopupContainer;
