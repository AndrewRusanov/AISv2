import React from 'react';
import styles from './ImportPopup.module.css';
import PopupContainer from './popupContainer/PopupContainer';

const ImportPopup = () => {
  return (
    <div id="import" className={styles.importPopup}>
      <PopupContainer />
    </div>
  );
};

export default ImportPopup;
