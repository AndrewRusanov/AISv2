import React from 'react';
import styles from './NameContainer.module.css';
import image from '../../../../../../../images/dog_user.png';

const getFullName = props => {
  return `${props.name} ${props.surname}`;
};

const getAge = props => {
  if (props?.age) {
    if (props.age % 10 === 1) {
      return `${props.age} год`;
    } else if (props.age % 10 >= 2 && props.age % 10 <= 4) {
      return `${props.age} года`;
    } else {
      return `${props.age} лет`;
    }
  }
};

const getCity = props => {
  if (props?.age && props?.city) {
    return `, ${props.city}`;
  } else if (!props?.age && props?.city) {
    return `${props.city}`;
  }
};

const NameContainer = props => {
  return (
    <div className={styles.name__container}>
      <img className={styles.name__img} src={image} alt="Изображение панды" />
      <div>
        <h4 className={styles.name__title}>{getFullName(props)}</h4>
        <p className={styles.name__subtitle}>
          {getAge(props)}
          {getCity(props)}
        </p>
      </div>
      {/* Комментарии */}
    </div>
  );
};

export default NameContainer;
