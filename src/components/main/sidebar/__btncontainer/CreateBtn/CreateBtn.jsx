import React from 'react';
import styles from './CreateBtn.module.css';
import userPlus from '../../../../../images/menu__user-plus.png';
import { NavLink } from 'react-router-dom';

const CreateBtn = props => {
  const result = truth => {
    if (truth) {
      return (
        <NavLink to="/entry">
          <button className={styles.createBtn_hidden}>
            <img src={userPlus} alt="Добавить резюме" />
          </button>
        </NavLink>
      );
    } else {
      return (
        <NavLink to="/entry">
          <button className={styles.createBtn}>Создать резюме</button>
        </NavLink>
      );
    }
  };

  return result(props.isHide);
};

export default CreateBtn;
