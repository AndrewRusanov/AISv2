import React from 'react';
import styles from './ImportBtn.module.css';
import { NavLink } from 'react-router-dom';

const ImportBtn = props => {
  const result = truth => {
    if (truth) {
      return (
        <NavLink to="import">
          <button className={styles.importBtn_hidden} type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13.5L12 6.75"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.75 11.25L12 13.5L14.25 11.25"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.75 12L6.75 17.25L17.25 17.25V12"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </NavLink>
      );
    } else {
      return (
        <NavLink to="import">
          <button className={styles.importBtn}>Импорт</button>
        </NavLink>
      );
    }
  };

  return result(props.isHide);
};

export default ImportBtn;
