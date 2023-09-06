import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './FormLoginButton.module.css';

const FormLoginButton = () => {
  return (
    <NavLink to="mainPage">
      <button className={styles.login_button}>Войти</button>
    </NavLink>
  );
};

export default FormLoginButton;
