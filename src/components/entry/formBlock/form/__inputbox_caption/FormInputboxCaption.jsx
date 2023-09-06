import React from 'react';
import styles from './FormInputboxCaption.module.css';

const FormInputboxCaption = props => {
  const getTextForInput = props => {
    if (props.type.toLowerCase() === 'login') {
      return 'Логин';
    } else if (props.type.toLowerCase() === 'password') {
      return 'Пароль';
    }
  };

  return <p className={styles.caption}>{getTextForInput(props)}</p>;
};

export default FormInputboxCaption;
