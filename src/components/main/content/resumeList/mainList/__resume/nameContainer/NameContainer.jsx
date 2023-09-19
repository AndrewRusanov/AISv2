import React from 'react';
import styles from './NameContainer.module.css';
import image from '../../../../../../../images/dog_user.png';

const NameContainer = props => {
  return (
    <div className={styles.name__container}>
      <img className={styles.name__img} src={image} alt="Изображение панды" />
      <div>
        <h4 className={styles.name__title}>{props.name}</h4>
        <p className={styles.name__subtitle}>
          {props.age} лет, {props.city}
        </p>
      </div>
      {/* Комментарии */}
    </div>
  );
};

export default NameContainer;
