import React from 'react';
import styles from './EntryPage.module.css';
import ImageBlock from './imageBlock/ImageBlock';
import FormBlock from './formBlock/FormBlock';

const EntryPage = () => {
  return (
    <div className={styles.page}>
      {/* Блок с формой */}
      <FormBlock />
      <ImageBlock />
    </div>
  );
};

export default EntryPage;
