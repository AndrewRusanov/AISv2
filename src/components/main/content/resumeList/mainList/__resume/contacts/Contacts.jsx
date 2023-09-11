import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.contacts__container}>
      <h4 className={styles.contacts__title}>+7 (999) 999-99-99</h4>
      <p className={styles.contacts__subtitle}>namemailname_mailname@mail.ru</p>
    </div>
  );
};

export default Contacts;
