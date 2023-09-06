import React from 'react';
import styles from './SidebarHideBtn.module.css';

const SidebarHideBtn = props => {
  return (
    <button className={props.style} onClick={() => props.hideSidebar()}>
      <img className={styles.btn__hide_image} src={props.link} alt="Свернуть" />
    </button>
  );
};

export default SidebarHideBtn;
