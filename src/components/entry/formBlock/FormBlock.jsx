import React from 'react';
import styles from './FormBlock.module.css';
import Form from './form/Form';

const FormBlock = () => {
  return (
    <div className={styles.formBlcok}>
      <Form />
    </div>
  );
};

export default FormBlock;
