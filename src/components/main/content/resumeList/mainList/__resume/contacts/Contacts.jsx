import React from 'react';
import styles from './Contacts.module.css';

const Contacts = props => {
  return (
    <div className={styles.contacts__container}>
      <h4 className={styles.contacts__title}>{props.tel}</h4>
      <p className={styles.contacts__subtitle}>{props.mail}</p>
    </div>
  );
};

export default Contacts;
