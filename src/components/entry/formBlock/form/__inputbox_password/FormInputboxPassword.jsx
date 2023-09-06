import React from 'react';
import styles from './FormInputboxPassword.module.css';
import FormInputboxCaption from '../__inputbox_caption/FormInputboxCaption';
import FromInputPassword from '../__input_password/FormInputPassword';

const FormInputboxPassword = () => {
  return (
    <div className={styles.inputbox_password}>
      <FormInputboxCaption type="password" />
      <FromInputPassword />
    </div>
  );
};

export default FormInputboxPassword;
