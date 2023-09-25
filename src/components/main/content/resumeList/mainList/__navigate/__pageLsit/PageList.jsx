import React, { useState } from 'react';
import styles from './PageList.module.css';
import arrowLeft from '../../../../../../../images/arrow__left_navigate.png';
import arrowRight from '../../../../../../../images/arrow__right_navigate.png';

const PageList = () => {
  const [opacityButton, setOpacityButton] = useState(styles.arrow__disabled);

  return (
    <div className={styles.page__list_wrapper}>
      <img src={arrowLeft} alt="Предыдущая страница" className={opacityButton} />
      <span className={styles.currentPageText}>1</span>
      <span className={styles.currentPageText}>&nbsp;&ndash;&nbsp;10</span>
      <img src={arrowRight} alt="Следующая страница" className={opacityButton} />
    </div>
  );
};

export default PageList;
