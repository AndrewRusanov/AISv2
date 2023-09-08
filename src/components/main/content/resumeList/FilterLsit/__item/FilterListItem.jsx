import React from 'react';
import styles from './FilterListItem.module.css';

const FilterListItem = props => {
  return (
    <button className={styles.filteritem}>
      <p className={styles.filteritem__text}>{props.value}</p>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.filteritem__image}
      >
        <path
          d="M16.75 6.75L16.75 17.25"
          stroke="#989898"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.75 8.75L16.75 6.75L18.75 8.75"
          stroke="#989898"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.75 15.25L16.75 17.25L18.75 15.25"
          stroke="#989898"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.25 6.75H5.25"
          stroke="#989898"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.25 12H5.25"
          stroke="#989898"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.25 17.25H5.25"
          stroke="#989898"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default FilterListItem;
