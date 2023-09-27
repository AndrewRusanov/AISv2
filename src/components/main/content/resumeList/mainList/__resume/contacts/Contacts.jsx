import React from 'react';
import styles from './Contacts.module.css';

const getContactInfo = object => {
  if (object?.telephone && object?.mail) {
    return (
      <>
        <h4 className={styles.contacts__title}>{object.telephone}</h4>
        <p className={styles.contacts__subtitle}>{object.mail}</p>
      </>
    );
  } else if (!object?.telephone && object?.mail) {
    return <h4 className={styles.contacts__title}>{object.mail}</h4>;
  } else if (object?.telephone && !object?.mail) {
    return <h4 className={styles.contacts__title}>{object.telephone}</h4>;
  } else {
    return <h4 className={styles.contacts__title}>Нет данных</h4>;
  }
};

const Contacts = props => {
  return <div className={styles.contacts__container}>{getContactInfo(props.contacts)}</div>;
};

export default Contacts;
