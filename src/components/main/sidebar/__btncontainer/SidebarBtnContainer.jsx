import React from 'react';
import styles from './SidebarBtnContainer.module.css';
import CreateBtn from './CreateBtn/CreateBtn';
import ImportBtn from './ImportBtn/ImportBtn';

const SidebarBtnContainer = props => {
  const result = truth => {
    if (truth) {
      return (
        <div className={styles.button__container_hidden}>
          <CreateBtn isHide={props.isHide} />
          <ImportBtn isHide={props.isHide} />
        </div>
      );
    } else {
      return (
        <div className={styles.button__container}>
          <CreateBtn isHide={props.isHide} />
          <ImportBtn isHide={props.isHide} />
        </div>
      );
    }
  };

  return result(props.isHide);
};

export default SidebarBtnContainer;
