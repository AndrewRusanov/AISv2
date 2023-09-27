import React from 'react';
import styles from './Statusbar.module.css';

const Statusbar = () => {
  return (
    <div className={styles.statusbar__container}>
      <div className={styles.status__container}>
        <div className={styles.status__circle}></div>
        <p className={styles.status__text}>Все</p>
      </div>
      <div className={styles.status__container}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.status__icon}
        >
          <g clipPath="url(#clip0_108_3291)">
            <path
              d="M14.75 6.25H9.25C8.14543 6.25 7.25 7.14543 7.25 8.25V17.7395C7.25 18.6227 8.31122 19.0723 8.94567 18.4579L11.3043 16.1737C11.6921 15.7982 12.3079 15.7982 12.6957 16.1737L15.0543 18.4579C15.6888 19.0723 16.75 18.6227 16.75 17.7395V8.25C16.75 7.14543 15.8546 6.25 14.75 6.25Z"
              stroke="#231F20"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_108_3291">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.status__icon}
        >
          <g clipPath="url(#clip0_108_3281)">
            <path
              d="M12.005 7.245L12.005 7.255"
              stroke="#231F20"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.005 11.995L12.005 12.005"
              stroke="#231F20"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.005 16.745L12.005 16.755"
              stroke="#231F20"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_108_3281">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Statusbar;
