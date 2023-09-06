import React from 'react';
import styles from './FormInputboxLogin.module.css';
import FormInputboxCaption from '../__inputbox_caption/FormInputboxCaption';
import FormInputLogin from '../__input_login/FormInputLogin';

const FormInputboxLogin = () => {
  return (
    <div className={styles.inputbox_login}>
      <FormInputboxCaption type="login" />
      <FormInputLogin />
    </div>
  );
};

export default FormInputboxLogin;
