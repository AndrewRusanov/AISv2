import React from 'react';
import styles from './EntryPage.module.css';
import ImageBlock from './imageBlock/ImageBlock';

const EntryPage = () => {
  return (
    <div className={styles.page}>
      {/* Блок с формой */}
      <ImageBlock />
    </div>
  );
};

export default EntryPage;
