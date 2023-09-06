import React from 'react';
import styles from './Form.module.css';
import FormHeadline from './__headline/FormHeadline';
import FormSubtitle from './__subtitle/FormSubtitle';
import FormInputboxLogin from './__inputbox_login/FormInputboxLogin';
import FormInputboxPassword from './__inputbox_password/FormInputboxPassword';
import FormLoginButton from './__loginButton/FormLoginButton';

const Form = () => {
  return (
    <form className={styles.form}>
      <FormHeadline />
      <FormSubtitle />
      <FormInputboxLogin />
      <FormInputboxPassword />
      <FormLoginButton />
    </form>
  );
};

export default Form;
