import React from 'react';
import styles from './CreateBtn.module.css';
import userPlus from '../../../../../images/menu__user-plus.png';

const CreateBtn = props => {
  const result = truth => {
    if (truth) {
      return (
        <button className={styles.createBtn_hidden}>
          <img src={userPlus} alt="Добавить резюме" />
        </button>
      );
    } else {
      return <button className={styles.createBtn}>Создать резюме</button>;
    }
  };

  return result(props.isHide);
};

export default CreateBtn;
